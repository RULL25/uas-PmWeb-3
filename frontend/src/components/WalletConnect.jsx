import React from 'react';
import '../components/WalletConnect.css';

export default function WalletConnect({ account, balance, network, chainName, onConnect, onCopyAddress, shorten }) {
  const isConnected = !!account;
  
  return (
    <div className={`wallet-connect-card ${isConnected ? 'connected' : 'disconnected'}`}>
      <div className="wallet-status">
        <div className="status-indicator">
          <div className={`status-dot ${isConnected ? 'active' : 'inactive'}`} />
          <span className="status-text">{isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>
      </div>

      {isConnected ? (
        <div className="wallet-info">
          <div className="info-item">
            <label>Wallet Address</label>
            <div className="address-display">
              <code>{shorten(account)}</code>
              <button className="copy-icon" onClick={() => onCopyAddress(account)} title="Copy full address">
                📋
              </button>
            </div>
          </div>

          <div className="info-row">
            <div className="info-item">
              <label>Balance</label>
              <div className="balance-display">{balance ? `${Number(balance).toFixed(4)}` : '0.0000'} <span className="eth-label">ETH</span></div>
            </div>
            <div className="info-item">
              <label>Network</label>
              <div className="network-display">
                {network === 11155111 ? 'Sepolia Testnet' : chainName || network || '-'}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="wallet-empty">
          <p className="empty-msg">No wallet connected</p>
          <p className="empty-hint">Click the button below to connect your MetaMask wallet</p>
        </div>
      )}

      <button 
        className={`connect-btn ${isConnected ? 'disconnect' : 'connect'}`}
        onClick={onConnect}
      >
        {isConnected ? '🔄 Reconnect' : '🔗 Connect Wallet'}
      </button>
    </div>
  );
}
