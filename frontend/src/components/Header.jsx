import React from "react";
import logo from "../assets/logo.svg";
// Header kept minimal; ThemeToggle moved to Sidebar

export default function Header() {
  return (
    <header className="app-header">
      <div className="left">
        <button className="menu-btn" aria-label="menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="brand">
          <img src={logo} alt="logo" className="logo" />
          <div>
            <div className="title">UAS PemWeb</div>
            <div className="subtitle">Demo Donation & Transactions</div>
          </div>
        </div>
      </div>
    </header>
  );
}
