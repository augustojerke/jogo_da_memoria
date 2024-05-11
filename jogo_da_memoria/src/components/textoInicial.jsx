import { View, Text } from "react-native"

export default function TextoInicial(){
    return(
        <View className="flex items-center">
            <Text className="text-slate-200 font-bold text-xl">Jogo da Memória</Text>
            <Text className="text-slate-200 font-bold text-xl">Encontre todos os pares de jogadores</Text>
            <Text className="text-slate-200 font-bold text-xl">Boa Sorte!</Text> 
        </View>
    )
}