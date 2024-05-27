import { View, StatusBar, Text } from 'react-native';

export default function Ranking({navigation}) {
    return(
        <View className="flex-1 bg-green-900">
            <View className="p-16">
                <Text className="text-white text-2xl text-center font-bold">Ranking</Text>
            </View>
            <StatusBar style="light" />
        </View>
    )
}
