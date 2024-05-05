import { Text, StatusBar, View, SafeAreaView } from "react-native"

export default function Jogo(){
    return(
        <SafeAreaView className="flex-1">
        <View className="flex-1 bg-green-900">
            <View className="flex-none h-16 bg-slate-600">
                    
            </View>
            <View className="flex-1 bg-slate-700">
                    
            </View>
            <View className="flex-none h-16 bg-slate-800">
                    
            </View>
        <StatusBar style="light" />
        </View>
        </SafeAreaView>
    )
}