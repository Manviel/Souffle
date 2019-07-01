import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

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
