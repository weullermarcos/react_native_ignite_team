import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Loading } from '@components/Loading';
import theme  from './src/theme';

//Importando fontes Roboto
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

export default function App() {

  //Carregando as fontes para uso na aplicação
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent"/>
      
      {/* Se as fontes ainda não estiverem carregadas - Mostra o load */}
      { fontsLoaded ? <NewGroup /> : <Loading /> }

    </ThemeProvider>
  );
}

 