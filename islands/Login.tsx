import { FunctionComponent } from "preact";

const Login: FunctionComponent = () => {
  return (
    <form class="form"  method="post">
      <h1>Log in</h1>
      <input type="text" name="user" placeholder="usuario" />
      <input type="password" name="password" placeholder="contraseña" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;