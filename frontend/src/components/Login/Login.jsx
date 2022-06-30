/* eslint-disable react/function-component-definition */
import { useRef, useState, useEffect /* useContext */ } from "react";
/* import AuthContext from "./AuthProvider"; */

// email & pwd to login

import axios from "../axios";

const LOGIN_URL = "/api/v1/users/login";

const Login = () => {
  /*   const { setAuth } = useContext(AuthContext); */
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        /*   JSON.stringify */ { user, pwd },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      /* console.log(JSON.stringify(response?.data)); */
      console.warn(JSON.stringify(response));
      /*      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken }); */
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div>
      {success ? (
        <section>
          <h1 id="font1">You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 id="font1">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label id="font2" htmlFor="username">
              Email:
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </label>
            <label id="font2" htmlFor="password">
              Password:
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </label>
            <button type="submit">Sign In</button>
          </form>
          <p id="font2">
            Need an Account?
            <br />
            <span className="line">
              {/* put router link here */}
              <a href="/register">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Login;
