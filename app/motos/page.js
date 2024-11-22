// page.js
import Link from 'next/link';
import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/motos/motos.module.css";
import WhatsAppButton from '@/components/WhatsAppButton';
import WarrantyBadge from '@/components/WarrantyBadge';

const motospage = () => {
    const motos = [
        { id: 'hntr-350', name: 'HNTR 350', image: '/resources/motos/HNTR350/HNTR350.webp' },
        { id: 'classic-350', name: 'Classic 350', image: '/resources/motos/Classic350/Classic350.webp' },
        { id: 'meteor-350', name: 'Meteor 350', image: '/resources/motos/meteor/meteor.webp' },
        { id: 'scram-411', name: 'Scram 411', image: '/resources/motos/Scram411/Scram411.webp' },
        { id: 'himalayan-450', name: 'New Himalayan 450', image: '/resources/motos/NewHimalayan450/NewHimalayan450.webp' },
        { id: 'interceptor', name: 'Interceptor', image: '/resources/motos/Interceptor/Interceptor.webp' },
        { id: 'continental-gt', name: 'Continental GT', image: '/resources/motos/ContinentalGT/ContinentalGT.webp' },
        { id: 'shotgun-650', name: 'Shotgun 650', image: '/resources/motos/Shotgun650/Shotgun650.webp' },
        { id: 'super-meteor-650', name: 'Super Meteor 650', image: '/resources/motos/SuperMeteor650/SuperMeteor650.webp' },
    ];

    return (
        <div className="app">
            <Head>
                <title>Motos - Royal Enfield Villavicencio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <WarrantyBadge />  {/* Add this line after Header */}

            <div className={styles.imageContainer}>
                <img
                    src="/resources/banner2.webp"
                    alt="Motos"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <h1 className={styles.title}>Motos</h1>
                </div>
            </div>
            <div className={styles.titleContainer}>
                <h1>Selecciona tu Royal Enfield</h1>
            </div>

            <div className={styles.imageGrid}>
                {motos.map((moto) => (
                    <div key={moto.id} className={styles.imageItem}>
                        <img src={moto.image} alt={moto.name} className={styles.gridImage} />
                        <div className={styles.imageContent}>
                            <span>{moto.name}</span>
                            <Link href={`/motos/${moto.id}`}>
                                <button className={styles.button}>Ver más</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <WhatsAppButton phoneNumber="573118113280" />
            <Footer />
        </div>
    );
};

export default motospage;