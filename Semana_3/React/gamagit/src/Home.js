import React, { useState } from 'react';
import axios from 'axios';

export default function Home(props) {
  const [user, setUser] = useState('');

  //create function handleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    //make a request to the github API
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <input
        name="user"
        id="user"
        className="userInput"
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        Pesquisar
      </button>
    </>
  );
}
