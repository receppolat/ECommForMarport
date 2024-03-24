/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Router} from './src';

import i18n from './src/translation/i18n';
i18n;

AppRegistry.registerComponent(appName, () => Router);
