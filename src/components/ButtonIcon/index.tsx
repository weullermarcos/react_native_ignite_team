import React from 'react';
import { View, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Icon, ButtonIconTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap; //criando um tipo correspondente a bibliteca de imagens
  type?: ButtonIconTypeStyleProps; //opcional
};

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container {...rest}>
        <Icon 
          name={icon} 
          type={type} 
        />
    </Container>
  );
}