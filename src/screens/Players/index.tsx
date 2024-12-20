import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';

import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Players() {

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Adamastor', 'Adelmira', 'Abadia', 'Adalberto', 'Amanda', 'Albertão', 'Helismar']);

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