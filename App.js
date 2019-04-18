import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Main = createStackNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
});

const App = createAppContainer(Main);

export default App;
