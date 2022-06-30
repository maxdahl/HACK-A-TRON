/* eslint-disable react/function-component-definition */
import { Box, Container, Grid } from "@mui/material";
import { useEffect /* useContext */, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "@components/AddProject/order/PageHeader";
import PageTitleWrapper from "@components/AddProject/order/PageTitleWrapper";

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
  /*  const [success, setSuccess] = useState(false); */

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
      /* setSuccess(true); */
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
    <>
      <PageTitleWrapper>
        <PageHeader location="Login" />
      </PageTitleWrapper>
      <Container>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item xs={12}>
            <>
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
                  <input
                    style={{ width: "300px" }}
                    type="text"
                    id="username"
                    placeholder="Email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                </label>
                <label id="font2" htmlFor="password">
                  <input
                    style={{ width: "300px" }}
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                </label>
                <Grid item xs={12}>
                  <Link to="/">
                    <button type="submit" style={{ width: "300px" }}>
                      Sign In
                    </button>
                  </Link>
                </Grid>
              </form>
              <Grid item xs={12}>
                <Box>
                  <p id="font2">
                    Need an Account?
                    <span className="line">
                      <a href="/register">Sign Up</a>
                    </span>
                  </p>
                </Box>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
