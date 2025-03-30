import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  persistorReducer, store} from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistorReducer} loading={null}>
    <App />
    </PersistGate>
  </Provider>,
)
