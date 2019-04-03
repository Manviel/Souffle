import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./components/Home";
import Profile from "./components/Profile";

const Main = createStackNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  }
});

const App = createAppContainer(Main);

export default App;
