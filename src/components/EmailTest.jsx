import React from 'react';
import emailjs from '@emailjs/browser';

function EmailTest() {
  const testEmail = () => {
    // Hard-coded values for testing
    const SERVICE_ID = 'service_hnlwgwx';
    const TEMPLATE_ID = prompt('Enter your EmailJS Template ID:');
    const PUBLIC_KEY = 'y7vOA6dJ5VGMMe0oe';
    
    if (!TEMPLATE_ID) {
      alert('Template ID is required!');
      return;
    }
    
    const templateParams = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from your portfolio.',
      from_name: 'Test User',
      from_email: 'test@example.com',
      to_name: 'Ritu Jaiswal',
      to_email: 'jritu961@gmail.com'
    };
    
    console.log('Testing with:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
    
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully! Check your inbox at jritu961@gmail.com');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert(`Failed: ${err.text || err.message}`);
      });
  };
  
  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px', borderRadius: '8px' }}>
      <h3>EmailJS Test</h3>
      <p>Click the button below to test your EmailJS setup:</p>
      <button 
        onClick={testEmail}
        style={{
          padding: '10px 20px',
          background: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Test Email Service
      </button>
      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>Go to <a href="https://dashboard.emailjs.com/admin/templates" target="_blank">EmailJS Templates</a></li>
          <li>Create a new template with variables: {`{{name}}, {{email}}, {{message}}`}</li>
          <li>Copy the Template ID (looks like: template_xxxxxxx)</li>
          <li>Click the test button and paste the Template ID</li>
        </ol>
      </div>
    </div>
  );
}

export default EmailTest;