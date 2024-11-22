"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/contactanos/contactanos.module.css";

const ContactanosPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        celular: '',
        ciudad: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleClose = () => {
        router.push('/');
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Verificar que todos los campos estén llenos
        if (!Object.values(formData).every(value => value.trim())) {
            alert('Por favor, complete todos los campos');
            return;
        }
    
        setIsSubmitting(true);
    
        try {
            console.log('Enviando datos:', formData); // Log para debugging
    
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            console.log('Respuesta recibida:', data); // Log para debugging
    
            if (response.ok) {
                alert('¡Formulario enviado exitosamente!');
                setTimeout(() => {
                    router.push('/');
                }, 1500);
            } else {
                alert(`Error: ${data.error}\nDetalles: ${data.details || 'No hay detalles disponibles'}`);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error); // Log para debugging
            alert(`Error al enviar el formulario: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Head>
                <title>Contáctanos - Royal Enfield Villavicencio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                <button onClick={handleClose} className={styles.closeButton}>×</button>
                <h1 className={styles.title}>Cuéntanos quién eres</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="nombre" className={styles.label}>Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                className={styles.input}
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="apellido" className={styles.label}>Apellido</label>
                            <input 
                                type="text" 
                                id="apellido" 
                                className={styles.input}
                                value={formData.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="correo" className={styles.label}>Correo</label>
                        <input 
                            type="email" 
                            id="correo" 
                            className={styles.input}
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="celular" className={styles.label}>Celular</label>
                        <input 
                            type="tel" 
                            id="celular" 
                            className={styles.input}
                            value={formData.celular}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="ciudad" className={styles.label}>Ciudad</label>
                        <input 
                            type="text" 
                            id="ciudad" 
                            className={styles.input}
                            value={formData.ciudad}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
};

export default ContactanosPage;