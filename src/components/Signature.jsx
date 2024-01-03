import React, { useRef, useState } from 'react';
import Transport from "../api/transport";
import Button from '@mui/material/Button';
import SignatureCanvas from 'react-signature-canvas';

const Sign = ({onPageUpdate}) => {
  const signatureRef = useRef();
  const [signatureDataURL, setSignatureDataURL] = useState('');

  const handleClear = () => {
    signatureRef.current.clear();
    setSignatureDataURL('');
  };

  const handleSave = () => {
    const dataURL = signatureRef.current.toDataURL();
    setSignatureDataURL(dataURL);
    onPageUpdate("Signiture",dataURL);
    // You can now send the dataURL to your backend or perform other actions with it
    // For simplicity, we are just displaying it here
    console.log('Signature DataURL:', dataURL);
  };

  return (
    <div className="border border-5 p-3 w-100" style={{ borderColor: '#0D619E !important' }}>
        
  
      <SignatureCanvas 
        ref={signatureRef}
        canvasProps={{ width: 495, height: 200, className: 'signature-canvas' }}
      />
     
      <div style={{ marginTop: 10 }}>
        <Button variant="outlined" color="primary" onClick={handleClear}>
          Clear
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave} style={{ marginLeft: 10 }}>
          Save
        </Button>
      </div>
      {signatureDataURL && (
        <div style={{ marginTop: 10 }}>
          <strong>Signature Preview:</strong>
          <br />
          <img src={signatureDataURL} alt="User Signature" style={{ border: '1px solid #ccc' }} />
        </div>
      )}
    </div>
  );
};

export default Sign;
