// https://umijs.org/config/
import { defineConfig } from '@umijs/max';
import path from 'path';

import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  /**
   * @name 开启 多tab标签页支持
   * @doc https://juejin.cn/post/7153525746751766559
   */
  keepalive: [/./],
  tabsLayout: {
    // 是否使用自定义的 tabs 组件，需要搭配运行时配置 getCustomTabs 使用
    hasCustomTabs: true,
    // 是否开启右侧的 tabs 管理器，可以实现“关闭左侧”，“关闭右侧”，“关闭其他”和“刷新”等功能。
    hasDropdown: true,
    hasFixedHeader: false,
  },
  /**
   * @name 开启 hash 模式
   * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,

  /**
   * @name 兼容性设置
   * @description 设置 ie11 不一定完美兼容，需要检查自己使用的所有依赖
   * @doc https://umijs.org/docs/api/config#targets
   */
  // targets: {
  //   ie: 11,
  // },
  /**
   * @name 路由的配置，不在路由中引入的文件不会编译
   * @description 只支持 path，component，routes，redirect，wrappers，title 的配置
   * @doc https://umijs.org/docs/guides/routes
   */
  // umi routes: https://umijs.org/docs/routing
  routes,
  /**
   * @name 主题的配置
   * @description 虽然叫主题，但是其实只是 less 的变量设置
   * @doc antd的主题设置 https://ant.design/docs/react/customize-theme-cn
   * @doc umi 的theme 配置 https://umijs.org/docs/api/config#theme
   */
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    'root-entry-name': 'variable',
  },
  /**
   * @name moment 的国际化配置
   * @description 如果对国际化没有要求，打开之后能减少js的包大小
   * @doc https://umijs.org/docs/api/config#ignoremomentlocale
   */
  ignoreMomentLocale: true,
  /**
   * @name 代理配置
   * @description 可以让你的本地服务器代理到你的服务器上，这样你就可以访问服务器的数据了
   * @see 要注意以下 代理只能在本地开发时使用，build 之后就无法使用了。
   * @doc 代理介绍 https://umijs.org/docs/guides/proxy
   * @doc 代理配置 https://umijs.org/docs/api/config#proxy
   */
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  /**
   * @name 快速热更新配置
   * @description 一个不错的热更新组件，更新时可以保留 state
   */
  fastRefresh: true,
  // ============== 以下都是max的插件配置 ===============
  /**
   * @name 数据流插件
   * @@doc https://umijs.org/docs/max/data-flow
   */
  model: {},
  /**
   * 一个全局的初始数据流，可以用它在插件之间共享数据
   * @description 可以用来存放一些全局的数据，比如用户信息，或者一些全局的状态，全局初始状态在整个 Umi 项目的最开始创建。
   * @doc https://umijs.org/docs/max/data-flow#%E5%85%A8%E5%B1%80%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81
   */
  initialState: {},
  /**
   * @name layout 插件
   * @doc https://umijs.org/docs/max/layout-menu
   */
  layout: {
    locale: true,
    ...defaultSettings,
  },
  /**
   * @name moment2dayjs 插件
   * @description 将项目中的 moment 替换为 dayjs
   * @doc https://umijs.org/docs/max/moment2dayjs
   */
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  /**
   * @name 国际化插件
   * @doc https://umijs.org/docs/max/i18n
   */
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  /**
   * @name antd 插件
   * @description 内置了 babel import 插件
   * @doc https://umijs.org/docs/max/antd
   */
  antd: {
    configProvider: {},
    // antd <App /> valid for version 5.1.0 or higher, default: undefined
    appConfig: {},
  },
  /**
   * @name 网络请求配置
   * @description 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
   * @doc https://umijs.org/docs/max/request
   */
  request: {
    dataField: 'data',
  },
  /**
   * @name 权限插件
   * @description 基于 initialState 的权限插件，必须先打开 initialState
   * @doc https://umijs.org/docs/max/access
   */
  access: {},
  // ================ pro 插件配置 =================
  presets: ['umi-presets-pro'],
  mfsu: {
    strategy: 'normal',
  },
  requestRecord: {},
  /**
  * @name <head> 中额外的 script
  * @description 配置 <head> 中额外的 script
  */
  headScripts: [
    // 解决首次加载时白屏的问题
    { src: '/scripts/loading.js', async: true },
    // Umimai 统计
    { src: 'https://umami.baiwumm.com/script.js', 'data-website-id': '7e15460c-1124-4f43-9d26-33ecc1e9bd94' },
  ],
  // 站点统计
  analytics: {
    ga_v2: 'G-1LVFWQ9FZ7', // google analytics 的 key (GA 4)
    baidu: '8be1d11f8b2db2727b2b063e9158161d',
  },
  // TDK
  title: 'React Admin',
  metas: [
    { name: 'keywords', content: 'React.js,Umi.js,Antd,Nest.js,后台模板,后台系统' },
    { name: 'description', content: '基于 React + Nest 全栈开发的后台系统' },
    { name: 'google-site-verification', content: '4YBtBTmg5H9MGoyvCmvEeJx8viyBPjLnK4INCHT9SQs' },
  ],
  // 启后，可通过 Option+Click/Alt+Click 点击组件跳转至编辑器源码位置，Option+Right-click/Alt+Right-click 可以打开上下文，查看父组件。
  clickToComponent: {},
  // 检测未使用的文件和导出，仅在 build 阶段开启。
  deadCode: {},
  // 默认情况下，站点将使用约定 favicon 来创建图标的 meta 头标签。
  favicons: ['/favicon.ico'],
  // 配置 mock 功能。
  mock: false,
  // 修复 esbuild 压缩器自动引入的全局变量导致的命名冲突问题。
  esbuildMinifyIIFE: true,
  // 设置别名
  alias: {
    '@public': path.resolve(__dirname, '../public'),
  },
  // 自动安装图标库 https://icones.js.org/
  icons: {
    autoInstall: {},
    include: [
      'ri:apps-line',
      'ri:dashboard-2-line',
      'ri:puzzle-line',
      'ri:quill-pen-line',
      'ri:notification-line',
      'ri:exchange-2-line',
      'ri:contacts-book-3-line',
      'ri:shield-user-line',
      'ri:id-card-line',
      'ri:user-settings-line',
      'ri:code-box-line',
      'ri:reactjs-fill',
      'local:nest',
      'local:ant-design',
      'local:umi',
      'ri:settings-line',
      'ri:group-line',
      'ri:menu-fill',
      'ri:shield-user-line',
      'ri:global-line',
      'ri:draft-line',
      'local:hi',
      'ri:refresh-line',
      'ri:skip-right-line',
      'ri:skip-left-line',
      'ri:arrow-left-right-line',
      'ri:star-line',
      'ri:eye-line',
      'ri:git-fork-line',
      'ri:share-box-line',
      'ri:vuejs-fill',
      'local:gitee',
      'local:juejin',
      'local:sequelize',
      'local:mysql',
      'ri:thumb-up-line',
      'ri:message-2-line',
      'ri:flower-line',
      'ri:terminal-box-line',
      'ri:arrow-right-double-line',
      'ri:checkbox-circle-line',
      'ri:lock-unlock-line',
      'ri:lock-line',
      'ri:reset-left-fill',
      'fa6-solid:chart-gantt',
      'ri:image-line',
      'ri:image-add-line',
      'ri:palette-line',
      'ri:dropper-line',
      'ri:flow-chart',
      'simple-icons:swiper',
      'ri:file-excel-2-line',
      'ri:bar-chart-2-line',
      'ri:reset-left-line',
      'ri:delete-bin-line',
      'logos:chrome',
      'logos:firefox',
      'logos:safari',
      'logos:opera',
      'logos:microsoft-edge',
      'logos:webkit',
      'logos:android-icon',
      'logos:microsoft-windows-icon',
      'logos:apple',
      'logos:linux-tux',
      'logos:android-icon',
      'logos:apple',
      'logos:chrome',
    ],
  },
});
