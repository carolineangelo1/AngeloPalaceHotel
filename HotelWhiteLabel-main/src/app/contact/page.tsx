import styles from './page.module.css';
import React from 'react';
export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.description}>If you have any questions, feel free to reach out to us!</p>

      <h2 className={styles.subheading}>Contact Options</h2>
      <ul className={styles.contactList}>
        <li>Phone: <a href="tel:+123456789" className={styles.link}>+1 234 567 89</a></li>
        <li>WhatsApp: <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className={styles.link}>Chat with us</a></li>
      </ul>

      <h2 className={styles.subheading}>Contact Form</h2>
      <form className={styles.form}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input type="text" id="name" name="name" className={styles.input} required />

        <label htmlFor="email" className={styles.label}>Email:</label>
        <input type="email" id="email" name="email" className={styles.input} required />

        <label htmlFor="message" className={styles.label}>Message:</label>
        <textarea id="message" name="message" rows={5} className={styles.textarea} required></textarea>

        <button type="submit" className={styles.button}>Send</button>
      </form>
    </div>
  );
}
