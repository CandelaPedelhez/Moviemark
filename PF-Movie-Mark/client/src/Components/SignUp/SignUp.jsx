/* eslint-disable no-useless-escape */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../Actions";
import styles from "./SignUp.module.css";
import Loader from "../Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [allowed, setAllowed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailused, setEmailUsed] = useState(false);

  const history = useNavigate();
  const dispatch = useDispatch();

  function validate_email(str) {
    let pattern = new RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    return !!pattern.test(str);
  }

  function validate_name(str) {
    let pattern = new RegExp("[A-Z][a-z]{1,}"); //CAMBIAR REGEXP.... NO deberia aceptar espacios en blanco porque rompe... El back rompe con Jose Maria!
    return !!pattern.test(str);
  }

  function validate_password(str) {
    let pattern = new RegExp(/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/);
    return !!pattern.test(str);
  }

  function validate(ipname, ipvalue) {
    if (ipname === "name") {
      validate_name(ipvalue) === true
        ? setError({ ...error, name: false })
        : setError({ ...error, name: true });
    }
    if (ipname === "lastName") {
      validate_name(ipvalue) === true
        ? setError({ ...error, lastName: false })
        : setError({ ...error, lastName: true });
    }
    if (ipname === "email") {
      validate_email(ipvalue) === true
        ? setError({ ...error, email: false })
        : setError({ ...error, email: true });
    }
    if (ipname === "password") {
      validate_password(ipvalue) === true
        ? setError({ ...error, password: false })
        : setError({ ...error, password: true });
    }
    if (
      error.email === true ||
      error.lastName === true ||
      error.name === true ||
      error.password === true
    ) {
      setAllowed(false); //No permitido, tengo errores
    } else setAllowed(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allowed === true) {
      dispatch(createUser(input)).then((res) => {
        if (res.payload.msg === "Email registered") {
          setEmailUsed(true);
        } else {
          setEmailUsed(false);
          setSuccess(true);
          setInput({
            name: "",
            lastName: "",
            email: "",
            password: "",
          });
          setTimeout(function () {
            history("/login");
          }, 2000);
        }
      });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    validate(e.target.name, e.target.value);
  };

  return (
    <div>
      <div className={styles.divbtt}>
        <Link to="/home">
          <button className={styles.btnBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
      </div>

      <div className={styles.page}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h1 className={styles.title}>Sign Up</h1>
          <input
            className={styles.input}
            value={input.name}
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => handleChange(e)}
          ></input>

          <input
            className={styles.input}
            value={input.lastName}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => handleChange(e)}
          ></input>

          <input
            className={styles.input}
            value={input.email}
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          ></input>

          <input
            className={styles.input}
            value={input.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          ></input>

          <div>
            {input.name.trim() === "" ||
            input.lastName.trim() === "" ||
            input.email.trim() === "" ||
            input.password.trim() === "" ? (
              <button className={styles.buttondis} disabled type="submit">
                Sign up
              </button>
            ) : (
              <button className={styles.button} type="submit">
                Sign up
              </button>
            )}
          </div>
          <div className={styles.doyoudiv}>
            <Link to={"/login"}>
              <p className={styles.doyou}>Do you have an account?</p>
            </Link>
          </div>
          <div>
            {error.name === true && input.name.trim() !== "" ? (
              <p className={styles.errors}>Name not valid</p>
            ) : (
              <></>
            )}
            {error.lastName === true && input.lastName.trim() !== "" ? (
              <p className={styles.errors}>Last Name not valid</p>
            ) : (
              <></>
            )}
            {error.email === true && input.email.trim() !== "" ? (
              <p className={styles.errors}>Email not valid</p>
            ) : (
              <></>
            )}
            {error.password === true && input.password.trim() !== "" ? (
              <p className={styles.errors}>
                Minimum eight characters, at least one letter and one number
              </p>
            ) : (
              <></>
            )}
          </div>
          {emailused === true ? (
            <p className={styles.errors}>Email already used</p>
          ) : (
            <></>
          )}
          {success === true ? (
            <p className={styles.success}>
              Register success. You can login now
            </p>
          ) : (
            <></>
          )}
        </form>
      </div>
      {success === true ? <Loader /> : <></>}
    </div>
  );
};

export default SignUp;
