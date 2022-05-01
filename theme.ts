import {DefaultTheme} from 'styled-components';

// Para adicionar novas properties va em @types no arquivo StyleSheet.d.ts

export const DarkTheme: DefaultTheme = {
  colors: {
    text: '#FFFFFF',
    placeHolderText: '#B3B5BB',
    background: '#1a1a1a',
    backgroundAlternative: '#262626',
    primary: '#7962F7',
    secondary: '#595959',
  },
};

export default function getTheme() {
  return DarkTheme;
}
