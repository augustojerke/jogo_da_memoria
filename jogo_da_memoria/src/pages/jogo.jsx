import { Text, StatusBar, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from "react-native-web";

export default function Jogo(){

    const [dif, setDif] = useState(null);
    const [midViewVisibility, setMidViewVisibility] = useState(true);
    const [midGameViewVisibility, setMidGameViewVisibility] = useState(false);
    const [botViewVisibility, setBotViewVisibility] = useState(true);

    useEffect(() => {
        async function getDif(){
            const dif = await AsyncStorage.getItem('dificuldade');
            if(dif != null){
                setDif(dif);
            }
        }
        getDif();        
    },[])

    function startGame(){
        setMidViewVisibility(false);
        setBotViewVisibility(false);
        setMidGameViewVisibility(true);
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
        <View className="flex-1 bg-green-900">
            <View className="flex-none flex-row h-14 bg-green-900 p-2 justify-evenly items-center">
                <Text className="text-white font-bold text-xl">Dificuldade: {dif}</Text>
                <Text className="text-white font-bold text-xl">Acertos: 0/0</Text>
            </View>
            <View className="flex-1 justify-center bg-green-800">
                {midViewVisibility &&
                    <View className="flex items-center">
                        <Text className="text-slate-200 font-bold text-xl">Jogo da Memória</Text>
                        <Text className="text-slate-200 font-bold text-xl">Encontre todos os pares de jogadores</Text>
                        <Text className="text-slate-200 font-bold text-xl">Boa Sorte!</Text> 
                    </View>
                }
                {midGameViewVisibility &&
                    <View className="flex flex-wrap flex-row gap-4">
                        <View className="flex-1 h-16 bg-slate-500"></View>
                        <View className="flex-1 h-16 bg-slate-500"></View>
                        <View className="flex-1 h-16 bg-slate-500"></View>
                        <View className="flex-1 h-16 bg-slate-500"></View>                        
                    </View>
                }                        
            </View>
            <View className="flex-none h-14 bg-green-900 justify-center items-center">
                {botViewVisibility &&
                    <TouchableOpacity
                     onPress={() => startGame()}  
                     className="bg-green-400 rounded flex items-center justify-center w-72 flex-row">
                       <AntDesign name="caretright" size={20} color="black"/>
                       <Text className="ml-3 text-xl text-black font-bold text-center">                        
                           Iniciar Jogo
                       </Text>
                    </TouchableOpacity> 
                }                      
            </View>
        <StatusBar style="light"/>
        </View>
        </SafeAreaView>
    )
}