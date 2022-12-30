import imageLogo from "../../assets/logo-nlw-esports.png"
import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native"
import { Image, View, FlatList, FlatListProps } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from './styles';

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from "../../components/Background/Background";




export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([])


  useEffect(() => {


    fetch(`http://172.28.2.130:3232/games`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setGames(res)

      })
      .catch((err) => { console.log(err) })

  }, [])

  const navigation = useNavigation()

  function handleOpenGame({id, title, bannerUrl}:GameCardProps){

    navigation.navigate('game', {id, title, bannerUrl})
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />

        <Heading title='Encontre seu duo!' subtile='Selecione o game que deseja jogar...' />

        <FlatList
          contentContainerStyle={styles.contentList}
          data={games}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} 
              onPress={()=> handleOpenGame(item)}
            
            />

          )}
        />

      </SafeAreaView>
    </Background>
  );
}