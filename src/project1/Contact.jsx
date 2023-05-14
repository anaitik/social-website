import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { MdPushPin } from "react-icons/md";
import Contactdata from './Contactdata'
import "./css/contact.css";

const contact = () => {
  return (

    <div className='d-flex justify-content-center flex-column align-items-center container-fluid mt-4'>
      <div className="contact_h1"><h1 className=''>Our Precious Committee Members</h1></div>
      <div className='mt-5 c_table_div'>
        <table className="table table-striped" id="customers">
          <tr>
            <th className='th_15'>Position</th>
            <th className='th_15'>Name</th>
            <th className='th_15'>Father's Name</th>
            <th>Address</th>
            <th className='th_15'>Mobile</th>
          </tr>
          {
            Contactdata.map((val, ind) => {
              return (
                <tr>
                  <td>{val.position}</td>
                  <td>{val.name}</td>
                  <td>{val.father_name}</td>
                  <td>{val.address}</td>
                  <td>{val.mobile}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
      <p className="contact_p"><AiOutlineHome />Shri Agarwal Samaj Kendriya Samiti, Indore</p>
      <p className="contact_P text-center"><MdPushPin/>Agrawal Samaj Dharmshala, MS Road, Sabalgarh, Indore (M.P.)</p>
      <p className="contact_p text-center"><IoMailOutline/>guptahim1999@gmail.com</p>
      <br/>
    </div>
  )
}

export default contact