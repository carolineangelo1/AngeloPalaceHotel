'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface HeaderProps {
  theme?: 'light' | 'dark';
  links: { href: string; label: string }[];
  backgroundImage?: string; // New prop for background image
}

export default function Header({ theme = 'light', links, backgroundImage }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
      className={`${styles.header} ${
        isScrolled
          ? theme === 'dark'
            ? styles.scrolledDark
            : styles.scrolledLight
          : ''
      }`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.title}>Hotel</div>
          <div className={styles.subtitle}>O seu refúgio de tranquilidade</div>
        </Link>
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? styles.active : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
