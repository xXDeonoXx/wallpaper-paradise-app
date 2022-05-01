import React from 'react';
import {Button, Label} from './styles';

interface MyButtonProps {
  label: string;
  onPress: () => void;
}

const MyButton = ({label, onPress}: MyButtonProps) => {
  return (
    <Button onPress={onPress}>
      <Label>{label}</Label>
    </Button>
  );
};

export default MyButton;
