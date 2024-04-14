import React, { useState } from 'react';
import QRCode from 'qrcode'; // Corrected import
import image from '../assets/images1.jpg'

export default function Main() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = () => {
    QRCode.toDataURL(url,{width :800,margin:2}, (err, url) => { // Corrected usage of QRCode
      if (err) return console.error(err);
      console.log(url);
      setQrCode(url);
    });
  };

  return (
    <div className='main'>
    <div className='content'>
    <div>
      <h1 className='primary-heading'>QR Code Generator</h1>
      <p className='txt'>QR Codes allow smartphone users to access your website simply and quickly</p>
      <p className='txt'>Enter you URL below to generate a QR Code and download the image</p>
      <input className='input'
        type='text'
        placeholder='Enter the URL'
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      <button className='genrate-btn' onClick={generateQRCode}>Generate</button>
      </div>
      <div>
      <img src={image} alt='qr image'/>
      </div>
        </div>
         <div className='code'>
          {qrCode && <>
        <img className='qr' src={qrCode} alt='QR Code' />
        <a className='code-btn' href={qrCode} download="qrcode.png">Download</a>
      </>}    
      </div> 
          </div>
  );
}
