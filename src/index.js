import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.sass'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root')
  const data = require('./index.json')
  render(<App data={data} />, node)
})
