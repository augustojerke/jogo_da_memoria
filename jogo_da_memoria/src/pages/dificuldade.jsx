import { View, StatusBar, Text, TouchableOpacity } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dificuldade({navigation}){

    async function iniciarJogo(dificuldade){
        await AsyncStorage.setItem("dificuldade", dificuldade);
        navigation.navigate("Jogo");
    }

    return(
        <View className="flex-1 bg-green-900">
            <View className="p-10 mt-8">
                <Text className="text-white font-bold text-2xl">Selecione uma Dificuldade:</Text>
                <TouchableOpacity onPress={() => iniciarJogo("Fácil")} className="items-center justify-center bg-blue-600 mt-12 rounded-lg h-12 border-white">
                  <Text className="text-xl text-white font-bold">
                     Fácil
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => iniciarJogo("Médio")} className="items-center justify-center bg-blue-600 mt-12 rounded-lg h-12 border-white">
                  <Text className="text-xl text-white font-bold">
                     Médio
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => iniciarJogo("Difícil")} className="items-center justify-center bg-blue-600 mt-12 rounded-lg h-12 border-white">
                  <Text className="text-xl text-white font-bold">
                     Difícil
                  </Text>
               </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    )
}