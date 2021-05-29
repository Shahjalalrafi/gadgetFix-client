import React from 'react';
import look from '../../../Images/gadget3.jpg'
import styles from './HeroSection.module.css'

const HeroSecetion = () => {
    return (
        <div className="container">
            <div className="row py-5">
            <div className="col-md-6 col-sm-12 py-5 my-3 text-start">
                <h2 className={styles.heading}>Our company that <br />Takes you Higher</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quos odio placeat quis est perferendis aspernatur optio, asperiores quam in quae iste numquam mollitia nemo reiciendis ipsa dignissimos temporibus consequuntur.</p>
                <button className={styles.button}>VIEW COLLECTION</button>
            </div>
            <div className="col-md-6 col-sm-12">
                <img className="img-fluid p-5 rounded" src={look} alt="" />
            </div>
        </div>
        </div>
    );
};

export default HeroSecetion;