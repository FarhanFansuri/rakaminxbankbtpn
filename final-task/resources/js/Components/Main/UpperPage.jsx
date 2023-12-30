
import { motion } from 'framer-motion'
import MiddlePage from '../Middle/MiddlePage';
import MiddleSecond from '../Middle/MiddlePageSecond';
import MiddleThird from '../Middle/MiddleThird';
import MiddleFourth from '../Middle/MiddleFourth';
import './style.css'

import React from 'react';

export default function UpperPage() {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col'>
                        <img src="cloud-computing.jpg" className='mx-auto' id='left-img-first' alt="" />
                    </div>
                    <div className='col text-center'>
                        <h1 className='text-center'>
                            <span className='text-black'>Cloud Hosting untuk</span><br />
                            <span className='text-warning'>Kesuksesan bisnismu</span>
                        </h1>
                        <p className='text-black mt-5'>
                            Qwords menawarkan layanan Cloud Hosting Akses Cepat, Standar Keamanan Tinggi, Uptime Server
                            99,99%, Fitur Lengkap dan Dukungan Pelanggan 24 jam untuk memenuhi kebutuhan website Anda.
                            Tersertifikasi ISO 27001 dengan Data Center Tier 3 dan Network Tier 1
                        </p>
                        <div className='row'>
                            <div className='col'>
                                <img src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/icann-logo.webp" alt="" />
                            </div>
                            <div className='col'>
                                <img src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/logobsi-black.webp" alt="" />
                            </div>
                            <div className='col'>
                                <img src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/logoaccreditedpandi.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col bg-warning mt-5' style={{ height: "300px" }}>
                    <MiddlePage />
                </div>
            </div>

            <h2 className='mt-5 text-center'>
                Cloud Hosting Indonesia<br />
                <span className='text-white'>Diskon Hingga 50%</span>
            </h2>

            <div className='row p-5 my-5'>
                <MiddleSecond />
                <MiddleSecond />
                <MiddleSecond />
                <MiddleSecond />

            </div>

            <div className='row p-5 d-flex align-items-center'>
                <div className='col-4'>
                    <MiddleThird />
                </div>
                <div className='col-4'>
                    <MiddleThird />
                </div>
                <div className='col-4'>
                    <MiddleThird />
                </div>
            </div>

            <div className='row p-5'>
                <div className='col-3'>
                    <MiddleFourth />
                </div>
                <div className='col-3'>
                    <MiddleFourth />
                </div>
                <div className='col-3'>
                    <MiddleFourth />
                </div>
                <div className='col-3'>
                    <MiddleFourth />
                </div>
            </div>

            <div className='row p-5'>
                <div className='col-3'>
                    <MiddleFourth />
                </div>
                <div className='col-3'>
                    <MiddleFourth />
                </div>
                <div className='col-3'>
                    <MiddleFourth />
                </div>
                <div className='col-3'>
                    <MiddleFourth />
                </div>
            </div>
        </>
    );
}
