import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screen/HomeScreen"
import ZakatCalculator from './Screen/ZakatCalculator';
import QuranChapters from "./Screen/QuranChapters";
import ChapterId from "./Screen/ChapterId";
import TasbihScreen from "./Screen/Tasbih";
import Donation from "./Screen/DonationMain";

const Stack=createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator> 
         <Stack.Screen name="Home" component={HomeScreen} /> 
         <Stack.Screen name="ZakatCalculator" component={ZakatCalculator}/>
         <Stack.Screen name="Donation" component={Donation}/>
         <Stack.Screen name="QuranChapters" component={QuranChapters}/>
         <Stack.Screen name="ChapterId" component={ChapterId}/>
         <Stack.Screen name="TasbihScreen" component={TasbihScreen}/>
      </Stack.Navigator>       
    </NavigationContainer>   
  );
}

