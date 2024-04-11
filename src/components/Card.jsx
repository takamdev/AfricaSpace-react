import { BsCartPlusFill } from "react-icons/bs"; 
import { Link} from 'react-router-dom'
import { useStore } from "../../store.jsx";


function Card({Oeuvre}) {
const updateProduit = useStore((state)=>state.updateProduit)
let CARD = useStore((state)=>state.CARD)
// style={{width:"400px",height:"300px"}}
function addCart(Oeuvre){

  let isExist = CARD.findIndex(item=>item.id===Oeuvre.id)
 if(isExist=== -1){
  updateProduit(Oeuvre)
 }




}
  return (
    <div id="card" className="card mb-3" style={{height:"620px"}}>
    <div className="W-100 overflow-hidden">
    <img src={Oeuvre.img} className="card-img-top cardImage" alt="image" style={{width:"100%",height:"300px"}}/>
    </div>
    <div className="card-body" style={{position:"relative"}}>
      <h5 className="card-title" >{Oeuvre.title}</h5>
      <p className="card-text">
        {Oeuvre.smallDescription}<br />
        Prix: <span className="fw-bold" >{Oeuvre.price}</span> FCFA

        </p>
       
  
      <div   style={{position:"absolute" , bottom:"10px" ,width:"90%" }}>
        <p> NOTE:
                                  <span className="note">★</span>
                                  <span className="note">★</span>
                                  <span className="note">★</span>
                                  <span className="note">★</span>
                                  <span className="note">★</span>
        </p>
        <div className="hstack">
        <Link to={`/OeuveItem/${Oeuvre.id}`} className="btn btn-dark">Voir Plus</Link>
        <button className="ms-auto btn btn-warning" onClick={()=>addCart(Oeuvre)}><BsCartPlusFill/></button>
        </div>
  
      </div>
     
    </div>
  </div>
  )
}

export default Card