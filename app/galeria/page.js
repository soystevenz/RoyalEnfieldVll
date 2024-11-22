"use client"
import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from '@/components/WhatsAppButton';
import styles from './galeria.module.css';

const GaleriaPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        imagen: null
    });
    const [preview, setPreview] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                imagen: file
            }));
            // Crear preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
            if (!formData.imagen) {
                throw new Error('Por favor seleccione una imagen');
            }
    
            const formDataToSend = new FormData();
            formDataToSend.append('titulo', formData.titulo);
            formDataToSend.append('descripcion', formData.descripcion);
            formDataToSend.append('imagen', formData.imagen);
    
            const response = await fetch('/api/gallery', {
                method: 'POST',
                body: formDataToSend,
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.error || 'Error al subir la imagen');
            }
    
            alert('Imagen subida exitosamente');
            setFormData({ titulo: '', descripcion: '', imagen: null });
            setPreview('');
            setIsModalOpen(false);
            
            // Opcional: recargar la galería si la estás mostrando
            // await loadGallery();
        } catch (error) {
            console.error('Error:', error);
            alert(error.message || 'Error al subir la imagen');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="app">
            <Head>
                <title>Galería - Royal Enfield Villavicencio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img
                        src="/resources/banner.webp"
                        alt="Galería"
                        className={styles.image}
                    />
                </div>
                <h1 className={styles.title}>#ComparteTuRoyalEnfield</h1>
                <p className={styles.subtitle}>Comparte tu experiencia con Royal Enfield</p>
                <button 
                    className={styles.uploadButton}
                    onClick={() => setIsModalOpen(true)}
                >
                    Subir
                </button>
            </div>

            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button 
                            className={styles.closeButton}
                            onClick={() => {
                                setIsModalOpen(false);
                                setFormData({ titulo: '', descripcion: '', imagen: null });
                                setPreview('');
                            }}
                        >
                            ×
                        </button>
                        <h2 className={styles.title}>Comparte tu experiencia</h2>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="titulo">Título:</label>
                                <input
                                    type="text"
                                    id="titulo"
                                    name="titulo"
                                    value={formData.titulo}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="descripcion">Descripción:</label>
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="imagen">Imagen:</label>
                                <input
                                    type="file"
                                    id="imagen"
                                    name="imagen"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    required
                                />
                            </div>

                            {preview && (
                                <div className={styles.preview}>
                                    <img src={preview} alt="Preview" />
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Subiendo...' : 'Compartir'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <WhatsAppButton phoneNumber="573118113280" />
            <Footer />
        </div>
    );
};

export default GaleriaPage;