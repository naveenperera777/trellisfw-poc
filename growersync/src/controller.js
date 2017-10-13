import {Controller} from 'cerebral'
import App from './modules/App'
import TopBar from './modules/TopBar'
import Connections from './modules/Connections'
import UserProfile from './modules/UserProfile'
import Certifications from './modules/Certifications'

import {devtoolsPort} from './config';

const Devtools = (
  process.env.NODE_ENV === 'production' ? null : require('cerebral/devtools').default
)
var devPort = devtoolsPort;
if (process.env.NODE_ENV !== 'production') {
  devPort = (devtoolsPort+parseInt(window.location.port, 10)-3000);
  console.log('Cerebral DevTools running on port:', devPort)
}
export default Controller({
  devtools: Devtools && Devtools({
    host: 'localhost:'+devPort
  }),
  modules: {
    App,
    TopBar,
    Connections,
    Certifications,
    UserProfile
  }
})
