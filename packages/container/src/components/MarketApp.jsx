import React, { useRef, useEffect } from 'react'
import { mount } from 'marketApp/Index'
// NOTE 为何导出挂载函数而不是组件？
// 因为函数更加灵活：
// 1. 可以接受任意参数
// 2. 技术独立，可以在任何地方使用，导出 react 组件，只能在 react 项目中使用
import { useHistory } from 'react-router-dom'

export function MarketApp() {
  const marketAppContainer = useRef(null)
  const parentHistory = useHistory()
  useEffect(() => {
    const { onParentNavigate } = mount(marketAppContainer.current, {
      onChildNavigate(childLocation) {
        console.log('child navigate')
        const { pathname } = parentHistory.location
        const { pathname: nextPathname } = childLocation
        pathname !== nextPathname && parentHistory.push(nextPathname)
      },
      currentPathParent: parentHistory.location.pathname,
    })
    parentHistory.listen(onParentNavigate)
  }, [])
  return <div ref={marketAppContainer}></div>
}
