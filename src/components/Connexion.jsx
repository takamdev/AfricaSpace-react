import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup
.object({
  email: yup.string().required('ce champ est oubligatoire').min(2,'minimun 2 carractères requis'),
  password: yup.string().required('ce champ est oubligatoire'),
  
  
  
})
.required()


export default function Connexion() {
    
    const {
         
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
      const onSubmit = (data) =>console.log(data);

  
    return(
        // {/* <!-- Modal pour la connexion --> */}
         <div
         className="modal fade modal-xl"
         id="connexion"
         data-bs-backdrop="static"
         data-bs-keyboard="false"
         tabIndex="-1"
         aria-labelledby="staticBackdropLabel"
         aria-hidden="true"
      >
         <div className="modal-dialog ">
            <div className="modal-content">
               <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                     Se Connecter
                  </h1>
                  <button
                     type="button"
                     className="btn btn-warning"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                  >
                     <i className="fa-solid fa-xmark"></i>
                  </button>
               </div>
               <div className="Modal modal-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <h1>Connecter-vous</h1>
                     <div>
                        <a href="#">
                           <i className="fa-brands fa-google"></i>
                        </a>
                        <a href="#">
                           <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                           <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="#">
                           <i className="fa-brands fa-instagram"></i>
                        </a>
                     </div>
                     <p>
                        entrez vos information personnelle pour vous
                        connecter
                     </p>
                     <input
                        type="text"
                        id="name"
                        placeholder="toto@example.com"
                        {...register("email")}
                     />
                     <p className="text-danger fw-bold">{errors.email?.message}</p>
                     <input
                        type="password"
                        id="password"
                        placeholder="entrez le mot de passe"
                        style={{ marginTop: "20px" }}
                        {...register("password")}
                     />
                     <p className="text-danger fw-bold">{errors.password?.message}</p>
                     <label className="d-flex gap-3">
                        <button
                           className="redirigerConnexion"
                           type="button"
                           data-bs-toggle="modal"
                           data-bs-target="#creationDeCompte"
                        >
                           vous n`avez pas de compte?
                        </button>
                     </label>
                     <button className="soumet" type="submit">
                        Connexion
                     </button>
                  </form>
               </div>
               <button
                  type="button"
                  className="btn btn-warning ms-auto me-1 mb-1"
                  data-bs-dismiss="modal"
                  style={{ width: "100px" }}
               >
                  Fermer
               </button>
            </div>
         </div>
      </div>
     )
  
}



 
    
 
 