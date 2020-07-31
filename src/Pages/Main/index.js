import React from 'react';

function Main({ history }) {
  function handleLogout() {
    localStorage.removeItem('@SuaAplicacao:JWT_TOKEN');

    history.push('/');
  }

  return (
    <div>
      <h3>Bem vindo</h3>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}

export default Main;