import React, { useState } from 'react';
function App(props) {
  const [user, setUser] = useState('Cirillo');
  return (
    <>
      <h1>
        {props.title} {props.user}
      </h1>
      <p>{user}</p>
      <input
        name="user"
        id="user"
        className="userInput"
        placeholder="Usuário"
      />
    </>
  );
}

export default App;
