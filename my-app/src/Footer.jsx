import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.socialNav}>
        <a href="https://t.me" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:mail@example.com">Email</a>
      </nav>
      <p className={styles.copy}>© 2026 MyApp</p>
    </footer>
  );
};

export default Footer;