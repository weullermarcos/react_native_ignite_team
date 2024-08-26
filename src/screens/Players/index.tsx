import React from 'react';
import { Container, Form } from './styles';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

export function Players() {
  return (
    <Container>
        <Header showBackButton/>

        <HighLight
            title='Nome da turma' 
            subtitle='Adicione a galera e separe os times'
        />

        <Form>
          <Input placeholder='Nome da pessoa' autoCorrect={false}/>
          <ButtonIcon icon='add' type='PRIMARY'/>
        </Form>

        <Filter title='Time A' isActive={true}/>

    </Container>
  );
}