import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookedList = () => {
    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetch('https://desolate-citadel-65976.herokuapp.com/serviceRequest')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 pt-5 mt-5">
                <h2>Our service</h2>
                <div className="row">
                    <div className="col-md-12"  >
                        <table className='col-md-12'>
                            <tr>
                                <th className='py-2'>name</th>
                                <th className='py-2'>email</th>
                                <th className='py-2'>price</th>
                                <th className='py-2'>number</th>
                            </tr>
                            {
                                booking.map(book => <tr className="table-data">
                                    <td>{book.name}</td>
                                    <td>{book.email}</td>
                                    <td>{book.price}</td>
                                    <td>{book.number}</td>
                                </tr>)
                            }
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookedList;