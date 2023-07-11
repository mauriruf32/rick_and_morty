import styles from "./Favorites.module.css";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { filterCards, orderCards, getFav } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getFav())
  },[])

  const handleOrder = function(evento){
    dispatch(orderCards(evento.target.value))
  }

  const handleFilter = (evento) => {
    dispatch(filterCards(evento.target.value))
  }

  return (<div>
    <div>
      <select name="order" onChange={handleOrder} >
        <option value="A">Ascendent</option>
        <option value="D">Descendent</option>
      </select>
      <select name="filter" onChange={handleFilter} >
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
      <div>{myFavorites?.map(({ id, name, status, species, gender, origin, image }) => (<Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
          />))}</div>
  </div>)
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)
