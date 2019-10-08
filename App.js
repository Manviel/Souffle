import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Article from "./pages/Article";

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
  },
  Article: {
    screen: Article
  }
});

const App = createAppContainer(Main);

export default App;
