import React from 'react'

const Disclamer = () => {
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

  const linkStyle = {
    color: '#f97316',
    textDecoration: 'none',
  };

  return (
         <div style={containerStyle}>
      <h1 style={headingStyle}>Disclaimer</h1>
      <p style={{ ...paragraphStyle, textAlign: 'center', color: '#f97316' }}>
        Please read these terms carefully before using ShopNest
      </p>

      <h2 style={subheadingStyle}>1. General Information</h2>
      <p style={paragraphStyle}>
        ShopNest is provided for informational and educational purposes only. The content,
        products, and services offered on this platform are presented &ldquo;as is&rdquo;
        without any representations or warranties, express or implied. We do not guarantee
        that the site will be uninterrupted, error-free, or free of harmful components.
      </p>

      <h2 style={subheadingStyle}>2. No Financial Advice</h2>
      <p style={paragraphStyle}>
        Any product reviews, recommendations, or comparisons on ShopNest are for general
        guidance only. They do not constitute professional financial, legal, or investment
        advice. Users should conduct their own due diligence before making any purchasing
        or financial decisions.
      </p>

      <h2 style={subheadingStyle}>3. Third-Party Links</h2>
      <p style={paragraphStyle}>
        ShopNest may contain links to third-party websites or services that are not owned
        or controlled by us. We have no control over and assume no responsibility for the
        content, privacy policies, or practices of any third-party sites. By visiting
        linked sites, you release ShopNest from any claims arising from your use of those
        sites.
      </p>

      <h2 style={subheadingStyle}>4. User-Generated Content</h2>
      <p style={paragraphStyle}>
        Users may post reviews, comments, or other content on ShopNest. All user-generated
        content reflects the opinions of the individual author and not those of ShopNest.
        We reserve the right to remove any content that violates our terms or is deemed
        inappropriate.
      </p>

      <h2 style={subheadingStyle}>5. Limitation of Liability</h2>
      <p style={paragraphStyle}>
        To the fullest extent permitted by applicable law, ShopNest and its founders,
        contributors, and affiliates shall not be liable for any direct, indirect,
        incidental, special, consequential, or punitive damages arising out of or in
        connection with your use of this platform.
      </p>

      <h2 style={subheadingStyle}>6. Intellectual Property</h2>
      <p style={paragraphStyle}>
        All content on ShopNest — including text, graphics, logos, images, and software —
        is the exclusive property of ShopNest and is protected by international copyright
        and intellectual property laws. Unauthorized use is strictly prohibited.
      </p>

      <h2 style={subheadingStyle}>7. Changes to This Disclaimer</h2>
      <p style={paragraphStyle}>
        We reserve the right to modify this disclaimer at any time. Changes will be
        effective immediately upon posting an updated version on this page. Continued use
        of ShopNest constitutes acceptance of the revised terms.
      </p>

      <h2 style={subheadingStyle}>8. Contact</h2>
      <p style={paragraphStyle}>
        If you have any questions about this disclaimer, contact us at{' '}
        <a href="mailto:sahilkhola@example.com" style={linkStyle}>
          sahilkhola@example.com
        </a>
        .
      </p>
    </div>
  )
}

export default Disclamer
