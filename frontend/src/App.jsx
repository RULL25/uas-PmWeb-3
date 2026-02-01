import { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import { contractAddress, contractABI } from "./contract";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import WalletConnect from "./components/WalletConnect";
import TransactionCard from "./components/TransactionCard";
import DonationForm from "./components/DonationForm";

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [donations, setDonations] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [error, setError] = useState("");
  const [network, setNetwork] = useState("");
  const [chainName, setChainName] = useState("");

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setError("MetaMask tidak terdeteksi");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();

      setProvider(provider);
      setSigner(signer);

      setAccount(accounts[0]);

      const bal = await provider.getBalance(accounts[0]);
      setBalance(ethers.formatEther(bal));

      const net = await provider.getNetwork();
      setNetwork(net.chainId);
      setChainName(net.name || "");

      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const data = await contract.getDonations();
      setDonations(data || []);

    } catch (err) {
      console.error(err);
      setError("Gagal koneksi ke wallet");
    }
  };

  const fetchBackendTransactions = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/transactions");
      const data = await res.json();
      setTransactions(data);
    } catch (err) {
      console.error("Gagal ambil data backend:", err);
      setError("Gagal ambil transaksi dari backend");
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      console.error('copy failed', e);
    }
  };

  const shorten = (addr) => {
    if (!addr) return '';
    return addr.slice(0,6) + '...' + addr.slice(-4);
  };

  useEffect(() => {
    connectWallet();
    fetchBackendTransactions();


  }, []);

  return (
    <div className="container">
      <Header />
      <div className="layout">
        <Sidebar onRefresh={() => { fetchBackendTransactions(); connectWallet(); }} />

        <main className="main">

      {error && <p className="error">{error}</p>}

      <WalletConnect 
        account={account}
        balance={balance}
        network={network}
        chainName={chainName}
        onConnect={connectWallet}
        onCopyAddress={copyToClipboard}
        shorten={shorten}
      />

      <section className="grid-two">
        <div>
          <h2>Donasi On-chain</h2>
          <div className="card">
            <DonationForm signer={signer} onSuccess={() => { connectWallet(); fetchBackendTransactions(); }} />
          </div>

          <h2 style={{marginTop:18}}>Daftar Donasi</h2>
          <div className="grid">
            {donations.map((d, i) => (
              <TransactionCard key={i} from={d.donor} amount={`${ethers.formatEther(d.amount)} ETH`} message="On-chain donation" />
            ))}
          </div>
        </div>

        <div>
          <h2>Transaksi (API Backend)</h2>
          <div className="grid">
            {transactions.map((t) => (
              <TransactionCard key={t.id} from={t.from} amount={t.amount} message={t.message} />
            ))}
          </div>
        </div>
      </section>

        </main>
      </div>
    </div>
  );
}

export default App;
