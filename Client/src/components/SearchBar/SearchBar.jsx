import styles from "../SearchBar/SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId] = useState("")
   const handleChange = (e) => {
    setId(e.target.value);
   }
   return (
        <div className={styles.searchBar}>
        <input type="search"
        onChange={handleChange}
        value={id}
        />
        <button className={styles.boton}
        onClick={() => {
          onSearch(id);
        }}
          >Agregar</button>
      </div>
    );
  }

  
//    return (
//       <div>
//          <input type='search' />
//          <button onClick={}>Agregar</button>
//       </div>
//    );
// }
