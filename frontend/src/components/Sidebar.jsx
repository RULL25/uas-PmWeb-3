import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Sidebar({ onRefresh }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <button className="sidebar-btn" aria-label="menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="sidebar-brand">
          <div className="logo-small" />
        </div>
      </div>

      <nav className="sidebar-nav">
        <button className="nav-item" onClick={onRefresh} title="Refresh data">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 10-3.2 6.8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>Refresh</span>
        </button>
      </nav>

      <div className="sidebar-bottom">
        <ThemeToggle />
      </div>
    </aside>
  );
}
