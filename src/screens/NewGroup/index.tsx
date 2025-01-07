import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroup() {

  //Criando um estado para armazenar as informações do input
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  function handleNew(){
    navigation.navigate('players', {group: group});
  }

  return (
    <Container>
        <Header showBackButton={true}/>

        <Content>
            <Icon />
            <HighLight title='Nova turma' subtitle='Crie a turma para adicionar as pessoas'/>

            <Input placeholder='Nome da turma' onChangeText={setGroup}/>
            <Button title='Criar' style={{marginTop: 20}} onPress={handleNew}/>
        </Content>

    </Container>
  );
}