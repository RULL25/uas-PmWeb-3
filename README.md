# UAS Pemrograman Web - Full-Stack Web3 Application

## 📋 Identitas
- **Nama**  : Syahrullah
- **NIM**   : 241111090
- **Kelas** : Informatika C

## 🎯 Deskripsi Proyek

Aplikasi web full-stack profesional yang mengintegrasikan teknologi Web3 (Blockchain) dengan antarmuka modern dan responsif. Aplikasi ini memungkinkan pengguna untuk:

- 🔗 Menghubungkan wallet MetaMask
- 💰 Melihat saldo dan alamat wallet secara realtime
- 💳 Melakukan donasi langsung ke smart contract Ethereum
- 📊 Melihat daftar donasi dari blockchain
- 📋 Menampilkan transaksi dari backend API
- 🌓 Toggle tema (light/dark mode)

## 🛠 Teknologi yang Digunakan

### Frontend
- **React.js** (v19.2.0) dengan Vite
- **Ethers.js** (v6.16.0) - Interaksi dengan blockchain
- **Modern CSS** - Desain responsive dengan CSS Grid dan Flexbox
- **JavaScript ES6+**

### Backend
- **Node.js** dengan Express.js (v5.2.1)
- **CORS** untuk komunikasi cross-origin
- **REST API** architecture

### Blockchain
- **Ethereum Sepolia Testnet** - Network untuk simulasi
- **Smart Contract** - SimpleDonation (untuk mengelola donasi)
- **MetaMask** - Wallet browser extension

## ✨ Fitur Aplikasi

### 1. **Wallet Connection**
- ✅ Koneksi MetaMask dengan visual status indicator
- ✅ Menampilkan alamat wallet (shortened) dengan copy button
- ✅ Tampilkan balance ETH realtime
- ✅ Deteksi network (Sepolia Testnet)
- ✅ Reconnect button untuk refresh data

### 2. **On-Chain Donations**
- ✅ Form donasi dengan input ETH amount
- ✅ Submit transaksi langsung ke smart contract
- ✅ Status feedback (pending/success/error)
- ✅ Auto-refresh daftar donasi setelah transaksi berhasil

### 3. **Donasi Blockchain**
- ✅ Daftar semua donasi dari smart contract
- ✅ Tampilkan donor address dan jumlah ETH
- ✅ Card-based layout dengan grid responsif

### 4. **Transaksi Backend**
- ✅ Fetch transaksi dari REST API (`GET /api/transactions`)
- ✅ Tampilkan data dummy transaksi
- ✅ Refresh button untuk update data

### 5. **User Interface**
- ✅ **Professional Dashboard** - Layout clean dengan sidebar navigation
- ✅ **Responsive Design** - Mobile-friendly dengan media queries
- ✅ **Theme Toggle** - Light/Dark mode dengan persistent storage
- ✅ **Smooth Animations** - Hover effects dan transitions
- ✅ **Color Consistency** - CSS variables untuk brand colors

### 6. **Error Handling**
- ✅ Pesan error jelas ketika MetaMask tidak terdeteksi
- ✅ Error feedback untuk wallet connection
- ✅ Try-catch untuk API failures
- ✅ Graceful fallback states

## 📁 Struktur Proyek

```
UAS-PmWeb-3/
├── backend/
│   ├── index.js              # Express server dengan /api/transactions
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # Main app component
│   │   ├── App.css           # Global styles dengan CSS variables
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── contract.js       # Smart contract ABI & address
│   │   ├── components/
│   │   │   ├── Header.jsx    # Header dengan branding
│   │   │   ├── Sidebar.jsx   # Sidebar dengan menu & theme toggle
│   │   │   ├── ThemeToggle.jsx    # Theme switch component
│   │   │   ├── WalletConnect.jsx  # Wallet connection card
│   │   │   ├── WalletConnect.css
│   │   │   ├── TransactionCard.jsx # Reusable transaction display
│   │   │   └── DonationForm.jsx    # On-chain donation form
│   │   ├── assets/
│   │   │   └── logo.svg
│   │
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
└── README.md (this file)
```

## 🚀 Cara Menjalankan Aplikasi

### Prerequisites
- **Node.js** v16+ terinstall
- **MetaMask** browser extension terinstall
- **Ethereum Sepolia Testnet** ditambahkan di MetaMask

### 1. Backend Setup

```bash
cd backend
npm install
node index.js
```

