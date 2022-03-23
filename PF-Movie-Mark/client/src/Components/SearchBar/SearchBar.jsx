import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./SearchBar.module.css";

export default function SearchBar({ placeholder, data }) {
  const movies = useSelector((state) => state.movies);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = movies.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData("");
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={styles.searchIcon}>
          {wordEntered.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id={styles.clearBtn} onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.dataResult}>
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <a
                className={styles.dataItem}
                rel="noreferrer"
                href={`/movies/${value.id}`}
                target="_blank"
              >
                <p>{value.title}</p>
                {/* <img src={value.img} style={{ width: "60px", height: "40px", marginRight: "8px"}}/> */}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getMovieByTitle } from "../../Actions";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
// import "./SearchBar.css";

// export default function SearchBar() {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState("");

//   function handleChange(e) {
//     e.preventDefault();
//     setTitle(e.target.value);
//     //console.log(name);
//   }

//   function handleSubmit(e) {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       dispatch(getMovieByTitle(title));
//       setTitle("");
//     }
//   }

//   const handleClearInput = (e) => {
//     e.preventDefault();
//     setTitle("");
//   };

//   return (
//     <div className="searchBar">
//       <input
//         type="text"
//         placeholder="Ej: 'The Godfather'"
//         value={title}
//         onChange={(e) => handleChange(e)}
//         className="input"
//         onKeyPress={e=>handleSubmit(e)}
//       ></input>
//       {title.length === 0 ? (<button className="btnSearch"><FontAwesomeIcon icon={faSearch} />
//       </button>) : (<button type="button" onClick={(e) => handleClearInput(e)} className="btnClear">
//         <FontAwesomeIcon icon={faTimes} />
//       </button>)}
//     </div>
//   );
// }
