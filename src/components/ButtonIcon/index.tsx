import React from 'react';
import { View, TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {

};

export function ButtonIcon({}: Props) {
  return (
    <Container>
        <Icon name='home' type='SECONDARY' />
    </Container>
  );
}