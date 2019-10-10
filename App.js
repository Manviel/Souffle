import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./pages/Home";
import Article from "./pages/Article";

const Main = createStackNavigator({
  Home: {
    screen: Home
  },
  Article: {
    screen: Article
  }
});

const App = createAppContainer(Main);

export default App;
