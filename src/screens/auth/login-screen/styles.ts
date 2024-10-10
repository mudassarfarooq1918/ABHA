import {colors, fonts} from '@constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scroll: {
    overflow: 'hidden',
    height: '100%',
    backgroundColor: colors.white,
  },
  contentContainer: {
    height: '100%',
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.primary,
    fontFamily: fonts.MONTSERRAT_BOLD,
  },
  formContainer: {},
});
