
import { ImageBackground } from 'react-native';

import { styles } from './styles';
import bacckgroundImg from "../../assets/background-galaxy.png"

interface BackgroundProps{
  children: React.ReactNode
}

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground source={bacckgroundImg} defaultSource={bacckgroundImg} style={styles.container} >
      {children}
    </ImageBackground>
  );
}