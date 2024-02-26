import React from 'react'
import Footer from '../components/Footer.jsx'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
.object({
    Nom: yup.string().required('ce champ est oubligatoire'),
    email: yup.string().required('ce champ est oubligatoire') .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"entrez une address email valide"),
    Subject: yup.string().required('ce champ est oubligatoire'),
    Message: yup.string(),
  
  
})
.required()


function Contact() {



    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
      const onSubmit = (data) =>console.log(data);
       
  


  return (
     
<main className='mainContact container-fluid'>
<div className="contact-site">
    
    <div className="contact-body bg-light" >
        <h2 className="display-4 text-center fw-bold">contactez nous via...</h2>

        
            <table className="table table-hover" >

                <tbody>
                <tr>
                    <th scope="row">Address</th>
                    <td>Doula,cameroun</td>

                </tr>
                <tr>
                    <th scope="row">Phone</th>
                    <td>+237621588078</td>

                </tr>
                <tr>
                    <th scope="row">Email</th>
                    <td colSpan="2">info@Africanspace.com</td>
                </tr>
                <tr>
                    <th scope="row">Telegram</th>
                    <td colSpan="2">Telegrm Chat</td>
                </tr>
                </tbody>
            </table>
       
    </div>

    <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center display-3 fw-light text-white">OU</p>
        <div className="mb-3 form-setting d-flex flex-column gap-3 position-relative">

          <input className='form-control' type="text" {...register("Nom")} placeholder="name"/>
          <p className="text-danger">{errors.Nom?.message}</p>
          <input className='form-control' type="text" placeholder="email" {...register("email")}  />
          <p className="text-danger">{errors.email?.message}</p>
          <input className='form-control' type="text" placeholder="Subject" {...register("Subject")}  />
          <p className="text-danger">{errors.Subject?.message}</p>
          <textarea className='form-control' id="message" placeholder="facultatif" cols="30" row="3"  {...register("Message")}  />
          <p className="text-danger">{errors.Message?.message}</p>
        </div>
        <button type="submit" className="btn bg-warning text-black"> Envoyer</button>
    </form>
    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.4988816946952!2d9.768624483598508!3d4.0838194342492224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d1e2deb8a71%3A0xa0c981d370e1d73f!2sMa%20Dou%20R%C3%A9sidence!5e0!3m2!1sfr!2scm!4v1701536901028!5m2!1sfr!2scm" width="100%" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

</div>
<Footer/>
</main>

  )
}

export default Contact