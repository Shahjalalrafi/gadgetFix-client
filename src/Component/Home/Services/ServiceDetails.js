import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const serviceId = useParams()
    console.log(serviceId.id)
    return (
        <div>
            hello
        </div>
    );
};

export default ServiceDetails;