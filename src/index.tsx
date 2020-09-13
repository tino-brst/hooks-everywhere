import React from 'react'
import ReactDom from 'react-dom'
import './styles.css'

import { AppProviders } from './AppProviders'
import { App } from './App'

ReactDom.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
)
