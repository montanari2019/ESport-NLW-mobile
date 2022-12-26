
import { Text, View, ViewProps } from 'react-native';

import { styles } from './styles';

interface HeadingProps extends ViewProps{
  title: string,
  subtile: string,
}

export function Heading({ subtile, title, ...rest }:HeadingProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtile}>
        {subtile}
      </Text>

    </View>
  );
}