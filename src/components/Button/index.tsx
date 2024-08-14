import React from 'react';

import { Container, Title, ButtonTypeStylesProps } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStylesProps; //Parâmetro opcional
};

export function Button({ title, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container type={type} {...rest}>
        <Title>{title}</Title>
    </Container>
  );
}