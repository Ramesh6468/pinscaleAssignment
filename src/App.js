import {Route, Switch} from 'react-router-dom'
import Login from './components/LoginForm'

import './App.css'

const App = () => (
  <Switch>
    <Route component={Login} />
  </Switch>
)

export default App
