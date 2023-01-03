
import { View, TouchableOpacity, Image, FlatList, Text } from "react-native"
import { useEffect, useState } from "react"
import { GameParams } from '../../@types/@navigation';
import { useRoute, useNavigation } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from "@expo/vector-icons"
import { THEME } from '../../theme';
import { styles } from './styles';

import logoImg from "../../assets/logo-nlw-esports.png"

import { Background } from '../../components/Background/Background';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from "../../components/DuoCard";


export function Game() {

    const [duos, setDuos] = useState<DuoCardProps[]>([])

    const navigation = useNavigation()

    const route = useRoute()

    const game = route.params as GameParams

    function handleGoBack() {
        navigation.goBack()
    }


    useEffect(() => {


        fetch(`http://172.28.2.130:3232/games/${game.id}/ads`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setDuos(res)

            })
            .catch((err) => { console.log(err) })

    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>


                <View style={styles.header}>
                    <TouchableOpacity>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                            onPress={handleGoBack}
                        />


                    </TouchableOpacity>
                    <Image source={logoImg} style={styles.imageLogo} />

                    <View style={styles.rigth} />

                </View>

                <Image style={styles.gameFolder} source={{ uri: game.bannerUrl }} resizeMode="cover" />

                <Heading title={game.title} subtile="Conecte-se e comece a jogar!" />




                <FlatList
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <DuoCard data={item} onConnect={() => { }} />
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    style={[styles.containerList]}
                    showsHorizontalScrollIndicator={false}

                    ListEmptyComponent={() => (
                        <Text style={styles.textListEmpty}>Não há anuncios publicados ainda</Text>
                    )}


                />





            </SafeAreaView>
        </Background>
    );
}