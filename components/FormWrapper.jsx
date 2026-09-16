'use client';

import { useState } from 'react';

export default function FormWrapper({ name, children, className = 'form-card' }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Netlify forms handle POST automatically when deployed.
    // For local testing & browser backup:
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const key = `rinngos_${name}_submissions`;

    try {
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      existing.push({ ...data, _submitted: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (err) {
      console.error('LocalStorage backup error:', err);
    }

    setSubmitted(true);
  };

  return (
    <form
      name={name}
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className={className}
    >
      <input type="hidden" name="form-name" value={name} />
      {children}
      {submitted && (
        <div className="success" style={{ display: 'block' }}>
          ✓ Form submitted successfully! On Netlify deployment, this submission is also logged to your site dashboard.
        </div>
      )}
    </form>
  );
}
