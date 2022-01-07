# 微前端实战

```bash
container -- stencil webComponent
dashboard -- vue3
marketing -- vue2
auth -- react
```

react 被打包进入各自编译后的代码，所以被加载两次。

```js
shared: ['react', 'react-dom']
// 不指定版本，可能会报错
// shared: { react: '^17.0.2', 'react-dom': '^17.0.2' },
```

设置共享模块后，加载的文件大大减小，文件变得。

> p43 --- p66 CICD 可不看。

### 如何避免样式冲突

常见的样式作用域解决方案

1. 自定义 css

① css in js：会重新编译选择器。不同的项目使用相同的 css in js 库，生产环境下可能导致样式冲突。

原因：生产环境下，css in js 生成的类名短小，导致不同微前端应用之间类名相同，规则不同，导致冲突。

② vue 内置的 scoped 样式：给标签添加自定义属性

③ Angular 内置的样式：如何做的呢？

其他：给 css 添加 namespace: 设置特殊的选择器

2. css 库

component 的样式。

css 样式库，自行构建。

3. 相同的样式库不同的版本导致样式规则不同

① 类名相同规则不同导致样式不一致；

② 规则相同，类名不同导致样式失效。

解决办法：不同样式库不共享。

## 不同的微前端之间如何导航

p74
