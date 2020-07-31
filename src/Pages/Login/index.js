import React from 'react';

function Login({ history }) {
  function handleLogin() {
    localStorage.setItem('@SuaAplicacao:JWT_TOKEN', 'seutokenjwt');
    history.push('Main');
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="email" placeholder="Seu email" required />
      <input type="password" name="password" placeholder="Sua senha" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;