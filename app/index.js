import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  const router = useRouter();
    const tours = ['wel','chr','ack']
  return (
    <View 
    style={{
        flex:1,
        alignItems:'center',
        backgroundColor:'lightgrey'
    }}>
      <Text>hewwo</Text>
      <TouchableOpacity onPress={()=>router.push('/home')}>
        <Text>view tours</Text>
      </TouchableOpacity>
    </View>
  )
}