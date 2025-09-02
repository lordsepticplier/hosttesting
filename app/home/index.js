import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function tours() {
    const tours = ['wel','chr','ack']
  return (
    <View 
    style={{
        flex:1,
        alignItems:'center',
        backgroundColor:'lightgrey'
    }}>
      <Text>select tours</Text>
      {
        tours.map(places=>(
            <TouchableOpacity onPress={()=>{
                router.push({pathname:'/home/Detail', params:{tour:places}});
                }}>
                <Text>{places}</Text>
            </TouchableOpacity>
        ))
      }
    </View>
  )
}