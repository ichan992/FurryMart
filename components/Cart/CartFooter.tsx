import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import { ConvertNumberFormat } from '../../helpers';
interface CartFooterInterface {
  total: number;
}
export const CartFooter = ({total}: CartFooterInterface) => {
  return (
    <View style={styles.cartFooterContainer}>
      <View style={styles.footerTextContainer}>
        <Text style={styles.totalHeader}>Total</Text>
        <Text style={styles.totalText}>{ConvertNumberFormat(total)}</Text>
      </View>
      <Button style={{borderRadius: 5}} buttonColor="orange" mode="contained">
        Checkout
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartItemsContainer: {
    height: '80%',
    paddingTop: 30,
  },
  totalHeader: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartFooterContainer: {
    backgroundColor: 'white',
    height: '30%',
    gap: 10,
    borderColor: 'gray',
    borderTopWidth: 0.5,
    padding: 20,
  },
  totalText: {
    fontSize: 20,
    color: 'orange',
  },
});
