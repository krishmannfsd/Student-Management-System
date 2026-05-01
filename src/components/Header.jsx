import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <header className="header-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="btn-icon" style={{ backgroundColor: 'var(--accent-primary)', color: 'white', padding: '0.75rem' }}>
          <GraduationCap size={28} />
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Student Admin</h1>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>Manage your student records efficiently</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
