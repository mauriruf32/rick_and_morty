import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import styles from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Card(props) {
  const {
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
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation();
  
  const handleFavorite = () => {
    if (isFav) {
      removeFav(id);
    } else {
      addFav(props);
    }
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFavorites]);

	const handleClose = () => {
		removeFav(id)
		onClose(id)
	}

  return (
    <div className={styles.card}>
   
      {isFav ? (
        <button className={styles.card_close} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.card_close} onClick={handleFavorite}>🤍</button>
      )}

      {pathname !== "/favorites/" ? (
        <button className={styles.card_favorite} onClick={handleClose}>
          X
        </button>
      ) : (
        <button className={styles.card_favorite} onClick={handleClose}>X</button>
      ) } 
    
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

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export function mapStateToProps(state){
   return{
      myFavorites:state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

  
