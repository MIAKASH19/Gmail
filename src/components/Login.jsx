import "./Login.css";
import { auth, provider } from "./firebase";
import Button from "@mui/material/Button";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login-container">
        <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" />

        <Button variant="contained" color="primary" onClick={SignIn}>
          Log In
        </Button>
      </div>
    </div>
  );
}

export default Login;
