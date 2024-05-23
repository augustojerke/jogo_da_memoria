import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function FimDeJogo({tempo, navigation, reiniciar}){
    return(
        <View>
            <View className="flex justify-center items-center">
                <Text className="text-white text-3xl font-bold">Parabéns!</Text>
                <Text className="text-white text-xl font-bold">Você Concluiu o Jogo da Memória!</Text>
                <Text className="text-white text-2xl font-bold mt-5">Seu Tempo: {tempo}</Text>
                <View className="flex justify-center items-center">
                    <TouchableOpacity onPress={reiniciar} className="flex-row items-center justify-center bg-orange-600 mt-6 rounded-lg h-12 w-56">
                        <AntDesign name="reload1" size={24} color="white" />
                        <Text className="text-xl text-white font-bold ml-3">                        
                            Reiniciar Jogo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Dificuldade")} className="flex-row items-center justify-center bg-blue-600 mt-10 rounded-lg h-12 w-56">
                        <Entypo name="back" size={24} color="white" />
                        <Text className="text-xl text-white font-bold ml-3">                        
                            Trocar Dificuldade
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>            
        </View>
    )
}