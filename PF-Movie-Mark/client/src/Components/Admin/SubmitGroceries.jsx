import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./SubmitGroceries.module.scss";
import { useState } from "react";
import { postGrocerie } from "../../Actions";
import { useDispatch } from "react-redux";

const SubmitGroceries = () => {
  const [input, setInput] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    description: "",
    typeGrocerie: "",
    img: "",
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
    if (input.img === "") {
      dispatch(
        postGrocerie({
          id: input.id,
          name: input.name,
          price: input.price,
          stock: input.stock,
          description: input.description,
          typeGrocerie: input.typeGrocerie,
          img: "https://drawinghowtos.com/wp-content/uploads/2020/02/candy-colored.jpg",
        })
      ).then(() => {
        emptyinput();
      });
    } else {
      if (errorImg === false) {
        dispatch(
          postGrocerie({
            id: input.id,
            name: input.name,
            price: input.price,
            stock: input.stock,
            description: input.description,
            typeGrocerie: input.typeGrocerie,
            img: input.img,
          })
        ).then(() => {
          emptyinput();
        });
      }
    }
  }

  function emptyinput() {
    setInput({
      id: "",
      name: "",
      price: "",
      stock: "",
      description: "",
      typeGrocerie: "",
      img: "",
    });
  }

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
            <h1 className={styles.title}>Add grocerie</h1>
            <input
              className={styles.input}
              value={input.id}
              type="text"
              name="id"
              placeholder="Id"
              onChange={(e) => handleChange(e)}
            ></input>
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
              value={input.price}
              type="number"
              name="price"
              placeholder="Price"
              min="1"
              max="9999"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              className={styles.input}
              value={input.typeGrocerie}
              type="text"
              name="typeGrocerie"
              placeholder="Type Grocerie"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            <input
              className={styles.input}
              value={input.stock}
              type="number"
              name="stock"
              placeholder="Stock"
              min="1"
              max="999"
              onChange={(e) => handleChange(e)}
              required
            ></input>
            {errorImg !== true ? (
              <button className={styles.bttn} type="submit">
                Add
              </button>
            ) : (
              <button className={styles.bttn} disabled type="submit">
                Add
              </button>
            )}
            {errorImg === true ? <p>Url not valid</p> : <></>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitGroceries;
