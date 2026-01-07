import React from 'react';

function Contact() {
  return (
    <div className='container'>
        <div className='shadow-lg rounded-4 text-center p-5  border border-dark mx-auto' style={{ maxWidth:"700px",minHeight:"400px",marginTop:"80px"}}>
            <h1 className='text-primary fw-bold mb-3'>Contact Me</h1>

            <h3>For any queries, feel free to reach out at</h3>
            <div className='my-4' style={{fontSize:"20px"}}>
            <div><strong>Email: </strong> agrawwalmad00@gmail.com</div> 
            <div><strong>Phone: </strong> +91 7618830195</div>
            <div><strong>Address: </strong> Bengaluru, Karnataka, IND</div>
            </div>

            <div className='mt-5'>
            <a href="mailto:agrawalmad00@gmail.com"><button className='mx-3 btn btn-primary '>Email</button></a>
            <a href="https://wa.me/917618830195" target='_blank'><button className='mx-2 btn btn-primary '>Whatsapp</button></a>
            </div>
        </div>
    </div>
  );
}

export default Contact;
