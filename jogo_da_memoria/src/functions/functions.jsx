import React from 'react';
import { Image } from 'react-native';

export function aleatorizarJogadores(x) {
   const jogadores = ['benzema', 'brunoFernandes', 'cristianoRonaldo', 'diMaria', 'haaland',
   'harryKane', 'havertz', 'kroos', 'lewandowski', 'mbappe', 'messi', 'modric', 'neymar', 'neuer',
   'neymar', 'rafaelLeao', 'suarez', 'thomasMuller', 'vanDijk'
   ];

   const jogadoresRepetidos = [];
   for (const jogador of jogadores) {
       for (let i = 0; i < 2; i++) {
           jogadoresRepetidos.push(jogador);
       }
   }

   for (let i = jogadoresRepetidos.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [jogadoresRepetidos[i], jogadoresRepetidos[j]] = [jogadoresRepetidos[j], jogadoresRepetidos[i]];
   }

    for(let i = 0; i<jogadoresRepetidos.length; i++){
        switch(jogadoresRepetidos[i]) {
            case 'benzema':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/benzema.webp")} className="w-full h-full rounded" />; break;
            case 'brunoFernandes':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/brunoFernandes.webp")} className="w-full h-full rounded" />; break;
            case 'cristianoRonaldo':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/cristianoRonaldo.webp")} className="w-full h-full rounded" />; break;
            case 'diMaria':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/diMaria.webp")} className="w-full h-full rounded" />; break;
            case 'haaland':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/haaland.webp")} className="w-full h-full rounded" />; break;
            case 'harryKane':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/harryKane.webp")} className="w-full h-full rounded" />; break;
            case 'havertz':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/havertz.webp")} className="w-full h-full rounded" />; break;
            case 'kroos':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/kroos.webp")} className="w-full h-full rounded" />; break;
            case 'lewandowski':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/lewandowski.webp")} className="w-full h-full rounded" />; break;
            case 'mbappe':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/mbappe.webp")} className="w-full h-full rounded" />; break;
            case 'messi':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/messi.webp")} className="w-full h-full rounded" />; break;
            case 'modric':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/modric.webp")} className="w-full h-full rounded" />; break;
            case 'neymar':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/neymar.webp")} className="w-full h-full rounded" />; break;
            case 'neuer':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/neuer.webp")} className="w-full h-full rounded" />; break;
            case 'rafaelLeao':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/rafaelLeao.webp")} className="w-full h-full rounded" />; break;
            case 'suarez':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/suarez.webp")} className="w-full h-full rounded" />; break;
            case 'thomasMuller':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/thomasMuller.webp")} className="w-full h-full rounded" />; break;
            case 'vanDijk':
                jogadoresRepetidos[i] = <Image key={i} source={require("../../assets/vanDijk.webp")} className="w-full h-full rounded" />; break;
            default:
                jogadoresRepetidos[i] = null;
        }
    }

   return jogadoresRepetidos;
}
