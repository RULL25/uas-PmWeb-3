import React, { useState } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "../contract";

export default function DonationForm({ signer, onSuccess }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!signer) {
      setStatus("Connect your wallet first.");
      return;
    }
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setStatus("Masukkan jumlah valid (ETH).");
      return;
    }

    try {
      setLoading(true);
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const tx = await contract.donate({ value: ethers.parseEther(amount) });
      setStatus("Menunggu konfirmasi transaksi...");
      await tx.wait();
      setStatus("Donasi berhasil ✔");
      setAmount("");
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      setStatus("Transaksi gagal atau dibatalkan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit} style={{display:'flex',gap:8,alignItems:'center'}}>
      <input
        aria-label="amount"
        placeholder="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{flex:'0 0 120px',padding:'8px 10px',borderRadius:8,border:'1px solid rgba(15,23,42,0.06)'}}
      />
      <button type="submit" disabled={loading} style={{background:'#0b76ef',color:'#fff',border:'none',padding:'8px 12px',borderRadius:8,fontWeight:600}}>
        {loading ? 'Processing...' : 'Donate'}
      </button>
      <div style={{fontSize:13,color:'#475569'}}>{status}</div>
    </form>
  );
}
