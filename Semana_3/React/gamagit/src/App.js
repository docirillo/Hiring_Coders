import React, { useState } from 'react';
function App(props) {
  return (
    <>
      <input
        name="user"
        id="user"
        className="userInput"
        placeholder="Usuário"
      />
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
