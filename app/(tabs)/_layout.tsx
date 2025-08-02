import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function tabsLayout() {
  return (
    // This is the root layout for the app.
<Tabs.screenOptions={{TabBarActiveTintColor:"Orange"}}>

<Tabs.Screen name="index" options={{ title: "Home",
    
  tabBarIcon: ({color, focused}) =>{
    return focused?(<FontAwesome5 name="home" size={24} color="color" />

    ):(<Ionicons name="home-outline" size={24} color="black" />

       )

  };
}} />

  <Tabs.Screen name="login" options={{ title: "Login" }} />
</Tabs>
  );
}
