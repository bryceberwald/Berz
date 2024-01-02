import React from 'react';
import './QRCodeBox.css';

export default function QRCodeBox() {
  return (
    <div className='QRCodeBox-Div'>
      <img className='QRCodeBox-Image' src={process.env.PUBLIC_URL + '/QR_Code_Image.png'} alt='QR Code to https://www.berz.io/' />
    </div>
  );
};