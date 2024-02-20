import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data.jsx";
import { useStore } from "../../store.jsx";
import "./OuvreItem.css"
function OeuveItem() {
   let { id } = useParams();
   let produit = data[0].find(item=>item.id===id)

   const updateProduit = useStore((state)=>state.updateProduit)
   let CARD = useStore((state)=>state.CARD)
   
   function addCart(Oeuvre){
   
     let isExist = CARD.findIndex(item=>item.id===Oeuvre.id)
    if(isExist=== -1){
     updateProduit(Oeuvre)
    }
   
   
   
   
   }
   
   return (
      <section className="container-fluid ms-auto me-auto">
         <div className="card mb-3 container">
            <div className="row g-0">
               <div className="col-md-4">
                  <img
                     src={`/${produit.img}`}
                     className="img-fluid rounded-start"
                     alt="image"
                     width={400}
                    style={{height:"400px"}}
                  />
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     <h4 className="card-title fw-bold ms-5">
                       {produit.title}
                     </h4>
                     <p className="card-text">
                       {produit.description} <br />
                        <span className="fs-3 mt-5 mb-5">{produit.price} FCFA</span>
                     </p>

                     <div className="validation container">
                        <p>
                           {" "}
                           NOTE:
                           <span className="etoile note">★</span>
                           <span className="etoile note">★</span>
                           <span className="etoile note">★</span>
                           <span className="etoile note">★</span>
                           <span className="etoile note">★</span>
                        </p>
                        <p>
                           <button type="button" onClick={()=>addCart(produit)} className="ajoutPanier ">
                              Ajouter au Panier
                           </button>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="detaille container">
            <h6
               className="fw-bold"
               style={{fontSize: "20px", lineHeight: "40px" ,marginTop: "100px", marginRight: "20px"}}
            >
               Pays : Côte d'Ivoire <br />
               Ethnie : Sénoufo <br />
               Ancienneté : estimé à 30 ans
            </h6>
            <p>
               <span className="fs-5">
                  Hauteur : {produit.Hauteur} <br />
                  Largeur : {produit.Largeur} <br />
                  Profondeur : {produit.Profondeur}<br />
                  Poids : {produit.Poids} <br /> <br />
                  ref : {produit.ref}<br />
                  <br />
               </span>
               <span className="fs-6">
                  TTC, frais de port offerts dans certains pays <br /> <br />
                  Frais de port offerts dans les pays suivants: Albanie,
                  Andorre, Autriche, Bélarus, Belgique, <br />
                  Bosnie-Herzégovine, Bulgarie, Chypre, Serbie-et-Monténégro,
                  Suisse Autres pays <br /> <br />
               </span>

               <span className="mt-5 mb-5">
                  {" "}
                  <i className="fa-solid fa-weight-hanging"></i>{produit.poidTotal}
                  &nbsp;&nbsp;&nbsp; <i className="fa-solid fa-check"></i>
                  disponible &nbsp;&nbsp;&nbsp;{" "}
                  <i className="fa-solid fa-clock"></i>3 à 7 jours de délai de
                  livraison{" "}
               </span>
            </p>
         </div>
         <div className="mb-3 container">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
               Commentaire
            </label>
            <textarea
               className="form-control"
               id="exampleFormControlTextarea1"
               rows="3"
            ></textarea>
            <button type="button" className="btn btn-dark ok">
               Envoyer
            </button>
         </div>
      </section>
   );
}

export default OeuveItem;
