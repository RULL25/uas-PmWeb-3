# UAS Pemrograman Web

## Identitas
- Nama  : Syahrullah
- NIM   : 241111090
- Kelas : Informatika C

## Deskripsi Proyek
Aplikasi web full-stack sederhana menggunakan React.js dan Node.js yang
terintegrasi dengan blockchain Ethereum (Sepolia Testnet) menggunakan Ethers.js.
Aplikasi menampilkan saldo wallet, daftar donasi dari smart contract, serta
data transaksi dummy dari backend API.

## Teknologi yang Digunakan
- React.js (Vite)
- Node.js & Express.js
- Ethers.js
- Solidity
- MetaMask
- Ethereum Sepolia Testnet

## Fitur Aplikasi
- Koneksi wallet menggunakan MetaMask
- Menampilkan alamat dan saldo wallet
- Membaca data donasi dari smart contract
- Backend REST API (`GET /api/transactions`)
- Desain responsif menggunakan CSS Grid
- Error handling saat koneksi wallet gagal

## Cara Menjalankan Aplikasi

### Backend
```bash
cd backend
npm install
node index.js

### Frontend
```bash
cd frontend
npm install
npm run dev