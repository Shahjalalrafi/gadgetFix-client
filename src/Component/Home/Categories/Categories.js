import React from 'react';
import camera from '../../../Images/camera.png'
import computer from '../../../Images/computer.png'
import smartPhone from '../../../Images/smartphone.png'
import wifi from '../../../Images/wifi-router.png'
import headPhone from '../../../Images/headphones.png'
import television from '../../../Images/television.png'
import drone from '../../../Images/drone.png'
import './Category.css'

const Categories = () => {
    const allCategories = [ camera, computer, smartPhone, wifi, headPhone, television, drone]
    const heading = {
        color: '#04062C',
        fontWeight: 'bold'
    }

    return (
        <div className="container text-start mb-5">
            <div className='row'>
                <h2 className='text-start' style={heading}>PRODUCT CATEGORIES</h2>
                <p className='text-start'>Sed ut perspiciatis unde omnis iste natus
er sit voluptatem accusantium dolore.</p>

                {
                    allCategories.map(category => <div className="col-md-2 py-2 category">
                    <img className='img-fluid border p-3 shadow rounded' style={{ height: '100px', width: '100px' }} src={category} alt="" />
                </div>)
                }
            </div>
        </div>
    );
};

export default Categories;