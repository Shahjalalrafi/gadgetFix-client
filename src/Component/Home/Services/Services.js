import React, { useEffect, useState } from 'react';
import styles from './Services.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SetService } from '../../../redux/Action/Action';

const Services = () => {
    const allService = useSelector(state => state.allService.service)
    const dispatch = useDispatch()

    const fetchService = async () => {
        fetch('https://desolate-citadel-65976.herokuapp.com/service')
        .then(res => res.json())
        .then(data => {
            dispatch(SetService(data))
        })
    }

    useEffect(() => {
        fetchService()
    }, [])


    // const [allService, setAllService] = useState([])

    // useEffect(() => {
    //     fetch('https://desolate-citadel-65976.herokuapp.com/service')
    //         .then(res => res.json())
    //         .then(data => setAllService(data))
    // }, [])

    return (
        <div className="container text-center">
            <div className="row">
                <h2>SERVICE WE PROVIDED</h2>
                <h6 style={{ color: '#d1d1d1' }}>DISCOVER YOUR OLD GADGET INTO NEW</h6>

                {
                    allService.map(service => service.imageURL ? <div className="col-md-4">
                        <div className="card m-3 p-4 text-start">
                            <div className="card-img">
                                <img className="img-fluid" style={{ width: '100%', height: '200px' }} src={service.imageURL} alt={service.name} />
                            </div>
                            <div className="card-title">
                                <h4 className='mt-2'>{service.name}</h4>
                                <Link to={`/service/${service._id}`}><button className={styles.button}>VIEW DETAILS</button></Link>
                            </div>
                        </div>
                    </div> : '')
                }
            </div>
        </div>
    );
};

export default Services;