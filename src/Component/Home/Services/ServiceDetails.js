import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Navbar from '../Navbar/Navbar';

const ServiceDetails = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContext)
    const serviceId = useParams()

    const [Service, setService] = useState([])

    useEffect(() => {
        fetch('https://desolate-citadel-65976.herokuapp.com/service')
            .then(res => res.json())
            .then(result => {
                const myService = result.find(pd => {
                    return pd._id === serviceId.id
                })
                setService(myService)
            })

    }, [])
    
    const {imageURL, name, details, price, garenty} = Service
    return (
        <div>
            <Navbar />
            <div className='container mt-5 pt-2'>
                {
                    Service.length !== 0 ? <div className="row">
                    <div className="col-md-8">
                        <img src={imageURL} alt="" />
                        <h4>{name}</h4>
                        <p>SERVICE DETAILS: {details}</p>
                        <p>SERVICE WITH GARENTY: {garenty}</p>
                        <h2>price: {price}</h2>
                    </div>
                    <div className="col-md-4">
                        <form className='form' action="">
                            <input type="text" defaultValue={logedInUser.email} placeholder='email' className="form-control mt-5 m-2" />
                            <input type="text" defaultValue={logedInUser.name} placeholder='name' className="form-control m-2" />
                            <input type="text" placeholder='number' className="form-control m-2" />
                            <input type="number" defaultValue={price} placeholder='price' className="form-control m-2" />

                            <input className='form-control m-2' style={{background: 'black', color: 'white'}} type="submit" />
                        </form>
                    </div>
                </div> : <h2>LOADING</h2>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;