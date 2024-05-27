import { View, Text, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}){

   const [nome, setNome] = useState("");

   async function iniciarJogo(){
      await AsyncStorage.setItem("nomeJogador", nome == "" ? "Anônimo" : nome);
      navigation.navigate("Dificuldade")
   }

   return(
      <KeyboardAvoidingView className="flex-1 bg-green-900" behavior="padding" enabled>
      <View className="flex-1 bg-green-900">
         <View style={{flex: 1}} className="flex items-center justify-center gap-12">
            <Image source={require("../../assets/logo.png")} style={{width: 300, height: 290}}/>
            <View className="w-full px-14">
            <TextInput className="bg-slate-50 px-3 rounded-lg h-12 text-xl" placeholder="Nome do Jogador" onChangeText={(e) => setNome(e)}/>
               <TouchableOpacity onPress={iniciarJogo} className="items-center justify-center bg-green-600 mt-6 rounded-lg h-12 border-white">
                  <Text className="text-xl text-white font-bold">
                     Iniciar Jogo
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate("Ranking")} className="items-center justify-center bg-blue-500 mt-6 rounded-lg h-12">
                  <Text className="text-xl text-white font-bold">
                     Ranking
                  </Text>
               </TouchableOpacity>
            </View>            
         </View>         
         <StatusBar style="light" />
      </View>
      </KeyboardAvoidingView>
   )
}