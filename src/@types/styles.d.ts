// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      placeHolderText: string;
      background: string;
      backgroundAlternative: string;
      primary: string;
      secondary: string;
    };
  }
}
