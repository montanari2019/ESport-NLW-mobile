import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { GameController } from "phosphor-react-native"
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo/DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  id: string,
  gameId: string,
  name: string,
  weekDays: string[],
  useVoiceChannel: true,
  yearsPlaying: 2,
  hourStart: string,
  hourEnd: string,
  createAt: string,
}

interface DuoProps {
  data: DuoCardProps,
  onConnect: () => void
}


export function DuoCard({ data,onConnect }: DuoProps) {






  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={data.name} />
      <DuoInfo label='Tempo de jogo' value={`${data.yearsPlaying} anos`} />
      <DuoInfo label='Disponibilidade' value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`} />
     
      <DuoInfo 
        label='Chamada de audio'
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>

        <GameController color={THEME.COLORS.TEXT} size={20}/>
        <Text style={styles.buttonTitle}>Conectar</Text>

      </TouchableOpacity>
    </View>
  );
}