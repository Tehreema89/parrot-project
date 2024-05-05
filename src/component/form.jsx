import React from 'react'
import { IoMdContact } from "react-icons/io";

const form = () => {
  return (
    <>
<div className='addclient'>
     <p className='p1'>Add Client</p>
      <button className='btn1'>Back</button>
    </div>
    <IoMdContact />
    webpack,babbel
   <div className='companymail'>
    <div></div>
    <div className='companyname'>
      <label className='label1' htmlFor="">Company Name<span>*</span></label>
      <br />
      <input className='input1' type="text"  placeholder='      Company Name'/>
    </div>
    <div className='mail'>
      <label className='label1' htmlFor="">Email<span>*</span></label>
      <br />
      <input className='input1' type="text"  placeholder='     Email'/>
    </div>
   </div>
   <div className='mainphn'>
    <div>
      <label className='label2' htmlFor="">Phone Number <span>*</span></label>
      <br />
      <input className='input2' type="number" placeholder='   +380' />
    </div>
    <div>
      <label className='label2' htmlFor="">Registration No <span>*</span></label>
      <br />
      <input className='input2' type="num" placeholder='    Registration No' />
    </div>
    <div>
      <label className='label2' htmlFor="">Address <span>*</span></label>
      <br />
      <input className='input2' type="number" placeholder='    Address' />
    </div>
   </div>
   <div className='citydiv'>
    <div>
      <label className='label3' htmlFor="">City <span>*</span></label>
      <br />
      <input className='input3' type="city"  placeholder='   City'/>
    </div>
    <div>
      <label className='label3' htmlFor="">State <span>*</span></label>
      <br />
      <input className='input3' type="state"  placeholder='   State'/>
    </div>
    <div>
      <label className='label3' htmlFor="">Country <span>*</span></label>
      <br />
      <input  className='input3' type="country"  placeholder='   Country'/>
      
    </div>
    <div>
      <label className='label3' htmlFor="">Zip Code <span>*</span></label>
      <br />
      <input className='input3' type="zipcode"  placeholder='   Zip Code'/>
    </div>
   </div>
   <div className='note'>
    <label className='label3' htmlFor="">Note <span>*</span></label>
    <br />
    <input className='input5' type="text" placeholder=' Write a Note...' />
   </div>
<div className='btn11'>
  <div>
    <button className='b222'>Clear</button>
  </div>
  <div>
    <button className='b333'>Submit</button>
  </div>
</div>

    </>
  )
}

export default form
