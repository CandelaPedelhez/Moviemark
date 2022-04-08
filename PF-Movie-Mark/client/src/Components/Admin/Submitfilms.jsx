import styles from "./Submitfilms.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGenres, postFilm } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";

const SubmitFilm = () => {
  const genres = useSelector((state) => state.genres);
  const [input, setInput] = useState({
    name: "",
    img: "",
    description: "",
    popularity: "",
    release_date: "",
    languages: "",
    vote_average: "",
    trailer: "",
    price: "",
    movGenres: [],
  });
  const [errorImg, setErrorImg] = useState(false);

  const dispatch = useDispatch();

  function validate(str) {
    let pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "img") {
      if (e.target.value !== "") {
        if (validate(e.target.value) === true) {
          setErrorImg(false);
        } else {
          setErrorImg(true);
        }
      } else setErrorImg(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.movGenres.length >= 1) {
      if (input.img === "") {
        dispatch(
          postFilm({
            name: input.name,
            img: "https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png",
            description: input.description,
            popularity: parseInt(input.popularity),
            release_date: input.release_date,
            languages: input.languages,
            vote_average: parseInt(input.vote_average),
            price: input.price,
            trailer: input.trailer,
            movGenres: input.movGenres,
          })
        ).then(() => {
          emptyinput();
        });
      } else {
        if (errorImg === false) {
          dispatch(
            postFilm({
              name: input.name,
              img: input.img,
              description: input.description,
              popularity: parseInt(input.popularity),
              release_date: input.release_date,
              languages: input.languages,
              vote_average: parseInt(input.vote_average),
              price: input.price,
              trailer: input.trailer,
              movGenres: input.movGenres,
            })
          ).then(() => {
            emptyinput();
          });
        }
      }
    }
  }

  function emptyinput() {
    setInput({
      name: "",
      img: "",
      description: "",
      popularity: "",
      release_date: "",
      languages: "",
      vote_average: "",
      price: "",
      trailer: "",
      movGenres: [],
    });
  }

  function handleSelect(e) {
    if (
      !input.movGenres.includes(e.target.value) &&
      input.movGenres.length < 4
    ) {
      setInput({
        ...input,
        movGenres: [...input.movGenres, e.target.value],
      });
    }
  }

  function handleDelete(e, t) {
    e.preventDefault();
    setInput({
      ...input,
      movGenres: input.movGenres.filter((e) => e !== t),
    });
  }

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.divbtt}>
        <Link to="/admin">
          <button className={styles.btnBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
      </div>
      <div className={styles.page}>
        <div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.title}>Submit films</h1>
            <input
              className={styles.input}
              value={input.name}
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              className={styles.input}
              value={input.img}
              type="text"
              name="img"
              placeholder="Image"
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              className={styles.input}
              value={input.description}
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              className={styles.input}
              value={input.trailer}
              type="text"
              name="trailer"
              placeholder="Trailer"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              className={styles.input}
              value={input.popularity}
              type="number"
              name="popularity"
              placeholder="Popularity"
              min="1"
              max="9999"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              className={styles.input}
              value={input.release_date}
              type="date"
              name="release_date"
              min="1900-01-01"
              max="2022-03-17"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              className={styles.input}
              value={input.languages}
              type="text"
              name="languages"
              placeholder="Languages"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              className={styles.input}
              value={input.vote_average}
              type="number"
              name="vote_average"
              placeholder="Vote Average"
              min="1"
              max="10"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              className={styles.input}
              value={input.price}
              type="number"
              name="price"
              placeholder="Price"
              min="1"
              max="9999"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <div>
              <select
                className={styles.select}
                onChange={(e) => handleSelect(e)}
              >
                <optgroup label="Select Genres"></optgroup>
                {genres.map((tp) => {
                  return (
                    <option key={tp.id} value={tp.id}>
                      {tp.name}
                    </option>
                  );
                })}
              </select>

              {input.movGenres?.map((t) => (
                <div className={styles.opt}>
                  <div>
                    <p className={styles.titleopt}>{t}</p>
                  </div>
                  <div>
                    <button
                      className={styles.bttx}
                      onClick={(e) => handleDelete(e, t)}
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {input.movGenres.length >= 1 || errorImg === true ? (
              <button className={styles.bttn} type="submit">
                Submit
              </button>
            ) : (
              <button className={styles.bttn} disabled type="submit">
                Submit
              </button>
            )}
            {errorImg === true ? <p>Url not valid</p> : <></>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitFilm;
