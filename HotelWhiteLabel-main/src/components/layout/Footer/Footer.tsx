import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.section}>
                <h4>Informações Legais</h4>
                <p>&copy; {new Date().getFullYear()} Hotel White Label. Todos os direitos reservados.</p>
                <p>Política de Privacidade | Termos de Uso</p>
            </div>
            <div className={styles.section}>
                <h4>Páginas do Site</h4>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">Sobre Nós</a></li>
                    <li><a href="/rooms">Quartos</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </div>
            <div className={styles.section}>
                <h4>Redes Sociais</h4>
                <ul className={styles.socialIcons}>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
            <div className={styles.section}>
                <h4>Contato Rápido</h4>
                <p>Entre em contato conosco pelo WhatsApp:</p>
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                >
                    Fale Conosco
                </a>
            </div>
        </footer>
    );
};

export default Footer;
