'use client';
import React from 'react';
import styles from './TakeATour.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const TakeATour = () => {
    const videoUrl = "https://www.youtube.com/watch?v=example"; // Replace with your hotel's video URL

    return (
        <section className={styles.takeATour}>
            <h2>Faça um Tour pelo Nosso Hotel</h2>
            <p>Descubra tudo o que nosso hotel tem a oferecer assistindo ao nosso vídeo exclusivo.</p>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.playButton}>
                <FontAwesomeIcon icon={faPlay} />
            </a>
        </section>
    );
};

export default TakeATour;
