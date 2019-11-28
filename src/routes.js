import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Repository from './pages/Repository';

const Routes = createAppContainer(createStackNavigator({ Main, Repository }));

export default Routes;
