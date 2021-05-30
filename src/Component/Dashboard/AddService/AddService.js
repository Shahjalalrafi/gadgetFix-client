import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        console.log(data)
        const serviceData = {
            name: data.name,
            details: data.details,
            price: data.price,
            garanty: data.garanty,
            imageURL: imageURL
        };

        const url = 'https://desolate-citadel-65976.herokuapp.com/addService';
        console.log(serviceData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '567ed280f2234c502b55f6ed8195bb1f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h1>Add your Services.</h1>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control py-2 my2" type='text' placeholder="service name" {...register("name")} /><br />
                    <input className="form-control py-2 my2" type='text' placeholder="service Details" {...register("details")} /><br />
                    <input className="form-control py-2 my2" type='number' placeholder="price" {...register("price")} /><br />
                    <input className="form-control py-2 my2" type='number'  placeholder="garanty" {...register("garanty")} /><br />
                    <input className="form-control py-2 my2" type="file" onChange={handleImageUpload} /> <br />
                    <input type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddService;