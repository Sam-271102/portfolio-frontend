import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (not really — you can hook this to a backend if needed)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" name="name" placeholder="Samuel Roy Jojo" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="samuelroyjojo2711@gmail.com" required value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
