import { createAppContainer } from "react-navigation";

import TabNavigator from './tab'
import DrawerNavigator from './drawer'
import AuthNavigator from "./auth";

export default createAppContainer(AuthNavigator);
