import React from 'react';

const ReturnPolicy = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'left',
    color: '#fff',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#f97316',
    textAlign: 'center',
  };

  const subheadingStyle = {
    fontSize: '1.3rem',
    color: '#f97316',
    marginTop: '30px',
    marginBottom: '10px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '5px',
  };

  const paragraphStyle = {
    color: '#a1a1aa',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '15px',
  };

  const listStyle = {
    color: '#a1a1aa',
    fontSize: '1.1rem',
    lineHeight: '2',
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Return Policy</h1>
      <p style={{ ...paragraphStyle, textAlign: 'center', color: '#f97316' }}>
        Last updated: July 2026
      </p>

      <h2 style={subheadingStyle}>1. Return Eligibility</h2>
      <ul style={listStyle}>
        <li>Items must be returned within <strong>30 days</strong> of delivery.</li>
        <li>Products must be unused, in original condition, and in original packaging.</li>
        <li>Items with visible wear, damage, or missing tags are not eligible for return.</li>
        <li>Sale items and discounted products are <strong>non-returnable</strong>.</li>
      </ul>

      <h2 style={subheadingStyle}>2. How to Initiate a Return</h2>
      <ul style={listStyle}>
        <li>Contact our support team at <strong>sahilkhola@example.com</strong> with your order number.</li>
        <li>Receive a Return Merchandise Authorization (RMA) number.</li>
        <li>Pack the item securely in its original packaging.</li>
        <li>Ship the item to the address provided in the RMA email.</li>
      </ul>

      <h2 style={subheadingStyle}>3. Refunds</h2>
      <ul style={listStyle}>
        <li>Refunds are processed within <strong>5–7 business days</strong> after the returned item is received and inspected.</li>
        <li>Refunds are issued to the original payment method.</li>
        <li>Shipping and handling fees are <strong>non-refundable</strong>.</li>
      </ul>

      <h2 style={subheadingStyle}>4. Exchanges</h2>
      <ul style={listStyle}>
        <li>Exchanges are subject to product availability.</li>
        <li>Contact support with your order number and the desired replacement item.</li>
      </ul>

      <h2 style={subheadingStyle}>5. Non-Returnable Items</h2>
      <ul style={listStyle}>
        <li>Perishable goods (food, beverages, etc.)</li>
        <li>Personal care and hygiene products</li>
        <li>Gift cards</li>
        <li>Items marked as final sale</li>
      </ul>

      <h2 style={subheadingStyle}>6. Contact Us</h2>
      <p style={paragraphStyle}>
        If you have any questions about our return policy, reach out to us at{' '}
        <strong>sahilkhola@example.com</strong> or through the contact form on our website.
      </p>
    </div>
  );
};

export default ReturnPolicy;