
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
    id: string,
    name: string,
    ads: string,
    cover: ImageSourcePropType
}

interface CardProps extends TouchableOpacityProps {
    data: GameCardProps
}

export function GameCard({ data, ...rest }: CardProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground  style={styles.cover} source={data.cover}>

                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.ads}>{data.ads} anúncios</Text>
                </LinearGradient>

            </ImageBackground>




        </TouchableOpacity>
    );
}