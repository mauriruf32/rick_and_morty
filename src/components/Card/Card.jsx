import styles from "./Card.module.css"
import {Link} from "react-router-dom"

export default function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose } = props;
   return (
      <div className={styles.card}>
        <button className={styles.buttonX}
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
          <Link to={`/detail/${id}`}>
            <h1 className={styles.name}>{name}</h1>
          </Link>
          <div className={styles.details}>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
          </div>
        <img src={image} alt="" />
        <h2 className={styles.status}>{status}</h2>
      </div>
    );
  }


  
