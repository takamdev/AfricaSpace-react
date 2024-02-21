import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup
.object({
  email: yup.string().required('ce champ est oubligatoire').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"entrez une address email valide"),
  password: yup.string().required('ce champ est oubligatoire').min(4,"minimun 4 carractères"),
  confimPassword: yup.string().required('ce champ est oubligatoire'),
  Name: yup.string().required('ce champ est oubligatoire'),
  UserName: yup.string().required('ce champ est oubligatoire'),
  
  
  
})
.required()

function Inscription() {

    const {
         
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
      const onSubmit = (data) =>console.log(data);

  return (
    <div
    className="modal fade  modal-xl"
    id="creationDeCompte"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
 >
    <div className="modal-dialog">
       <div className="modal-content">
          <div className="modal-header">
             <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Cree un Compte
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
                <h1>Cree Un Compte</h1>
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
                   entrez vos information personnelle pour cree le
                   Compte
                </p>
                <input
                   type="text"
                   id="name"
                   placeholder="entrez votre nom"
                   style={{ marginTop: "20px" }}
                   {...register("Name")}
                />
               <p className="text-danger fw-bold">{errors.Name?.message}</p>
                <input
                   type="text"
                   id="UserName"
                   placeholder="Choisir un nom d`utilisateur"
                   {...register("UserName")}
                />
                   <p className="text-danger fw-bold">{errors.UserName?.message}</p>
                <input
                   type="email"
                   id="email"
                   placeholder="toto@example.com"
                   {...register("email")}
                />
            <p className="text-danger fw-bold">{errors.email?.message}</p>
                <input
                   type="password"
                   id="password"
                   placeholder="creez un mot de passe"
                   {...register("password")}
                />
               <p className="text-danger fw-bold">{errors.password?.message}</p>
                <input
                   type="password"
                   id="password"
                   placeholder="repeter le mot de passe"
                   {...register("confimPassword")}
                />
               <p className="text-danger fw-bold">{errors.confimPassword?.message}</p>
                <label className="d-flex gap-3">
                   <button
                      className="redirigerConnexion"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#connexion"
                   >
                      vous avez deja un compte?
                   </button>
                </label>

                <button className="soumet" type="submit">
                   Inscription
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

export default Inscription