import React from "react";
import "./css/Oeuvres.css";
import { data } from "../../data.jsx";
import Card from "../components/Card.jsx";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import { useStore } from "../../store.jsx";
function Oeuvres() {

const updateProduit = useStore((state)=>state.updateProduit)
let CARD = useStore((state)=>state.CARD)

function addCart(Oeuvre){

  let isExist = CARD.findIndex(item=>item.id===Oeuvre.id)
 if(isExist=== -1){
  updateProduit(Oeuvre)
 }




}

   return (
      <main className="container-fluid">
         <div
            style={{
               backgroundImage: "url(images/Oeuvres/banier.jpg)",
               width: "100%",
               height: "200px",
            }}
         ></div>

         <div
            style={{
               borderBottom: "4px solid black",
               borderTop: "4px solid black",
               marginTop: "20px",
            }}
         >
            <p className="display-4 text-center fw-bold">
               DÉCOUVREZ NOS MASQUES <br />
               AFRICAINS DE CÔTE D'IVOIRE
            </p>
         </div>
         <article className="row mt-5">
            {data[0].map((item, index) => {
               return (

                  
                     <div key={index} className="col-md-6 col-lg-3">
                     <Card Oeuvre={item}/>
                    </div>
               );
            })}
         </article>
         <h4 className="text-center fw-bold display-4">Sculpture Animale</h4>
         <article className="row mt-5">
            {
           data[1].map((item,index)=>{
                       return(
                        <div key={index} className="col-md-6 col-lg-3">
                        <Card Oeuvre={item}/>
                       </div>
                       )
           })
            
            }
         </article>
         <h4 className="text-center fw-bold display-4">Tabouret Sculpté</h4>
         <article className="row mt-5">
            {
           data[2].map((item,index)=>{
                       return(
                        <div key={index} className="col-md-6 col-lg-3">
                        <Card Oeuvre={item}/>
                       </div>
                       )
           })
            
            }
         </article>
         <h4 className="text-center fw-bold display-4">Sculpture Humaine</h4>
         <article className="row mt-5">
            {
           data[3].map((item,index)=>{
                       return(
                        <div key={index} className="col-md-6 col-lg-3">
                        <Card Oeuvre={item}/>
                       </div>
                       )
           })
            
            }
         </article>
         <Footer/>
      </main>
   );
}

export default Oeuvres;
