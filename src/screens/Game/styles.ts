import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  header:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: "space-between"
  },

  imageLogo:{
    width: 72,
    height: 40,
  },

  rigth:{
    width: 20,
    height: 20,
  },
  gameFolder:{
    width: "85%",
    height: 160,
    borderRadius: 8,
    marginTop: 32,


  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 85,
    alignItems: "flex-start",

  },
  containerList:{
    width: "100%",
  },
  textListEmpty:{
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    
  }
});