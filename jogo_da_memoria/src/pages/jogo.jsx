import { Text, StatusBar, View } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

export default function Jogo(){

    const [dif, setDif] = useState(null);

    useEffect(() => {
        async function getDif(){
            const dif = await AsyncStorage.getItem('dificuldade');
            console.log(dif)
            if(dif != null){
                setDif(dif);
            }
        }
        getDif();        
    },[])

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
        <View className="flex-1 bg-green-900">
            <View className="flex-none h-14 bg-green-900">
                <Text>Dificuldade: {dif}</Text>
            </View>
            <View className="flex-1 bg-green-800">
                    
            </View>
            <View className="flex-none h-14 bg-green-900">
                    
            </View>
        <StatusBar style="light"/>
        </View>
        </SafeAreaView>
    )
}