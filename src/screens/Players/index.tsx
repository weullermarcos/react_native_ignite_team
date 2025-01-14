import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';
import { useRoute } from '@react-navigation/native';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroups } from '@storage/player/playersGetByGroup';

export function Players() {

  //Criando um tipo para os parâmetros que serão recebidos
  type RouteParams = {
    group: string;
  }

  const [newPlayerName, setNewPlayerName] =useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer(){

    if(newPlayerName.trim().length === 0){
     
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar!');
    }

    const newPlyer = {
      name: newPlayerName,
      team: team,
    }

    try{

      await playerAddByGroup(newPlyer, group);
      const players = await playersGetByGroups(group);
      console.log(players);
    }
    catch(error){

      if(error instanceof AppError){

        Alert.alert('Nova pessoa', error.message);
      }
      else{
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possível adicionar a pessoa!');
      }
    }

  }

  return (
    <Container>
        <Header showBackButton/>

        <HighLight
            title={group} 
            subtitle='Adicione a galera e separe os times'
        />

        <Form>
          <Input placeholder='Nome da pessoa' autoCorrect={false} onChangeText={setNewPlayerName}/>
          <ButtonIcon icon='add' type='PRIMARY' onPress={handleAddPlayer}/>
        </Form>

        <HeaderList>
          <FlatList
            data={['Time A', 'Time B', 'Time C']} 
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Filter 
                title={item} 
                isActive={item === team}
                onPress={() => setTeam(item)}
              />
            )}
            horizontal
          />

          <NumbersOfPlayers>
            {players.length}
          </NumbersOfPlayers>

        </HeaderList>

        <FlatList 
          data={players}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <PlayerCard name={item} onRemove={() => {}}/>
          )}
          ListEmptyComponent={() => <ListEmpty message='Não há pessoas nesse time!'/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 } ]}
        />

        <Button title='Remover turma' type='SECONDARY' />

    </Container>
  );
}