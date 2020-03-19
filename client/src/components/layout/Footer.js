import React from 'react';
import { Card } from 'reactstrap';
import { DiReact } from "react-icons/di";


const bullet = '\u2022';
const copyright = '\u00A9';
const trademark = '\u2122';

const Footer = () => {
  return (
    <Card body inverse style={{ backgroundColor: '#007bff' }} className="footer">
      <h6 className="color:var(bright-color)">VacTRACK{trademark} Powered by <DiReact style={{ color: "#80D8F7", fontSize: 30 }} />React
        <br />Copyright {copyright} 2019 Ronald K. Antonio <br /> {bullet}<a href="http://antoniosmagnet.com" target='_blank' rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>  Antonio's Magnet </a> {bullet}</h6>
    </Card >
  );
}

export default Footer;