/*
 * @Description :
 * @Date        : 2021-12-26 00:14:44 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-12-26 00:46:10 +0800
 * @LastEditors : JackChou
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

function mount(el) {
  ReactDOM.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('container')
  el && mount(el)
}

export { mount }
