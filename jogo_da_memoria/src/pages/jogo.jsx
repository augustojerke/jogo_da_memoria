import { Text, StatusBar, View, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from "react-native-web";
import TextoInicial from "../components/textoInicial";
import Cronometro from "../components/cronometro";
import { Ionicons } from '@expo/vector-icons';

export default function Jogo(){

    const [dif, setDif] = useState(null);
    const [midViewVisibility, setMidViewVisibility] = useState(true);
    const [midGameViewVisibility, setMidGameViewVisibility] = useState(false);
    const [botViewVisibility, setBotViewVisibility] = useState(true);
    const [botGameViewVisibility, setBotGameViewVisibility] = useState(false);
    const [iniciarCronometro, setIniciarCronometro] = useState(false);
    const [numeroDeElementos, setNumeroDeElementos] = useState([]);

    useEffect(() => {
        async function getDif(){
            const _dif = await AsyncStorage.getItem('dificuldade');
            if(_dif != null){                
                setDif(_dif);
            }            
        }
        getDif();        
    },[])

    function retornarElementosPorDificuldade(){
        switch(dif){
            case "Fácil": return 16;
            case "Médio": return 20;
            case "Difícil": return 24;
            default: return 16;
        }
    }

    function startGame(){
        setMidViewVisibility(false);
        setBotViewVisibility(false);
        setMidGameViewVisibility(true);
        setBotGameViewVisibility(true);
        setIniciarCronometro(true);
        const num = retornarElementosPorDificuldade();
        setNumeroDeElementos(Array.from({ length: num }, (_, index) => index));
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
        <View className="flex-1 bg-green-900">
            <View className="flex-none flex-row h-14 bg-green-900 p-2 justify-evenly items-center border-b-2">
                <Text className="text-white font-bold text-xl">Dificuldade: {dif}</Text>
                <Text className="text-white font-bold text-xl">Acertos: 0/0</Text>
            </View>
            <View className="flex-1 justify-center bg-green-800 p-5 border-b-2">
                {midViewVisibility  &&  <TextoInicial/>}
                {midGameViewVisibility &&
                    <View className="justify-center items-center flex-row flex-wrap gap-4">
                        {numeroDeElementos.map((item, i) => (
                            <View 
                            key={i} 
                            className="flex justify-center items-center bg-slate-600 h-24 w-20 border-solid border-2 border-black rounded-xl shadow-xl shadow-green-500 overflow-hidden">
                               {/* <Ionicons name="person" size={55} color="grey" /> */}
                               <Image source={require("../../assets/messi.webp")} className="w-full h-full rounded"/>
                           </View>
                        ))}
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
                {botGameViewVisibility &&
                    <Cronometro iniciar={iniciarCronometro}/>
                }                      
            </View>
        <StatusBar style="light"/>
        </View>
        </SafeAreaView>
    )
}