import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import React from "react";

export default function Home(){
   return(
      <View className="flex-1 bg-green-900">
         <View style={{flex: 0.5}} className="flex items-center justify-center gap-2">
            <Image source={require("../../assets/logo.png")} style={{width: 300, height: 300, resizeMode: 'contain'}}/>
            <Text className=" text-xl text-white font-bold">Jogo da Memória Temático de Futebol</Text>            
         </View>
         <View style={{flex: 0.5}}> 
         </View>
         <StatusBar style="auto" />
      </View>
   )
}