import "./css/Login.css";
import InputBox from "./InputBox.js";

export default function Login() {
  return (
    <>
      <div class="container">
        <div class="drop">
          <div class="content">
            <h2>login</h2>
            <form>
              <InputBox type="text" placeholder="username" />
              <InputBox type="password" placeholder="password" />
              <InputBox type="submit" value="login" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}