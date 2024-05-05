import React from 'react'
import image1 from '../image/parrotlogo1.png'
import image2 from '../image/laptop.png'
import image3 from '../image/security.png'
import image4 from '../image/privacy.png'
import image5 from '../image/software.png'
import image6 from '../image/books.png'
import image7 from '../image/message.png'
import image8 from '../image/three light.png'


const Parrot = () => {
  return (
    <div className='main'>
   <nav>
    <img className='img1' src={image1} alt="" />
    <ul>
        <li>Download</li>
        <li>Coummunity</li>
        <li>Blog</li>
        <li>Doccumentation</li>
        <li>Get Involved</li>
        <li>Team</li>
        <li>Donation & Gadgets</li>
        <li>Partners</li>
    </ul>

   </nav>
   <h1 className='h1'>Parrot <span>OS</span></h1>
   <div className='div123'>
   <div className='div1'></div>
   <div className='div2'></div>
   <div className='div3'></div>
   </div>
   <div className='maindiv2'>
    <div> 
      <img className='img2' src={image2} alt="" />
    </div>
    <div className='hp'>
      <h1 className='h2'>We are the Parrot Project</h1>
      <p className='p1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum labore perferendis quis tenetur in! Rem eius corrupti ex magni reprehenderit at unde fuga. Odit voluptatibus corporis pariatur nobis sunt perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, fuga?</p>
      <p className='p1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, enim. Maiores, aut quaerat. Magni illo ipsam ut officiis, laboriosam veniam tempore quos temporibus, laborum porro, voluptate reiciendis eum! Consequatur, similique sapiente! Exercitationem molestias recusandae autem harum odit suscipit temporibus cumque debitis, obcaecati et accusamus voluptatem Lorem ipsum dolor sit amet.</p>
      <div className='hp1'>
        <div>
          <h1 className='h3'>Secure</h1>
          <div className='same'></div>
          <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit veritatis voluptates tempore modi eligendi, ratione incidunt expedita quisquam error necessitatibus, sequi commodi magnam blanditiis .</p>
          <h1 className='h3'>Lightweight</h1>
          <div className='same'></div>
          <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit veritatis voluptates tempore modi eligendi, ratione incidunt expedita quisquam error necessitatibus, sequi commodi magnam blanditiis .</p>
        </div>
        <div className='freedom'><h1 className='h3'>Free (as in freedom)</h1>
        <div className='same'></div>
        <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit veritatis voluptates tempore modi eligendi, ratione incidunt expedita quisquam error necessitatibus, sequi commodi magnam blanditiis .</p>
        <h1 className='h3'>Portable and universe</h1>
          <div className='same'></div>
          <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit veritatis voluptates tempore modi eligendi, ratione incidunt expedita quisquam error necessitatibus, sequi commodi magnam blanditiis . Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, libero!</p>
          <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit veritatis voluptates tempore modi eligendi, ratione incidunt expedita quisquam error necessitatibus, sequi commodi magnam blanditiis .</p>
        
        </div>
      </div>
    </div>

   </div>
   <div className='maindivimg'>
    <div className='sps'>
      <img className='img34' src={image3} alt="" />
      <h1 className='h6'>Security</h1>
      <p className='p12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora libero provident exercitationem deleniti corporis itaque voluptas nam. Quasi voluptatem dolorem animi, commodi sed eius nihil expedita in quae dolore!</p>
      
    </div>
   <div className='sps'>
   <img className='img34' src={image4} alt="" />
   <h1 className='h6'>Privacy</h1>
   <p className='p12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora libero provident exercitationem deleniti corporis itaque voluptas nam. Quasi voluptatem dolorem animi, commodi sed eius nihil expedita in quae dolore!</p>
   </div>
   <div className='sps'>
   <img className='img34' src={image5} alt="" />
   <h1 className='h6h'>Software Development</h1>
   <p className='p12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora libero provident exercitationem deleniti corporis itaque voluptas nam. Quasi voluptatem dolorem animi, commodi sed eius nihil expedita in quae dolore!</p>
   </div>
   </div>
   <div className='maindivimg2'>
    <div className='sps'>
      <img className='img34' src={image6} alt="" />
      <h1 className='h6'>Learning</h1>
      <p className='p12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora libero provident exercitationem deleniti corporis itaque voluptas nam. Quasi voluptatem dolorem animi, commodi sed eius nihil expedita in quae dolore!</p>
    </div>
   <div className='sps'>
   <img className='img34' src={image7} alt="" />
   <h1 className='h6'>Coummnity</h1>
   <p className='p12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora libero provident exercitationem deleniti corporis itaque voluptas nam. Quasi voluptatem dolorem animi, commodi sed eius nihil expedita in quae dolore!</p>
   </div>
   <div className='sps'>
   <img className='img34' src={image8} alt="" />
   <h1 className='h6h'>Infrastructure</h1>
   <p className='p12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora libero provident exercitationem deleniti corporis itaque voluptas nam. Quasi voluptatem dolorem animi, commodi sed eius nihil expedita in quae dolore!</p>
   </div>
   </div>
    <div className='lastdiv'>
      <div className='lastdiv2'>
        
      <div className='ld' >
      <h1 className='h7'>Official Forum</h1>
   <p className='p12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora libero provident </p>
   <button>Jump Abroad</button>
      </div>
      <div className='ld'><h1 className='h7'>Parrot + HTB</h1>
      <p className='p12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora libero provident </p>
      <button>Read More</button></div>
      <div className='ld'><h1 className='h7'>Community Links</h1>
      <p className='p12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora libero provident </p>
      <button>official links</button></div>
    </div>
    </div>
    
    </div>
  )
}

export default Parrot