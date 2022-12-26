import React from 'react';
import { Image, View, FlatList, FlatListProps } from 'react-native';

import { styles } from './styles';
import imageLogo from "../../assets/logo-nlw-esports.png"
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import { GAMES } from "../../utils/games"

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={imageLogo} style={styles.logo} />

      <Heading title='Encontre seu duo!' subtile='Selecione o game que deseja jogar...' />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={GAMES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard data={item} />

        )}
      />

    </View>
  );
}