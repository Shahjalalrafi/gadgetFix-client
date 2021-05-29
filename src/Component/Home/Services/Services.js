import React from 'react';
import img1 from '../../../Images/camera.png'
import img2 from '../../../Images/computer.png'
import img3 from '../../../Images/smartphone.png'
import img4 from '../../../Images/trusted1.png'
import img5 from '../../../Images/kilian-seiler-PZLgTUAhxMM-unsplash (1).jpg'
import img6 from '../../../Images/gadget1.jpg'
import styles from './Services.module.css'
import { Link } from 'react-router-dom';

const Services = () => {
    const AllService = [
        {
            id: 1,
            img: img1,
            name: 'retail your gadget',
            price: 94,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde ex repellendus odio, alias pariatur corrupti dolorum sint sit ut iusto illo, commodi molestiae id perferendis. Hic tempora totam vitae.'
        },
        {
            id: 2,
            img: img2,
            name: 'Make your gadget',
            price: 44,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde ex repellendus odio, alias pariatur corrupti dolorum sint sit ut iusto illo, commodi molestiae id perferendis. Hic tempora totam vitae.'
        },
        {
            id: 3,
            img: img3,
            name: 'distribute gadget',
            price: 99,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde ex repellendus odio, alias pariatur corrupti dolorum sint sit ut iusto illo, commodi molestiae id perferendis. Hic tempora totam vitae.'
        },
        {
            id: 4,
            img: img4,
            name: 'Make your gadget',
            price: 794,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde ex repellendus odio, alias pariatur corrupti dolorum sint sit ut iusto illo, commodi molestiae id perferendis. Hic tempora totam vitae.'
        },
        {
            id: 5,
            img: img5,
            name: 'destroy your gadget',
            price: 344,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde ex repellendus odio, alias pariatur corrupti dolorum sint sit ut iusto illo, commodi molestiae id perferendis. Hic tempora totam vitae.'
        },
        {
            id: 6,
            img: img6,
            name: 'retail your gadget',
            price: 24,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde ex repellendus odio, alias pariatur corrupti dolorum sint sit ut iusto illo, commodi molestiae id perferendis. Hic tempora totam vitae.'
        }
    ]
    return (
        <div className="container text-center">
            <div className="row">
                <h2>SERVICE WE PROVIDED</h2>
                <h6 style={{color: '#d1d1d1'}}>DISCOVER YOUR OLD GADGET INTO NEW</h6>
                
                {
                    AllService.map(service =><div className="col-md-4">
                    <div className="card m-3 p-4 text-start">
                        <div className="card-img">
                            <img className="img-fluid" style={{width: '100%', height: '200px'}} src={service.img} alt="" />
                        </div>
                        <div className="card-title">
                            <h4 className='mt-2'>{service.name}</h4>
                            <Link to={`/service/${service.id}`}><button className={styles.button}>VIEW DETAILS</button></Link>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Services;