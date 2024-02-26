import React, { useId, useReducer, useState } from "react";
import Footer from "../components/Footer.jsx";

function reducer(source, action) {
   if (action.type === "Oeuvre") {
      console.log(action.payload);
      return {
         ...source,
         Oeuvre: `${URL.createObjectURL(
            document.getElementById(`${action.payload}`).files[0]
         )}`,
      };
   } else if (action.type === "porfollio") {
      return {
         ...source,
         porfollio: `${URL.createObjectURL(
            document.getElementById(`${action.payload}`).files[0]
         )}`,
      };
   }

   console.log(action.payload);
}

function EspaceArtiste() {
   const [source, dispath] = useReducer(reducer, { porfollio: "", Oeuvre: "" });
   let id1 = useId();
   let id2 = useId();
   return (
      <main>
         <div className="espaceArtiste container mt-3 row ms-auto me-auto">
            <div className="col-sm-11 col-md-5 me-1 ">
               <h3>DEPOT D'OEUVRE</h3>
               <div className="imgArtiste1">
                  <img
                     src={source.Oeuvre}
                     alt="image"
                     className="w-100 h-100"
                  />
               </div>
               <label htmlFor="imgfile" className="mt-2">
                  televerser l'image de l`oeuvre a poster
               </label>{" "}
               <br />
               <input
                  type="file"
                  id={id1.toString().replaceAll(":", "")}
                  onInput={() =>
                     dispath({
                        type: "Oeuvre",
                        payload: id1.toString().replaceAll(":", ""),
                     })
                  }
               />
               <label htmlFor="description" className="mt-2">
                  televerser un document de decriptin ainsi que le prix
                  <br />{" "}
                  <span className="fw-bold">
                     {" "}
                     NB: DE PREFERENCE UN FICHIER PDF
                  </span>{" "}
               </label>
               <input type="file" />
            </div>

            <div className="div1 col-sm-11 col-md-5 ms-1 mt-sm-5 mt-md-0">
               <h3>DEPOT PORTFOLIO</h3>
               <div className="imgArtiste2">
                  <img
                     src={source.porfollio}
                     alt="image"
                     className="w-100 h-100"
                  />
               </div>
               <label htmlFor="imgfil" className="mt-2">
                  televerser l'image de votre portfolio
               </label>{" "}
               <br />
               <input
                  type="file"
                  id={id2.toString().replaceAll(":", "")}
                  onInput={() =>
                     dispath({
                        type: "porfollio",
                        payload: id2.toString().replaceAll(":", ""),
                     })
                  }
               />
               <label htmlFor="description" className="mt-2">
                  televerser le document de decriptin du portfolio
                  <br />{" "}
                  <span className="fw-bold">
                     {" "}
                     NB: DE PREFERENCE UN FICHIER PDF
                  </span>
               </label>
               <input type="file" />
            </div>
         </div>
         <Footer />
      </main>
   );
}

export default EspaceArtiste;
