# rc-mobile
轻松构建属于自己内部团队的组件库，配套文档和案例生成器。

## 命令说明
|`npm run <script>`|说明|
|------------------|---|
|doc|开启文档开发服务|
|start|更好的开发体验，于example内，快捷开发及测试组件|
|build:es|打包模块组件|
|build:lib|打包整个组件|
|deploy|最终生产构建，打包es与build|
|bundle|依赖分析工具|
|build:demo|构建example的案例内容至demo文件夹|
|build:doc|构建最终的文档至site文件夹|

## 开发指南

### 创建组件
创建新页面:
```bash
# 首字母大写命名的组件名
# 如 `digo create Button` & `digo create ListItem`
digo create <ComponentName>
```

> 会在 `components/` 下新增一个组件模版

### 开发的一般流程
1. 生成一个组件模版：`digo create <ComponentName>`
2. 通过`example/index.jsx`引用测试开发该组件的 `Example.tsx`
3. `npm run start` 开启开发服务，进行开发测试。
4. 测试完毕后,开启`npm run doc` 文档服务，编写`components/<ComponentName>/<ComponentName>.md`文档。
5. 所有测试通过后，验收发布。


## 文档开发指南

### md引用资源
所有`.md`文件内的代码段如需引用外部资源，可通过`/xx`来访问`styleguide`文件夹下的文件

### 编写文档
- [如何编写文档](https://react-styleguidist.js.org/docs/documenting.html#public-methods)

## 注意事项

### 样式篇
- 编写样式时，切忌修改全局性的 `dom` 样式，避免他人引用组件而影响他自身的样式。
- 尽量都通过`class`赋值的形式修改样式。
- 所有组件的`class`都以`x-<class>`命名