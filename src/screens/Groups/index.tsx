import React from 'react';

import { Container } from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  return (
    <Container>
      <Header />
      <HighLight title='Turmas' subtitle='Jogue com a sua turma'/>

      <GroupCard title='Galera do Rianaps' />
    </Container>
  );
}