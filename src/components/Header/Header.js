import React from 'react';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.Header}>
      <h1>Resourcely</h1>
      <h2>Welcome, User!</h2>
    </div>
  );
}

export default Header;
