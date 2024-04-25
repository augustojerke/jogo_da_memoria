import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function Home(){
   return(
      <View className="flex-1 items-center justify-center bg-green-950">
         <View>
         </View>
         <StatusBar style="auto" />
      </View>
   )
}