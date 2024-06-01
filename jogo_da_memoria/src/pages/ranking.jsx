import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import api from '../api/apis.js';

export default function Ranking({navigation}) {

    const test = () => {
        api.get("ranking")
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    } 

    return(
        <View className="flex-1 bg-green-900">
            <View className="py-16">
                <View className="flex-row items-center justify-around">
                    <TouchableOpacity className="bg-blue-600 w-28 rounded">
                        <Text className="text-white font-bold text-xl text-center">
                            Fácil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-blue-600 w-28 rounded">
                        <Text className="text-white font-bold text-xl text-center">
                            Médio
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-blue-600 w-28 rounded">
                        <Text className="text-white font-bold text-xl text-center">
                            Díficil
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="light" />
        </View>
    )
}
