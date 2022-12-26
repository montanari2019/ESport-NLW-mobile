import { StatusBar, Text } from "react-native"
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from "@expo-google-fonts/inter"

import { Background } from './src/components/Background/Background';
import { Home } from "./src/screens/Home/index"
import { Loading } from "./src/components/Loading";

export default function App() {
  const [ fonstLoaded ] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  })
  return (
    <Background >
      <StatusBar barStyle="light-content" backgroundColor="tranparent" translucent/>
      {fonstLoaded ?  <Home/> : <Loading/> }
    </Background>
  );
}



