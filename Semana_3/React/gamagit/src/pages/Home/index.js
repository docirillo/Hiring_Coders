import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';

export default function Home(props) {
  const [user, setUser] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    //make a request to the github API
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((res) => {
        const repositories = res.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.Container>
      <S.Input
        name="user"
        id="user"
        className="userInput"
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <S.Button type="button" onClick={handleSearch}>
        Pesquisar
      </S.Button>
    </S.Container>
  );
}
