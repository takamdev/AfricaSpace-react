import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className=" footer container-fluid ">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <NavLink to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src="images/home/navBar/logo.png" alt="image" style={{width:" 70px"}}/>
        </NavLink>
        <span className="mb-3 mb-md-0  fw-bold text-white">&copy; ART AFRICAIN - MASQUES D'AFRIQUE <i>2023</i> </span>
      </div>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><NavLink to="/" className="nav-link px-2">Acceuil</NavLink></li>
        <li className="nav-item"><NavLink to="/Oeuvres" className="nav-link px-2">Oeuvres</NavLink></li>
        <li className="nav-item">
          <button type="button" data-bs-toggle="modal"  data-bs-target="#creationDeCompte" >
            Cree un Compte
            </button>
        </li>
        <li className="nav-item"><NavLink to="/Contact" className="nav-link px-2">Contact</NavLink></li>
      </ul>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-twitter" style={{color: "white"}}></i></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-instagram" style={{color: "white"}}></i></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-facebook" style={{color: "white"}}></i></a></li>
      </ul>
    </footer>
    </div>
  )
}

export default Footer