import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import Dificuldade from './src/pages/dificuldade';
import Jogo from './src/pages/jogo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Dificuldade" component={Dificuldade} options={{ headerShown: false }} />
          <Stack.Screen name="Jogo" component={Jogo} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>    
  );
}

