import React from 'react';
import { Image } from 'react-native';

export function aleatorizarJogadores(num) {
   const jogadores = [
       'benzema', 'brunoFernandes', 'cristianoRonaldo', 'diMaria', 'haaland',
       'harryKane', 'havertz', 'kroos', 'lewandowski', 'mbappe', 'messi', 'modric',
       'neuer', 'neymar', 'rafaelLeao', 'suarez', 'thomasMuller', 'vanDijk'
   ];

   const numJogadores = Math.floor(num / 2);
   const jogadoresEscolhidos = [];
   const copiaJogadores = [...jogadores];
   for (let i = 0; i < numJogadores; i++) {
       const indiceAleatorio = Math.floor(Math.random() * copiaJogadores.length);
       const jogadorEscolhido = copiaJogadores.splice(indiceAleatorio, 1)[0];
       jogadoresEscolhidos.push(jogadorEscolhido);
   }

   const jogadoresRepetidos = [];
   for (const jogador of jogadoresEscolhidos) {
       jogadoresRepetidos.push(jogador, jogador);
   }

   for (let i = jogadoresRepetidos.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [jogadoresRepetidos[i], jogadoresRepetidos[j]] = [jogadoresRepetidos[j], jogadoresRepetidos[i]];
   }

   const imagens = jogadoresRepetidos.map((jogador, index) => {
    switch(jogador) {
        case 'benzema':
            return {foto: <Image key={index} source={require("../../assets/benzema.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'brunoFernandes':
            return {foto: <Image key={index} source={require("../../assets/brunoFernandes.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'cristianoRonaldo':
            return {foto: <Image key={index} source={require("../../assets/cristianoRonaldo.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'diMaria':
            return {foto: <Image key={index} source={require("../../assets/diMaria.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'haaland':
            return {foto: <Image key={index} source={require("../../assets/haaland.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'harryKane':
            return {foto: <Image key={index} source={require("../../assets/harryKane.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'havertz':
            return {foto: <Image key={index} source={require("../../assets/havertz.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'kroos':
            return {foto: <Image key={index} source={require("../../assets/kroos.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'lewandowski':
            return {foto: <Image key={index} source={require("../../assets/lewandowski.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'mbappe':
            return {foto: <Image key={index} source={require("../../assets/mbappe.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'messi':
            return {foto: <Image key={index} source={require("../../assets/messi.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'modric':
            return {foto: <Image key={index} source={require("../../assets/modric.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'neuer':
            return {foto: <Image key={index} source={require("../../assets/neuer.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'neymar':
            return {foto: <Image key={index} source={require("../../assets/neymar.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'rafaelLeao':
            return {foto: <Image key={index} source={require("../../assets/rafaelLeao.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'suarez':
            return {foto: <Image key={index} source={require("../../assets/suarez.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'thomasMuller':
            return {foto: <Image key={index} source={require("../../assets/thomasMuller.webp")} className="w-full h-full rounded" />, id: jogador};
        case 'vanDijk':
            return {foto: <Image key={index} source={require("../../assets/vanDijk.webp")} className="w-full h-full rounded" />, id: jogador};
        default:
            return null;
        }
        });
    return imagens;
}
