import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Edit.css';

function Edit() {
    const [data, setdata] = useState([]);
    function initial(obj) {
        document.getElementById('fname').value = obj.fname;
        document.getElementById('lname').value = obj.lname;
        document.getElementById('country').value = obj.country;
        document.getElementById('city').value = obj.city;
        document.getElementById('street').value = obj.street;
        document.getElementById('phone').value = obj.phone;
    }
    function submit() {
        var uId = data.uId;
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var country = document.getElementById('country').value;
        var city = document.getElementById('city').value;
        var street = document.getElementById('street').value;
        var phone = document.getElementById('phone').value
        if (fname === '')
            fname = data.fname;
        if (lname === '')
            lname = data.lname;
        if (country === '')
            country = data.counrty;
        if (city === '')
            city = data.city;
        if (street === '')
            street = data.street;
        if (phone === '')
            phone = data.phone;
        axios.post('http://localhost:3001/editcustomer', {
            fname: fname,
            lname: lname,
            uId: uId,
            country: country,
            city: city,
            street: street,
            phone: phone
        })
        window.location.replace('/')
    }
    useEffect(() => {
        var obj = JSON.parse(localStorage.getItem('lclstore'))
        setdata(obj);
        initial(obj);
    }, []);

    return (
        <div className='container addcont'>
            <div className="col-md-12">
                <div className="form-group mt-3">
                    <h5>Customer Id : {data.uId}&nbsp;&nbsp;<i>Customer Id is unique</i></h5>

                </div>
                <div className="form-group">
                    <h5 className='mt-5 mb-3'>Edit Name :</h5>
                    <label htmlFor="fname" className='mt-2'>First Name :</label>
                    <input type="text" placeholder={data.fname} className='form-control ip' id='fname' required />
                    <label htmlFor="lname" className='mt-2'>Last Name :</label>
                    <input type="text" placeholder={data.lname} className='form-control ip' id='lname' />
                </div>
                <div className="form-group mt-4">
                    <h5>Edit Address :</h5>
                    <label htmlFor="country" className='mt-2'>Country</label>
                    <input type="text" id='country' className='form-control ip' placeholder={data.country} required />
                    <label htmlFor="city" className='mt-3'>City</label>
                    <input type="text" id='city' className='form-control ip' placeholder={data.city} required />
                    <label htmlFor="street" className='mt-3'>Street address</label>
                    <input type="text" id='street' className='form-control ip' placeholder={data.street} required />
                    <label htmlFor="phone" className='mt-3'>Contact info</label>
                    <input type="number" id='phone' className='form-control ip' placeholder={data.phone} required />
                    <div className='btndiv'>
                        <button onClick={submit} className='btn btn-success mt-3 sbt'>Submit</button><br />
                        <a href="/" className='btn btn-primary'>View customers</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;