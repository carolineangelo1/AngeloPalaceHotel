'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faSwimmingPool, faCar, faUtensils, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import styles from './Services.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
    { name: 'Wi-Fi Gratuito', icon: faWifi },
    { name: 'Piscina', icon: faSwimmingPool },
    { name: 'Estacionamento', icon: faCar },
    { name: 'Restaurante', icon: faUtensils },
    { name: 'Academia', icon: faDumbbell },
];

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const reverse = false; // Set this to true if you want to reverse the layout

    return (
 <motion.section
      ref={ref}
      className={`${styles.services} ${reverse ? styles.reverse : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.header}>
        <h2>Nossos Serviços</h2>
        <p>Conheça os serviços que oferecemos para tornar sua estadia inesquecível.</p>
      </div>
      <div className={styles.carousel}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <FontAwesomeIcon icon={service.icon} className={styles.icon} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>
  </motion.section>
    );
};

export default Services;
