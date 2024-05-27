import { Text, StatusBar, View, TouchableOpacity, Image, Pressable, Touchable } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import TextoInicial from "../components/textoInicial";
import Cronometro from "../components/cronometro";
import { Ionicons } from '@expo/vector-icons';
import { aleatorizarJogadores } from "../functions/functions.jsx"
import FimDeJogo from "../components/fimDeJogo.jsx";
import { FontAwesome } from '@expo/vector-icons';

export default function Jogo({navigation}){

    const [dif, setDif] = useState(null);
    const [midViewVisibility, setMidViewVisibility] = useState(true);
    const [midGameViewVisibility, setMidGameViewVisibility] = useState(false);
    const [botViewVisibility, setBotViewVisibility] = useState(true);
    const [botGameViewVisibility, setBotGameViewVisibility] = useState(false);
    const [midFinalViewVisibility, setMidFinalViewVisibility] = useState(false);
    const [iniciarCronometro, setIniciarCronometro] = useState(false);
    const [pausarCronometro, setPausarCronometro] = useState(false);
    const [pausarGame, setPausarGame] = useState(false);
    const [cartasViradas, setCartasViradas] = useState([]);
    const [jogadores, setJogadores] = useState([]);
    const [primeiraCartaVirada, setPrimeiraCartaVirada] = useState({ nome: "", indexCarta: "" });
    const [cartasConcluidas, setCartasConluidas] = useState([]);
    const [acertosTotais, setAcertosTotais] = useState(0);
    const [acertosReais, setAcertosReais] = useState(0);
    const [segundaCartaVirada, setSegundaCartaVirada] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [executandoTimeout, setExecutandoTimeout] = useState(false);
    const [valorRealCronometro, setValorRealCronometro] = useState("");

    useEffect(() => {
        async function getDif(){
            const _dif = await AsyncStorage.getItem('dificuldade');
            if(_dif != null){                
                setDif(_dif);
            }            
        }
        getDif();        
    },[])

    function terminarJogo(){
        setMidGameViewVisibility(false);
        setMidFinalViewVisibility(true);
        setIniciarCronometro(false);
        setPausarCronometro(true);      
    }

    function reiniciarJogo(){
        setMidGameViewVisibility(true);
        zerarJogo();
        setMidFinalViewVisibility(false);
        startGame();
    }

    function zerarJogo(){
        setPrimeiraCartaVirada({
            nome: "",
            indexCarta: ""
        })
        setSegundaCartaVirada(false);
        setCartasConluidas([]);
        setAcertosReais(0);
        setJogadores([]);
        setCartasViradas([]);
        setIniciarCronometro(true);
        setPausarCronometro(false);
    }

    function calcularTotalAcertos(){
        setAcertosTotais(retornarElementosPorDificuldade()/2)
    }

    function adicionarAcerto() {
        setAcertosReais((prev) => {
            return prev + 1;
        })

        if(acertosReais + 1 == acertosTotais){
            terminarJogo();
        }
    }

    function isCartaVirada(carta){        
        if(primeiraCartaVirada.indexCarta === carta) {
            return "border-4 border-sky-400";
        }
        else if (cartasConcluidas.includes(carta)){
            return "border-4 border-emerald-400"
        }
        else{
            return ""
        }
    }

    function retornarElementosPorDificuldade(){
        switch(dif){
            case "Fácil": return 16;
            case "Médio": return 20;
            case "Difícil": return 24;
            default: return 16;
        }
    }

    function inicializarCartasViradas(num){
        const array = []
        for(let i = 0; i<num; i++){
            array.push(false);            
        }
        setCartasViradas(array);
    }

    function concluirPar(carta) {
        mudarEstadoDaCarta(carta);            
        setCartasConluidas((prev) => [...prev, carta]);
        setCartasConluidas((prev) => [...prev, primeiraCartaVirada.indexCarta]);
    }

    function virarCartasAoErrar(numeroDeCartas) {
        let novoArrayCartasViradas = [];
        for(let i = 0; i<numeroDeCartas; i++) {
            if(cartasConcluidas.includes(i)) {
                novoArrayCartasViradas.push(true);
            }
            else {
                novoArrayCartasViradas.push(false);
            }
        }       
        setCartasViradas(novoArrayCartasViradas);
    }

    async function virarCarta(carta, idJogador) {

        if(pausarGame){
            return;
        }

        if (executandoTimeout) {
            return;
        }

        if(primeiraCartaVirada.nome !== "" && segundaCartaVirada) {
            console.log("jogo parado")
            return;
        }

        if(cartasConcluidas.includes(carta)) {
            return;
        }

        if(primeiraCartaVirada.nome === "") {
            mudarEstadoDaCarta(carta);
            setPrimeiraCartaVirada({
                nome: idJogador,
                indexCarta: carta
            });
        }
        else {
            setSegundaCartaVirada(true);
            
            if(idJogador === primeiraCartaVirada.nome && carta != primeiraCartaVirada.indexCarta) {
                concluirPar(carta);
                adicionarAcerto();
            }
            else { 
                mudarEstadoDaCarta(carta);
                const numeroDeCartas = retornarElementosPorDificuldade();
                setExecutandoTimeout(true);

                const id = setTimeout(() => {
                    virarCartasAoErrar(numeroDeCartas);
                    setExecutandoTimeout(false);
                }, 550);
                setTimeoutId(id);                                               
            }

            setPrimeiraCartaVirada({ 
                nome: "",
                indexCarta: ""
            });

            setSegundaCartaVirada(false);
        }        
    }

    function mudarEstadoDaCarta(carta){
        const array = [...cartasViradas]
        array[carta] = array[carta] ? false : true
        setCartasViradas(array);
    }

    function startGame(){
        setMidViewVisibility(false);
        setBotViewVisibility(false);
        setMidGameViewVisibility(true);
        setBotGameViewVisibility(true);
        setIniciarCronometro(true);
        const num = retornarElementosPorDificuldade();
        inicializarCartasViradas(num);
        const arrayJogadoresAleatorios = aleatorizarJogadores(num);
        setJogadores(arrayJogadoresAleatorios);
        calcularTotalAcertos();
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
        <View className="flex-1 bg-green-900">
            <View className="flex-none flex-row h-14 bg-green-900 p-2 justify-evenly items-center border-b-2">
                <Text className="text-white font-bold text-xl">Dificuldade: {dif}</Text>
                <Text className="text-white font-bold text-xl">Acertos: {acertosReais}/{acertosTotais}</Text>            
            </View>
            <View className="flex-1 justify-center bg-green-800 p-5 border-b-2 pt-8">
                {midViewVisibility  &&  <><TextoInicial/></>}
                {midGameViewVisibility &&
                    <View className="justify-center items-center flex-row flex-wrap gap-4">
                        {jogadores.map((item, i) => (
                            <TouchableOpacity key={i} onPress={() => virarCarta(i, item.id)}>                             
                                <View                                                              
                                className={`flex justify-center items-center bg-slate-600 h-24 w-20 ${isCartaVirada(i)} rounded-xl shadow-xl shadow-green-500 overflow-hidden`}>
                                    {                                        
                                        cartasViradas[i] ? (item.foto) : (<Ionicons name="person" size={55} color="grey" />)                                        
                                    }                                                              
                                </View>
                           </TouchableOpacity>
                        ))}
                    </View>
                }
                {midFinalViewVisibility && <FimDeJogo navigation={navigation} tempo={valorRealCronometro} reiniciar={reiniciarJogo}/>}                        
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
                    <Cronometro 
                        iniciar={iniciarCronometro} 
                        setTempo={setValorRealCronometro} 
                    />
                }                                                         
            </View>
        <StatusBar style="light"/>
        </View>
        </SafeAreaView>
    )
}