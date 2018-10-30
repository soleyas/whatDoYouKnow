import { createStackNavigator } from "react-navigation";
import Welcome from "../components/Welcome";

const App = createStackNavigator({
  Welcome: { screen: Welcome }
});

export default App;