Backend akan berjalan di `http://localhost:5000`

**Endpoints yang tersedia:**
- `GET /api/transactions` - Return daftar transaksi dummy JSON

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend akan berjalan di `http://localhost:5173` (atau port lain yang ditunjukkan Vite)

### 3. Konfigurasi MetaMask
1. Buka MetaMask extension
2. Pastikan network diset ke **Sepolia Testnet**
3. (Opsional) Dapatkan testnet ETH dari [Sepolia Faucet](https://sepoliafaucet.com)

### 4. Akses Aplikasi
- Buka browser ke URL frontend (http://localhost:5173)
- Klik tombol **"🔗 Connect Wallet"**
- Approve connection di MetaMask popup
- Aplikasi siap digunakan!

## 📝 Fitur Penggunaan

### Connect Wallet
1. Klik tombol "🔗 Connect Wallet" di card wallet
2. Approve di MetaMask
3. Wallet address dan balance akan ditampilkan
4. Status indicator berubah menjadi hijau (connected)

### Donasi On-Chain
1. Pastikan wallet terhubung
2. Masukkan amount ETH di form "Donasi On-chain"
3. Klik tombol "Donate"
4. Approve transaksi di MetaMask
5. Tunggu confirmation (biasanya 12 detik)
6. Donasi akan muncul di "Daftar Donasi"

### Refresh Data
- Klik tombol "Refresh" di sidebar untuk update transaksi terbaru
- Atau klik "🔄 Reconnect" di wallet card

### Toggle Tema
- Klik ikon theme toggle di sidebar (moon/sun icon)
- Pilihan tema tersimpan di localStorage

## 🎨 Design Features

### Color Palette
- **Primary**: #0b76ef (Blue)
- **Light Mode**: Off-white (#f8fafc), Dark text (#0f172a)
- **Dark Mode**: Dark gray (#0f1216), Light text (#e2e8f0)

### Typography
- Font Family: Inter, system sans-serif
- Responsive font sizes
- Clear visual hierarchy

### Responsive Breakpoints
- Desktop: 1000px+
- Tablet: 640px - 999px
- Mobile: < 640px

## 🔐 Smart Contract Info

**Contract Address**: `0x8e2C8Ee639c513B266bAd2F0265D16AD2AF95F29` (Sepolia Testnet)

**Functions:**
- `donate()` - Send ETH donation (payable)
- `getDonations()` - Retrieve all donations
- `donations(uint256)` - Get specific donation

## 🧪 Testing

### Test Wallet Connection
1. Disconnect MetaMask
2. Klik "Connect Wallet" - seharusnya error message
3. Reconnect MetaMask
4. Status harus berubah ke connected

### Test Donation
1. Masukkan 0.001 ETH
2. Klik Donate
3. Approve di MetaMask
4. Tunggu confirmation
5. Verifikasi donation muncul di list

### Test API
1. Klik Refresh button
2. Backend transactions harus ter-update
3. Seharusnya menampilkan 2 dummy transactions

## 📦 Dependencies

**Frontend:**
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "ethers": "^6.16.0",
  "vite": "^7.2.4"
}
```

**Backend:**
```json
{
  "express": "^5.2.1",
  "cors": "^2.8.6"
}
```

## 🐛 Troubleshooting

### MetaMask tidak terdeteksi
- Pastikan MetaMask extension terinstall dan enabled
- Refresh page setelah install/enable MetaMask

### Network salah
- Di MetaMask, pastikan network adalah "Sepolia Testnet"
- Smart contract hanya berjalan di Sepolia, tidak di mainnet

### Transaksi gagal
- Pastikan punya cukup testnet ETH
- Ambil testnet ETH dari [Sepolia Faucet](https://sepoliafaucet.com)

### CORS error (backend tidak tersambung)
- Pastikan backend sudah jalan di port 5000
- Check terminal backend untuk error messages

## 📚 Resources

- [Ethers.js Documentation](https://docs.ethers.org/v6/)
- [MetaMask Developer Docs](https://docs.metamask.io/)
- [Ethereum Sepolia Testnet](https://sepolia.etherscan.io/)
- [Solidity Smart Contracts](https://docs.soliditylang.org/)

## 📄 Lisensi

Proyek ini dibuat untuk keperluan akademik (UAS Pemrograman Web).

---

**Last Updated:** February 1, 2026  
**Status:** Production Ready ✅
