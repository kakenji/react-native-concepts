import { createDrawerNavigation } from "react"
import { NavigationContainer } from "react-native"

const Drawer = createDrawerNavigation();

import TelaHome from "./src/pages/TelaHome";

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navi
    </NavigationContainer>
  )
}