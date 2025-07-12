'use client';
import React, { useState, useEffect } from 'react';
import styles from './Testimonial.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    { name: 'João Silva', text: 'Ótima experiência! O hotel é incrível e o atendimento foi impecável.', rating: 5 },
    { name: 'Maria Oliveira', text: 'Adorei a estadia! Quartos confortáveis e excelente localização.', rating: 4.5 },
    { name: 'Carlos Santos', text: 'Serviços de alta qualidade e equipe muito atenciosa. Recomendo!', rating: 4 },
    { name: 'Ana Paula', text: 'Ambiente muito agradável e limpo. Voltarei com certeza!', rating: 5 },
    { name: 'Pedro Lima', text: 'Ótimo custo-benefício e localização perfeita.', rating: 4 },
    { name: 'Fernanda Costa', text: 'Equipe muito simpática e prestativa.', rating: 4.5 },
    { name: 'Rafael Souza', text: 'Café da manhã delicioso e variado.', rating: 5 },
    { name: 'Juliana Mendes', text: 'Quartos espaçosos e bem decorados.', rating: 4.5 },
    { name: 'Lucas Almeida', text: 'Piscina incrível e área de lazer completa.', rating: 5 },
    { name: 'Carolina Dias', text: 'Recomendo para famílias e casais.', rating: 4 },
];

const renderStars = (rating:number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className={styles.star} />);
        } else if (i - rating === 0.5) {
            stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className={styles.star} />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className={`${styles.star} ${styles.empty}`} />);
        }
    }
    return stars;
};

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / itemsPerPage));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const startIndex = currentIndex * itemsPerPage;
    const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className={styles.testimonial}>
            <h2>O que nossos hóspedes dizem</h2>
            <div className={styles.carousel}>
                {visibleTestimonials.map((testimonial, index) => (
                    <div key={index} className={styles.testimonialItem}>
                        <p className={styles.text}>&quot;{testimonial.text}&quot;</p>
                        <div className={styles.stars}>{renderStars(testimonial.rating)}</div>
                        <p className={styles.author}>- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
