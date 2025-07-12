'use client';
import { useEffect } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  useEffect(() => {
    const handleScroll = () => {
      const blurValue = Math.min(window.scrollY / 200, 0.5); // Calcula o blur de 0 a 0.5
      const heroElement = document.querySelector(`.${styles.hero}`) as HTMLElement;
      if (heroElement) {
        heroElement.style.filter = `blur(${blurValue}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <h1 className={styles.heroTitle}>{title}</h1>
      </div>
      <div className={styles.scrollIndicator}>↓</div>
    </div>
  );
}
