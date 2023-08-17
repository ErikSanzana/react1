import React from 'react';

function Footer({ text }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>{text}</p>
      </div>
    </footer>
  );
}

export default Footer;
