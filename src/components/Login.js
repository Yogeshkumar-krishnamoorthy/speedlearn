import "./css/Login.css";
import InputBox from "./InputBox.js";
import Anchor from "./Anchor";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="drop">
          <div className="content">
            <h2>Login</h2>
            <form>
              <InputBox
                className="username"
                type="text"
                placeholder="username"
              />
              <InputBox
                className="password"
                type="password"
                placeholder="password"
              />
              <InputBox className="loginSubmit" type="submit" value="Login" />
            </form>
          </div>
        </div>
        <Anchor className="btns" linkText="Forgot Password" />
        <Anchor className="btns Sign Up" linkText="Sign Up" />
      </div>
    </>
  );
}
