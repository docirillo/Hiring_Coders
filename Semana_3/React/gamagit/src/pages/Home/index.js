import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

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
        setError(false);
        navigate('/repositories');
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <S.HomeContainer>
      <S.Content>
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
      </S.Content>
      {error ? <S.ErrorMsg>Ocorreu um erro. Tente Novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}
