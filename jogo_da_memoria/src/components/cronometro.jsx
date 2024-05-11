import { useEffect, useState } from "react"
import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Cronometro({iniciar}){

    useEffect(() => {
        if(iniciar){
            iniciarTimer();
        }
    }, [iniciar])

    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [intervalo, setIntervalo] = useState();

    const iniciarTimer = () => {
        setIntervalo(
            setInterval(() => {
                mudarTempo();
            }, 1000)
        );
    }

    const pararTimer = () => {
        if(intervalo){
            clearInterval(intervalo);
        }
    }

    const limpar = () => {
        pararTimer();
        setSegundos(0);
        setMinutos(0);
    }

    const mudarTempo = () => {
        setSegundos((prev) => {
            if(prev + 1 == 60){
                setMinutos(minutos + 1);
                return 0;
            }
            return prev + 1;
        })
    }

    return(
        <View className="flex-1 justify-center items-center flex-row gap-2">
            <MaterialIcons name="timer" size={24} color="white" />
            <Text className="text-white font-bold text-xl">
                {minutos < 10 ? "0" + minutos : minutos}:
                {segundos < 10 ? "0" + segundos : segundos}
            </Text>
        </View>
    )
}