import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) {

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
   myFavorites.forEach((charFav) => {
      if (charFav.id === id) {
         setIsFav(true);
      }
   });

}, [myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  }

  return (
    <div className={styles.card}>
      <button className={styles.card_close} onClick={ () => onClose(id) }>X</button>     
      {isFav ? (
        <button className={styles.card_close} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.card_close} onClick={handleFavorite}>🤍</button>
      )}
    
        <Link className={styles.name} to={`/detail/${id}`}>
          {name}
        </Link>
        <div className={styles.details}>
          <p>{status}</p>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{origin}</p>
        </div>
      <img className={styles.cardImage} src={image} alt="" />
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export function mapStateToProps(state){
   return{
      myFavorites:state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

  
