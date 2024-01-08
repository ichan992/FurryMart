import React from 'react'
import { View,Text, Dimensions, Pressable } from 'react-native'
import { Button, Surface } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ConvertNumberFormat } from '../../../helpers';
interface ProductDescProps {
  AddtoCart : () => void
  IncrementQuantity : () => void
  DecrementQuantity : () => void
  getTotal : () => number
  quantity : number,
}
export default function ProductDescFooter({AddtoCart,quantity, IncrementQuantity, DecrementQuantity,getTotal} : ProductDescProps) {
const { height } = Dimensions.get('window');
const Quantity = () =>{
    return(
      <View
      style={{
        flexDirection: "row",
        borderRadius:10,
        alignItems: "center",
        borderColor:'gray',
        justifyContent: "space-between",
        gap: 15,
      }}
    >
      <Pressable
        style={{ height: 30, justifyContent: "center"}}
        onPress={DecrementQuantity}
      >
          <Ionicons color={'gray'} name="remove-outline" size={24}/>
      </Pressable>
      <View>
        <Text style={{ fontSize: 14, color: "gray" }}>{quantity}</Text>
      </View>
      <Pressable
      onPress={IncrementQuantity}
        style={{ height: 25, justifyContent: "center"}}
      >
         <Ionicons color={'gray'} name="add-outline" size={24}/>
      </Pressable>
    </View>
    )
}
  return (
    <Surface  elevation={5} style={{height:height/7,justifyContent:'space-evenly', backgroundColor:'white',paddingHorizontal:10}}>
        <View style={{height:'40%',flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderColor:'#d3d3d3',borderBottomWidth:1,paddingHorizontal:10}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:'gray',fontSize:16}}>Quantity: </Text>
              <View>
                <Quantity/>
              </View>
            </View>
            <View>
              <Text style={{color:'orange',fontWeight:'bold', fontSize:20}}>{ConvertNumberFormat(getTotal())}</Text>
            </View>
        </View>
        <View style={{width:'100%',flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
            <Button  onPress={()=>AddtoCart()} labelStyle={{fontSize:16}} style={{width:'100%',borderRadius:5,backgroundColor:'orange',}} mode='contained'>Add to bag</Button>
        </View>
    
    </Surface>
  )
}
