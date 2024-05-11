import { View } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export default function Carta({index}){
    return(
        <View 
         key={index} 
         className="flex justify-center items-center bg-slate-600 h-20 w-20 border-solid border-2 border-black rounded-xl shadow-xl shadow-green-500">
            <Ionicons name="person" size={55} color="grey" />
        </View>
    )
}