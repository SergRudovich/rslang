import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/">Home </Link>
      <Link to="/textbook">textbook </Link>
      <Link to="/statistic">statistic </Link>
      <Link to="/audiocall">audiocall </Link>
      <Link to="/sprint">sprint </Link>
      <Link to="/authorization">authorization </Link>
    </div>
  );
}

export default Header;
