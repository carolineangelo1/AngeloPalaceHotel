"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Session.module.css';
import Image from 'next/image';

interface SessionProps {
  title: string;
  subtitle: string;
  description?: string;
  buttonText?: string;
  imageUrl: string;
  reverse?: boolean;
}

const Session: React.FC<SessionProps> = ({ title, subtitle, description, buttonText, imageUrl, reverse = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className={`${styles.session} ${reverse ? styles.reverse : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          className={styles.image}
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>
          {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        </p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </motion.section>
  );
};

export default Session;
