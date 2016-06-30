import { Route, IndexRoute, hashHistory } from 'react-router'
import Base from 'containers'
import Home from 'containers/home'

export default (
  <Route path="/" component={Base}>
    <IndexRoute component={Home}/>
  </Route>
)
