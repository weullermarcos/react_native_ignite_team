import React, { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Container } from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }

  //Busca os grupos armazenados no dispositivo local 
  async function fetchGroups(){

    try{

      const data = await groupsGetAll();
      setGroups(data); //Atualiza com os grupos recuperados do armazenamento local
    }
    catch(error){
      console.log(error);
    }
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', { group }); //Abre a tela de jogadores passando o nome do grupo como parâmetro
  }

  useFocusEffect(useCallback(() =>{
    fetchGroups(); //Chama a função fetchGroups quando a tela é renderizada
  }, []));

  return (
    <Container>
      <Header />
      <HighLight title='Turmas' subtitle='Jogue com a sua turma'/>

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
            onPress={() => handleOpenGroup(item)}
          />
        )}
        ListEmptyComponent={() => <ListEmpty message='Ainda não há turmas cadastradas!'/>}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        showsVerticalScrollIndicator = {false}
      />

      <Button title='Criar nova turma' onPress={handleNewGroup}/>

    </Container>
  );
}