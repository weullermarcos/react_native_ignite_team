import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { groupCrate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export function NewGroup() {

  //Criando um estado para armazenar as informações do input
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew(){
    
    try{

      if(group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma!');
      }

      await groupCrate(group); //Armazena o grupo localmente
      navigation.navigate('players', {group: group});
    }
    catch(error){

      if(error instanceof AppError){ //Verificando se o erro retornado é do tipo criado

        Alert.alert('Novo Grupo', error.message);
      }
      else{

        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo!');
        console.log(error);
      }
    }

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