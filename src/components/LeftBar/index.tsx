import React from 'react';
import {
  Link,
} from 'react-router-dom';

// -- styles
import './styles.scss';

// -- img
import logo from '../../assets/logo-tc.png';

function LeftBar() {
  return (
    <div className="containerLeftBar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="TradersClub" />
        </Link>
      </div>
    </div>
  );
}

export default LeftBar;
