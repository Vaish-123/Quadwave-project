import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'

function Home() {
    const [view, setView] = useState([]);
    const [data, setData] = useState([]);
    function date(d) {
        var temp = d.split('T');
        var a = temp[1].split('.')
        var b = temp[0] + " " + a[0];
        return b;
    }
    function edit(obj) {
        localStorage.setItem('lclstore', JSON.stringify(obj))
    }
    function details(index) {
        data.map((obj, i) => {
            if (index === i) {
                setView(obj)
                return ({})
            }
        })
    }
    function del(fname) {
        axios.post('http://localhost:3001/deletecustomer', { fname: fname })
    }
    useEffect(() => {
        axios.get('http://localhost:3001/viewcustomer').then(result => {
            setData(result.data);
        })
    }, []);

    return (
        <div className='m-3'>
            <div className="row">
                <div className="col-md-8 ldiv">
                    <a href="/addcustomer" className='btn btn-primary addbtn'>Add customer</a>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" className='th1'>Customer Id</th>
                                <th scope="col" className='th2'>Customer Name</th>
                                <th scope="col" className='th3'>Country</th>
                                <th scope="col" className='th4'>Created Date</th>
                                <th scope='col' className='th5'>Edit</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        data.map((obj, index) => {
                            return (
                                <table className="table table-bordered m-0">
                                    <tbody>
                                        <tr>
                                            <th scope="row" className='td1'>{obj.uId}</th>
                                            <td className='td2'>{obj.fname} {obj.lname}</td>
                                            <td className='td3'>{obj.country}</td>
                                            <td className='td4'>{date(obj.createdAt)}</td>
                                            <td className='td5'>
                                                <a href='/edit' onClick={() => { edit(obj) }} className='btn btn-primary ebtn'>Edit</a>
                                                <a href='/' className='btn btn-warning ebtn' onClick={() => { del(obj.fname) }}>Delete</a>
                                                <button onClick={() => { details(index) }} className='btn btn-secondary ebtn'>View</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            )
                        })
                    }
                </div>
                <div className="col-md-4 rdiv">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h3>Customer Name :</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">First Name : {view.fname}</li>
                            <li className="list-group-item">Last Name : {view.lname}</li>
                            <li className='list-group-item'>Customer Id : {view.uId}</li>
                        </ul>
                        <div className="card-header">
                            <h3>Residential Address : </h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Nationality : {view.country}</li>
                            <li className="list-group-item">City : {view.city}</li>
                            <li className="list-group-item">Street : {view.street}</li>
                            <li className="list-group-item">Contact No. : {view.phone}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;