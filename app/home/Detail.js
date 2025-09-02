import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const details = {
    wel:{
        desc:"this is wellington"
    },
    chr:{
        desc:"this is crychurch"
    },
    ack:{
        desc:"this is auckland"
    },
}

export default function Detail() {
    const params = useLocalSearchParams();
    const tours = params.tour
    const detail= details[tours]
  return (
    <View>
      <Text>{tours}</Text>
      <Text>{detail.desc}</Text>
    </View>
  )
}