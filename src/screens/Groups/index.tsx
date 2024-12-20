import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);

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
          />
        )}
        ListEmptyComponent={() => <ListEmpty message='Ainda não há turmas cadastradas!'/>}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        showsVerticalScrollIndicator = {false}
      />

      <Button title='Criar nova turma'/>

    </Container>
  );
}