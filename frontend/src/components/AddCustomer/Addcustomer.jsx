import React from 'react';
import './Addcustomer.css';
import axios from 'axios';

function Addcustomer() {
    function submit() {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const uId = document.getElementById('uId').value;
        const country = document.getElementById('country').value;
        const city = document.getElementById('city').value;
        const street = document.getElementById('street').value;
        const phone = document.getElementById('phone').value
        if (fname !== '' && lname !== '' && country !== '' && city !== '' && street !== '' && phone !== '') {
            axios.post('http://localhost:3001/addcustomer', {
                uId: uId,
                fname: fname,
                lname: lname,
                country: country,
                city: city,
                street: street,
                phone: phone
            })
        }
    }
    return (
        <div className='container addcont'>
            <form>
                <div className="form-group">
                    <h5 className='mt-5 mb-3'>Enter Customer Name :</h5>
                    <input type="text" placeholder='First Name' className='form-control mb-3 ip' id='fname' required />
                    <input type="text" placeholder='Last Name' className='form-control ip' id='lname' />
                </div>
                <div className="form-group mt-5">
                    <h5>Enter Customer Id :</h5>
                    <input type="text" placeholder='Unique Id' className='form-control ip' id='uId' />
                </div>
                <div className="form-group mt-5">
                    <h5>Enter Customer Address :</h5>
                    <label htmlFor="country" className='mt-2'>Country</label>
                    <input type="text" id='country' className='form-control ip' required />
                    <label htmlFor="city" className='mt-3'>City</label>
                    <input type="text" id='city' className='form-control ip' required />
                    <label htmlFor="street" className='mt-3'>Street address</label>
                    <input type="text" id='street' className='form-control ip' required />
                    <label htmlFor="phone" className='mt-3'>Contact info</label>
                    <input type="number" id='phone' className='form-control ip' required />
                    <div className='btndiv'>
                        <button onClick={submit} className='btn btn-success mt-3 sbt'>Submit</button><br />
                        <a href="/" className='btn btn-primary'>View customers</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Addcustomer;