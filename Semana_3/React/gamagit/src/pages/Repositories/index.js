import React from 'react';
import * as S from './styled';

export default function Repositories() {
  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {[...Array(10)].map((_, i) => (
          <S.ListItem key={i}>Repositório {i}</S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}
