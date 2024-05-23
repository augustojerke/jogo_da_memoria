import { useEffect, useState } from "react"
import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Cronometro({iniciar, setTempo, pausar, pausarJogo}){

    useEffect(() => {
        if(iniciar){
            iniciarTimer();
        }
        if(pausar && pausarJogo){
            pararTimer();
        }
        if(pausar){
            pararTimer();
            limpar();
        }
    }, [iniciar, pausar])

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
        let min = minutos < 10 ? "0" + minutos : minutos;
        let seg = segundos < 10 ? "0" + segundos : segundos;
        setTempo(min + ":" + seg); 
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