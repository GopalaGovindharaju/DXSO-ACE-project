import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import Browse from './browse';
import './CustomStyles0.css';
import axios from 'axios';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

function Order() {
    const [formData, setFormData] = useState({
        
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        let value = e.target.value;
        if (e.target.name === 'deadline') {
          value = moment(value).format('YYYY-MM-DD');
        }
      
        setFormData({
          ...formData,
          [e.target.name]: value
        });
      };
    function handleLoadButtonClick() {
        if (!formData.order_number || !formData.customer_name || !formData.planner_name || !formData.deadline || !formData.batch_control || !formData.product_number || !formData.product_name || !formData.machines_available) {
            alert('Please fill in all required fields.');
            return;
          }
          else{
            axios.post('http://127.0.0.1:8000/api/submitForm/', formData)
        .then(response => {
            console.log(response.data);
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
        navigate('planner')
          }
        
      };
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
      const today = new Date();
      const formatedDate = today.toISOString().substr(0, 10);
      setCurrentDate(formatedDate);
    }, []);

  return (
    <>
    <div className="card  custom-card">
    <div>
      <Banner />
    </div>
    <div className="card-body custom-cardbdy">
    
    <form className="needs-validation" noValidate>

        <div className="row">
            
            <div className="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Date</label>
                    <div className="col-sm-6">
                    <input type="date" className="form-control custom-textfield0" id="inputDate" placeholder="Date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required />
                </div>
            </div>
            </div>

            <div className="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Order Number</label>
                    <div className="col-sm-6">
                        <input type='number' className="form-control custom-textfield0" name='order_number' onChange={handleChange}  placeholder='AC20UCS000' required />
                </div>
            </div>
            </div>

            <div className="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Customer Name</label>
                    <div className="col-sm-6">
                        <input  type='text'  className="form-control custom-textfield0" placeholder='eg:Harish' name='customer_name' onChange={handleChange} required />
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Planner Name</label>
                    <div className="col-sm-6">
                        <input  type='text'  className="form-control custom-textfield0" placeholder='eg:Gopi' name='planner_name' onChange={handleChange} required />
                    </div>
                </div>
            </div>
          
        </div><br></br>



        <div className="row">

            <div className="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Deadline</label>
                    <div className="col-sm-6">
                        <input  type='date' className="form-control custom-textfield0" placeholder='' name='deadline' onChange={handleChange} required />
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Batch Control</label>
                    <div className="col-sm-6">
                        <input type='number' className="form-control custom-textfield0" placeholder='1' name='batch_control' onChange={handleChange} required />
                </div>
            </div>
            </div>

            <div className="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Product Number</label>
                    <div className="col-sm-6">
                        <input type='number' className="form-control custom-textfield0" name='product_number' placeholder='801033005' onChange={handleChange} required />
                </div>
            </div>
            </div>
    
            <div className="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Product Name</label>
                    <div className="col-sm-6">
                        <input type='text' className="form-control custom-textfield0" name='product_name' placeholder='93E 120 KVA' onChange={handleChange} required />
                </div>
            </div>
            </div>
          
        </div><br></br>

        <div className="row">

        <div className="col-md-3">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Machines Available</label>
                    <div className="col-sm-6">
                        <input type='number' className="form-control custom-textfield0" placeholder='15' name='machines_available' onChange={handleChange} required />
                </div>
            </div>
        </div>

        </div>

        
    </form>
    </div>
    

    <Browse handleLoadButtonClick={handleLoadButtonClick}/>

    </div>

    </>
  )
}

export default Order;
