import React from 'react';
import { TouchableOpacityProps } from 'react-native'; //Importando as propriedades do TouchableOpacity
import { Container, Icon, Title } from './styles';

type Props = TouchableOpacityProps & { //Aproveitando as propriedades do TouchableOpacity
    title: string;
}

export function GroupCard({title, ...rest}: Props) {
  return (
    <Container {...rest}>
        <Icon />
        <Title>{title}</Title>
    </Container>
  );
}
