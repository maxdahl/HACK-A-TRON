import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import PageHeader from "@components/AddProject/order/PageHeader";
import PageTitleWrapper from "@components/AddProject/order/PageTitleWrapper";
// eslint-disable-next-line
const USER_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// eslint-disable-next-line
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/api/v1/users/register";

function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [role, setRole] = useState();
  const [location, setLocation] = useState();
  const [language, setLanguage] = useState();

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          email: user,
          password: pwd,
          firstName,
          language,
          lastName,
          role,
          location,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.warn(response?.data);
      console.warn(JSON.stringify(response));
      setSuccess(true);
      // clear state and controlled inputs
      // need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
      setLanguage("");
      setFirstName("");
      setLastName("");
      setLocation("");
      setRole("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <PageTitleWrapper>
        <PageHeader location="Register" />
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
            <div>
              {success ? (
                <section>
                  <h1 id="font1">Success!</h1>
                  <p>
                    <a id="font1" href="/">
                      Sign In
                    </a>
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
                  <h1 id="font1">Register</h1>
                  <form onSubmit={handleSubmit}>
                    <label id="font2" htmlFor="firstname">
                      <input
                        type="text"
                        id="firstname"
                        placeholder="First Name"
                        ref={userRef}
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        required
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                    </label>
                    <label id="font2" htmlFor="lastname">
                      <input
                        type="text"
                        placeholder="Last Name"
                        id="lastname"
                        ref={userRef}
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        required
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                    </label>
                    <label id="font2" htmlFor="role">
                      <input
                        type="text"
                        id="role"
                        placeholder="Role"
                        ref={userRef}
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                        required
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                    </label>
                    <label id="font2" htmlFor="location">
                      <input
                        type="text"
                        id="location"
                        placeholder="Location"
                        ref={userRef}
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                        required
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                    </label>
                    <label id="font2" htmlFor="language">
                      <input
                        type="text"
                        placeholder="Language"
                        id="language"
                        ref={userRef}
                        onChange={(e) => setLanguage(e.target.value)}
                        value={language}
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                    </label>

                    <label id="font2" htmlFor="username">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validEmail ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validEmail || !user ? "hide" : "invalid"}
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                    </label>
                    <p
                      id="uidnote font2"
                      className={
                        userFocus && user && !validEmail
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>

                    <label id="font2" htmlFor="password">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validPwd || !pwd ? "hide" : "invalid"}
                      />
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                      />
                    </label>
                    <p
                      id="pwdnote font2"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>

                    <label id="font2" htmlFor="confirm_pwd">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      />
                      <input
                        type="password"
                        id="confirm_pwd"
                        placeholder="Confirm Password"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                      />
                    </label>
                    <p
                      id="confirmnote font2"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>

                    <Link to="/">
                      <button type="submit">Sign Up</button>
                    </Link>
                  </form>
                  <p id="font2">
                    Already registered?
                    <br />
                    <span className="line">
                      {/* put router link here */}
                      <a href="/login">Sign In</a>
                    </span>
                  </p>
                </section>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Register;
