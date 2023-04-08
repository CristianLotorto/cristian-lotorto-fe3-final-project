import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { ContextGlobal } from "./utils/Provider";
import { types } from "./utils/Reducer";


const Card = ({ data }) => {

  const {state, dispatch} = useContext(ContextGlobal);
  
  const {name, username, id} = data

  const isFav = state.favDentists.some(fav => fav.id === id)

  const favButtonHandler = (id) =>{

    { isFav ? dispatch({type: types.deleteFromLS, payload:id})  :  dispatch({type: types.toLS, payload: data})/*localStorage.setItem('favDentists', JSON.stringify(data))*/ }
  } 
  
  return (
    <div className="card">
      <NavLink to={`dentist/${id}`}>
        {/* {id ? dispatch({type: types.getId , payload: id}) : ""} */}
        <div className="card-link">
          <img className="dentist-img" src="/images/doctor.jpg" alt="doctor profile" />

          <h3>{name}</h3>

          <h4>{username}</h4>
        </div>
      </NavLink>

        <button onClick={() => favButtonHandler(id)} className="fav-button"><img className="fav-button-img" src="/images/Star.png" alt="Favorites Icon" /></button>
    </div>
  );
};

export default Card;