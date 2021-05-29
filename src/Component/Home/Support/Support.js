import React from 'react';
import freeShipping from '../../../Images/trusted1.png'
import guranty from '../../../Images/trusted2.png'
import payment from '../../../Images/trusted3.png'
import customer from '../../../Images/trusted4.png'

const Support = () => {
    const allSupports = [
        {
            img: freeShipping,
            name: 'FREE SHIPPING',
            details: 'Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!'
        },
        {
            img: guranty,
            name: '30DAYS MONEY BACK GURANTY',
            details: '100% satisfaction guaranteed, or get your money back within 30 days!'
        },
        {
            img: payment,
            name: 'SAFE PAYMENT',
            details: 'Pay with the world’s most popular and secure payment methods.'
        },
        {
            img: customer,
            name: 'LOYALTY CUSTOMER',
            details: 'Card for the other 30% of their purchases at a rate of 1% cash back.'
        }
    ]
    const heading = {
        color: '#04062C',
        fontWeight: 'bold'
    }
    return (
        <div className="container pb-3">
            <div className="row">
                <h2 style={heading}>SUPPORT WE PROVIDED</h2>
                {
                    allSupports.map(support => <div className="col-md-3 py-5">
                    <img className='pb-3' src={support.img} alt="" />
                    <h6>{support.name}</h6>
                    <small>{support.details}</small>
                </div>)
                }
            </div>
        </div>
    );
};

export default Support;