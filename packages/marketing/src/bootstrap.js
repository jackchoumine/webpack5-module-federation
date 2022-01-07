/*
 * @Description :
 * @Date        : 2021-12-25 23:44:04 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-01-08 00:16:14 +0800
 * @LastEditors : JackChou
 */
import ReactDOM from 'react-dom'
import { App } from './App'
import { createMemoryHistory, createBrowserHistory } from 'history'

function mount(el, options) {
  console.log('child mount')
  const { currentPathParent } = options
  const history = options.defaultHistory || createMemoryHistory()
  const { pathname: currentPathChild } = history.location
  // NOTE 浏览器刷新，应用会重新挂载，此时要保持路径和当前路径一致
  if (currentPathParent && currentPathChild && currentPathParent !== currentPathChild) {
    console.log('child history.push', currentPathParent)
    history.push(currentPathParent)
  }

  options?.onChildNavigate && history.listen(options.onChildNavigate)

  ReactDOM.render(<App history={history} />, el)

  return {
    onParentNavigate(parentLocation) {
      console.log('parent navigate from marketApp')
      const { pathname } = history.location
      const { pathname: nextPathname } = parentLocation
      nextPathname && pathname !== nextPathname && history.push(nextPathname)
    },
  }
}

// 开发环境和独立运行环境
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('market-app')
  const history = createBrowserHistory()
  el && mount(el, { defaultHistory: history })
}
// 和父应用通信
export { mount }
