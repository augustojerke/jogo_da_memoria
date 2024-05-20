import { View, Text } from "react-native";

export default function FimDeJogo({tempo}){
    return(
        <View>
            <View className="flex justify-center items-center">
                <Text className="text-white text-2xl font-bold">Parabéns!</Text>
                <Text className="text-white text-xl font-bold">Você Concluiu o Jogo da Memória!</Text>
                <Text className="text-white text-xl font-bold">Seu Tempo: {tempo}</Text>
            </View>            
        </View>
    )
}