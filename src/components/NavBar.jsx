import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../../store.jsx";
import { MdDelete } from "react-icons/md";
import { MdOutlineRemove } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import Connexion from "./Connexion.jsx";
import Inscription from "./Inscription.jsx";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup
.object({
    Nom: yup.string().required('ce champ est oubligatoire'),
    email: yup.string().required('ce champ est oubligatoire').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"entrez une address email valide"),
    telephone: yup.string().required('ce champ est oubligatoire').matches(/^\+237\d{9}$/, "entrez un numéro valide"),
    ville: yup.string().min(4,"minimun 4 caractère"),
  
  
})
.required()


function NavBar() {


   const [isCommande, setIsCommande] = useState(false);
   let CARD = useStore((state) => state.CARD);
   let updateCart = useStore((state) => state.updateCart);

   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    })
    const onSubmit = (data) =>console.log(data);
     


   function increQte(id) {
      let getProduit = CARD.find((item) => item.id === id);

      if (getProduit.qte < 10) {
         let newProduitList = CARD.map((item) => {
            return item.id === id ? { ...item, qte: item.qte + 1 } : item;
         });
         updateCart(newProduitList);
      }
   }

   function decreQte(id) {
      let getProduit = CARD.find((item) => item.id === id);

      if (getProduit.qte > 1) {
         let newProduitList = CARD.map((item) => {
            return item.id === id ? { ...item, qte: item.qte - 1 } : item;
         });
         updateCart(newProduitList);
      }
   }
   function removeProduit(id) {
      let newProduitList = CARD.filter((item) => item.id !== id);
      updateCart(newProduitList);
   }

   function commader(){
      updateCart([]);
   }
   return (
      <>
         {/* madal panier  */}

         <div
            className="modal fade modal-xl"
            id="panier"
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
                        Panier
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
                  <div className="modal-body row text-white">
                     <div className="row">
                        {CARD.length === 0 ? (
                           <p className="display-6 col-12">
                              Aucun produit dans le Pannier
                           </p>
                        ) : (
                           <>

                           <div className="table-responsive">
                              
                           <table className="table mt-4">
                                 <thead>
                                    <tr>
                                       <th scope="col">Nom</th>
                                       <th scope="col">Prix</th>
                                       <th scope="col">Category</th>
                                       <th scope="col">Image</th>
                                       <th scope="col">Action</th>
                                    </tr>
                                 </thead>

                                 <tbody>
                                    {CARD.map((item, index) => {
                                       return (
                                          <tr
                                             key={index}
                                            className="lineDeProduit"
                                          >
                                             <th scope="row">{item.title}</th>
                                             <td className="price">{item.price} FCFA</td>
                                             <td style={{textTransform:"lowercase"}}>{item.category}</td>
                                             <td>
                                                {" "}
                                                <img
                                                   src={`/${item.img}`}
                                                   alt="image"
                                                   width={60}
                                                   height={55}
                                                />{" "}
                                             </td>
                                             <td className=" d-flex">
                                                <button
                                                   className="btn btn-success me-1"
                                                   onClick={() =>
                                                      increQte(item.id)
                                                   }
                                                >
                                                   {" "}
                                                   <AiOutlinePlus />
                                                </button>
                                                <p className="text-center mt-3 ">
                                                   {item.qte}
                                                </p>
                                                <button
                                                   className="btn btn-primary ms-1"
                                                   onClick={() =>
                                                      decreQte(item.id)
                                                   }
                                                >
                                                   {" "}
                                                   <MdOutlineRemove />
                                                </button>
                                                <button
                                                   className="btn btn-danger ms-5 me-1"
                                                   onClick={() =>
                                                      removeProduit(item.id)
                                                   }
                                                >
                                                   <MdDelete />
                                                </button>
                                             </td>
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                              </table>
                              <p className=" prixTotal">
                                    total: {" "}
                                    {CARD.reduce((somme, item) => {
                                       return (
                                          somme +
                                          item.qte *
                                             item.price.replaceAll(" ", "")
                                       );
                                    }, 0)}
                                    {" FCFA"}
                                 </p>
                           </div>
                           <button
                                    className="btn btn-warning col-sm-8 col-lg-2 ms-auto"
                                    onClick={()=> setIsCommande(true)}
                                 >
                                    Commandé
                                 </button>
                              <div
                                 className={`row ms-2 col-sm-12 col-lg-12 bg-white mt-5 pt-2 pb-2 ${
                                    !isCommande && "d-none"
                                 }`}
                              >

                                 <p className="text-black fs-5 ">
                                    total:  {" "}
                                    {CARD.reduce((somme, item) => {
                                       return (
                                          somme +
                                          item.qte *
                                             item.price.replaceAll(" ", "")
                                       );
                                    }, 0)}
                                    {" FCFA"}
                                 </p>
                                 <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="entrez votre nom"
                                       {...register("Nom")}
                                    />
                                     <p className="text-danger">{errors.Nom?.message}</p>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="entrez votre email"
                                       {...register("email")}
                                    />
                                     <p className="text-danger">{errors.email?.message}</p>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="entrez votre numero de telephone"
                                       {...register("telephone")}
                                    />
                                     <p className="text-danger">{errors.telephone?.message}</p>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="entrez votre ville"
                                       {...register("ville")}
                                    />
                                    <p className="text-danger">{errors.ville?.message}</p>
                                    <button
                                       className="btn btn-success"
                                       type="submit"
                                      
                                    >
                                       Envoyer
                                    </button>
                                 </form>
                              </div>
                           </>
                        )}
                     </div>
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
         {/* pour la connexion */}
         <Connexion />
         {/* <!-- modal pour la creation de compte --> */}
         <Inscription />

         <header className="mb-0">
            <nav className="navbar navbar-expand-lg container-fluid">
               <div className="container-fluid w-100">
                  <NavLink className="navbar-brand" to="/">
                     <img
                        src="images/home/navBar/logo.png"
                        style={{ width: "70px" }}
                        alt="image"
                     />
                  </NavLink>

                  <button
                     className="navbar-toggler"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="navbar-toggler">
                        <i
                           className="fa-solid fa-bars"
                           style={{ color: "yellow", transform: "scale(2)" }}
                        ></i>
                     </span>
                  </button>
                  <div
                     className="collapse navbar-collapse"
                     id="navbarSupportedContent"
                  >
                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <NavLink className="nav-link " to="/">
                              Acceuil
                           </NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/Oeuvres">
                              Oeuvres
                           </NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link " to="/Contact">
                              Contact
                           </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                           <Link
                              className=" nav-link dropdown-toggle"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                           >
                              Espace Artiste
                           </Link>
                           <ul
                              className="dropdown-menu"
                              style={{
                                 backgroundImage:
                                    "url(images/home/navBar/bgNavBar.jpg)",
                              }}
                           >
                              {/* <!-- Button trigger modal --> */}
                              <li>
                                 <button
                                    type="button"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#connexion"
                                 >
                                    Se Connecter
                                 </button>
                              </li>
                              <li>
                                 <button
                                    type="button"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#creationDeCompte"
                                 >
                                    Cree un Compte
                                 </button>
                              </li>
                           </ul>
                        </li>
                     </ul>

                     <input
                        className="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="recherche par:nom de l`artiste, titre,style artistitique ..."
                     />
                     <datalist id="datalistOptions">
                        <option value="MASQUE AFRICAIN BOUCLIER" />
                        <option value="MASQUE AFRICAIN BAOULE" />
                        <option value="MASQUE AFRICAIN DAN" />
                        <option value="Cheval En Bronze" />
                        <option value="Sculpture Cheval En Bronze" />
                        <option value="Éléphant En Bronze" />
                        <option value="Éléphant D’Afrique" />
                        <option value="Sculture Autruche En Bronze" />
                        <option value="Tabouret Ashanti" />
                        <option value="Tabouret Baga" />
                        <option value="Petit Tabouret Baga" />
                        <option value="Chaise De Chef De Famille" />
                        <option value="Chaise À Palabre" />
                        <option value="Amour De La Lecture" />
                        <option value="Amour Mère-Enfant" />
                        <option value="Harmonie – Famille" />
                        <option value="Joueur De Balafon" />
                        <option value="La Ménagère" />
                     </datalist>
                     <NavLink
                        href="#"
                        className="iconSeach"
                        style={{ right: "20px", position: "relative" }}
                     >
                        <i
                           className="fa-solid fa-magnifying-glass"
                           style={{
                              transform: "scale(1.5)",
                              bottom: "-7px",
                              color: "black",
                              position: "absolute",
                              right: "0px",
                           }}
                        ></i>
                     </NavLink>
                  </div>
               </div>
               <p className="panier text-white me-5 ms-3 mt-3">
                  <i
                     style={{
                        color: "yellow",
                        transform: "scale(2)",
                        cursor: "pointer",
                     }}
                     className="panier fa-solid fa-cart-shopping"
                     data-bs-toggle="modal"
                     data-bs-target="#panier"
                  ></i>
                  <span className="compteur">{CARD.length}</span>
               </p>
            </nav>
         </header>
      </>
   );
}

export default NavBar;
