import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import routes from 'routes'
import store from 'store'

window.APP = {}

ReactDOM.render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
)
