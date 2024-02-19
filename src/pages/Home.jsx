import React from "react";
import Card from "../components/Card.jsx";
import { dataHomme } from "../../dataHome.jsx";
import "./css/Home.css";
import Footer from "./../components/footer/Footer.jsx";

function Home() {

   return (
      <main className="mainHome container-fluid pt-5 pb-3">
         <p className="ms-auto me-auto container">
            <span className="display-6 fw-bold">
               Analyse : L’Afrique, dernière frontière du marché de l’art ?
            </span>{" "}
            <br />
            Longtemps réduit à des stéréotypes essentialistes, l’art africain
            s’expose désormais dans les plus prestigieuses galeries
            internationales. De l’émergence des artistes contemporains à
            l’univers confidentiel de l’art ancien, analyse d’un marché en
            pleine ébullition.
         </p>
         {/* carousel */}
         <div className="bordu mt-5">
            <div
               id="carouselExampleAutoplaying"
               className="carousel slide "
               data-bs-ride="carousel"
            >
               <div className="carousel-inner h-50">
                  <div className="carousel-item active">
                     <img
                        src="images/home/Carousel/carouselItem1.jpg"
                        className="d-block"
                        alt="image"
                     />
                     <div className="carousel-caption d-none d-md-block">
                        <h3>MASQUE AFRICAIN</h3>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img
                        src="images/home/Carousel/carouselItem2.jpg"
                        className="d-block img-fluid"
                        alt="image"
                     />
                     <div className="carousel-caption d-none d-md-block">
                        <h3>peinture d`art Africaine</h3>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img
                        src="images/home/Carousel/carouselItem3.jpg"
                        className="d-block img-fluid"
                        alt="image"
                     />
                     <div className="carousel-caption d-none d-md-block">
                        <h3>Tabouret Sculpté</h3>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img
                        src="images/home/Carousel/carouselItem4.jpg"
                        className="d-block img-fluid"
                        alt="image"
                     />
                     <div className="carousel-caption d-none d-md-block">
                        <h3>Sculture Humaine</h3>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img
                        src="images/home/Carousel/carouselItem5.jpg"
                        className="d-block img-fluid"
                        alt="image"
                     />
                     <div className="carousel-caption d-none d-md-block">
                        <h3>Sculture Animal</h3>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img
                        src="images/home/Carousel/carouselItem6.jpg"
                        className="d-block img-fluid"
                        alt="image"
                     />
                     <div className="carousel-caption d-none d-md-block">
                        <h3>Instrument de Musique</h3>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <img
                        src="images/home/Carousel/carouselItem7.jpg"
                        className="d-block img-fluid"
                        alt="image"
                     />
                     <div className="carousel-caption d-none d-md-block">
                        <h3>Photographique d`art Africaine</h3>
                     </div>
                  </div>
               </div>
               <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
               >
                  <span
                     className="carousel-control-prev-icon"
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
               >
                  <span
                     className="carousel-control-next-icon"
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>

         <h4 className="text-center fst-italic mb-5">
            quelques oeuvres d`art et leurs histoires
         </h4>

         <div className="row">
            {dataHomme.map((item, index) => {
               return (
                  <div key={index} className="col-sm-12 col-md-4 col-lg-6">
                     <div
                        className="card mb-3 "
                        style={{
                           height: "600px",
                           borderImage:
                              "url(../../public/images/home/Carousel/bordur.jpg) 10/10px",
                        }}
                     >
                        <img
                           src={item.img}
                           className="card-img-top"
                           alt="image"
                           style={{
                              width: "98.56%",
                              height: "400px",
                              paddingLeft: "9px",
                              paddingTop: "9px",
                           }}
                        />
                        <div className="card-body">
                           <h5 className="card-title">{item.title}</h5>
                           <p className="card-text fs-6">{item.description}
                           </p>

                          
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>

         <Footer />
      </main>
   );
}

export default Home;
