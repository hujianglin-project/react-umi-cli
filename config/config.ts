/**
 * NOTE: 此文件原则上只放标准配置中简单的配置，复杂的标准配置需要引入用用 merge 功能合并，个性化的配置用 config.local.ts 进行配置
 */

import { defineConfig } from 'umi';
import deepmerge from 'deepmerge';
import dartSass from 'dart-sass';
import routes from '../src/routes';

export default defineConfig(deepmerge.all([
  {
    /**
     * 别名。
     * - @，项目 src 目录
     * - @@，临时目录，通常是 src/.umi 目录
     * - umi，当前所运行的 umi 仓库目录
     * /
    // alias: {},

    /**
     * 包模块结构分析工具。
     * 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
     */
    // analyze: {},

    /**
     * 自动补充样式兼容前缀。
     * 参考 autoprefixer 的配置项：https://github.com/postcss/autoprefixer#options
     */
    // autoprefixer: { flexbox: 'no-2009' },

    /**
     * 设置路由前缀，通常用于部署到非根目录。
     */
    base: './',

    /**
     * 通过 webpack-chain 的 API 修改 webpack 配置。
     * 方法参数有
     * - memo，当前 webpack-chain对象
     * - env，当前环境，development、production 或 test 等
     * - webpack，webpack 实例，用于获取其内部插件
     * - createCSSRule，用于扩展其他 CSS 实现，比如 sass, stylus
     * - type，当前 webpack 实例类型，默认走 csr，如果开启 ssr，会有 ssr 的 webpack 实例
     * https://github.com/neutrinojs/webpack-chain
     *
     * TODO: AntdDayjsWebpackPlugin
     */
    // chainWebpack(memo, { env, webpack, createCSSRule, type }) {
    chainWebpack(memo: Record<string, any>) {
  
    },

    /**
     * 默认是 ['umi']，可修改，比如做了 vendors 依赖提取之后，会需要在 umi.js 之前加载 vendors.js。
     */
    // chunks: ['umi'],

    /**
     * 对按照 css modules 方式引入的 css 或 less 等样式文件，自动生成 ts 类型定义文件。
     * 相关说明见：https://github.com/seek-oss/css-modules-typescript-loader
     */
    // cssModulesTypescriptLoader: {
    //   mode: 'verify',
    // },

    /**
     * 设置 cssnano 配置项，基于 default 的配置集合。
     * 配置具体含义见：https://cssnano.co/optimisations/
     *
     * TODO: 研究 discardUnused 的风险后打开此开关
     */
    // cssnano: {
    //   discardUnused: true
    // },

    /**
     * 设置要复制到输出目录的文件或文件夹。
     * 只能复制到 outputPath 里。
     */
    // copy: [],

    /**
     * 用于提供给代码中可用的变量。
     */
    define: {
    },

    /**
     * 配置开发服务器。
     * 包含以下子配置项，
     * - port，端口号，默认 8000
     * - host，默认 0.0.0.0
     * - https，是否启用 https server，同时也会开启 HTTP/2
     * - writeToDisk，生成 assets 到文件系统
     *
     */
    // devServer: {},

    /**
     * 用户配置 sourcemap 类型。
     *
     * TODO: sourcemap 文件上传的地址应该仅供内网访问
     */
    // // devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    /**
     * 开启 mfsu 功能并添加相关配置
     * 开启该功能将会自动开启 webpack5 和 dynamicImport.
     * 只开启开发环境的mfsu，build暂有主应用打开子应用空白的问题
    */
    mfsu: {
      development: {
        output: './.mfsu-dev',
      },
      // production: {
      //   output: './.mfsu-prod',
      // },
    },
    /**
    * 使用 webpack 5 代替 webpack 4 进行构建。
    * 物理缓存功能默认开启，可通过设置环境变量 WEBPACK_FS_CACHE 为 none 来禁用。
    */
    webpack5: {},

    /**
     * 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。
     *
     * 启用之后，需要考虑 publicPath 的配置，可能还需要考虑 runtimePublicPath，因为需要知道从哪里异步加载 JS、CSS 和图片等资源。
     * 包含以下子配置项，
     * - loading，类型为字符串，指向 loading 组件文件，不赋值默认效果是个`Loading...`文案
     */
    dynamicImport: {
      loading: '@/components/pageLoading',
    },

    /**
     * 配置 html 的输出形式，默认只输出 index.html。
     * 配置说明较复杂，见：https://umijs.org/zh-CN/config#exportstatic
     */
    // exportStatic: {},

    /**
     * 设置哪些模块可以不被打包，通过 <script> 或其他方式引入，通常需要和 scripts 或 headScripts 配置同时使用。
     */
    // externals: {},

    /**
     * 配置额外的 babel 插件集。
     */
    // extraBabelPresets: [],

    /**
     * 配置额外的 postcss 插件。
     * 相关插件见：https://github.com/postcss/postcss/blob/master/docs/plugins.md
     */
    // extraPostCSSPlugins: [],

    /**
     * 配置 favicon 地址（href 属性）。
     * TODO: 校验favicon必须存在
     */
    // favicon: '',

    /**
     * 开启 TypeScript 编译时类型检查，默认关闭。
     */
    // forkTSChecker: {},

    /**
     * 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
     */
    hash: true,

    /**
     * 配置 <head> 里的额外脚本，数组项为字符串或对象。
     */
    // headScripts: [],

    /**
     * 配置 history 类型和配置项。
     * 配置具体含义见：https://github.com/ReactTraining/history/blob/master/docs/getting-started.md
     */
    // history: {
    //   type: 'browser'
    // },

    /**
     * 忽略 momentjs 的 locale 文件，用于减少尺寸。
     */
    // ignoreMomentLocale: true,

    /**
     * 配置图片文件是否走 base64 编译的阈值。默认是 10000 字节，少于他会被编译为 base64 编码，否则会生成单独的文件。
     */
    // inlineLimit: 10000,

    /**
     * 设置 less-loader 配置项。
     * 配置具体含义见：https://github.com/webpack-contrib/less-loader
     */
    // lessLoader: {},

    /**
     * 配置额外的 link 标签。
     * NOTE: 尽量在 document.ejs 里加。
     */
    // links: [],

    /**
     * 配置是否需要生成额外用于描述产物的 manifest 文件，默认会生成 asset-manifest.json。
     */
    // manifest: {},

    /**
     * 配置额外的 meta 标签。数组中可以配置key:value形式的对象。
     * NOTE: 尽量在 document.ejs 里加。
     */
    // metas: [],

    /**
     * 配置 mock 属性。
     * 包含以下子属性，
     * - exclude，格式为 Array(string)，用于忽略不需要走 mock 的文件
     */
    // mock: {},

    /**
     * 指定 react app 渲染到的 HTML 元素 id。
     * 如果需要把应用打包成 umd 包导出，需设置 mountElementId 为 ''
     */
    mountElementId: 'root-slave',

    /**
     * 切换渲染模式为 mpa。
     * 包含以下特征：
     * - 为每个页面输出 html
     * - 输出不包含 react-router、react-router-dom、history 等库
     * - 渲染和 url 解绑，html 文件放哪都能使用
     * 注意：
     * - 只支持一级路由配置
     * - 不支持 layout 或嵌套路由的配置
     */
    // mpa: {},

    /**
     * 设置 node_modules 目录下依赖文件的编译方式。
     * 子配置项包含，
     * - type，类型，可选 all 和 none
     * - exclude，忽略的依赖库，包名，暂不支持绝对路径
     */
    // nodeModulesTransform: {
    //   type: 'all',
    //   exclude: [],
    // },

    /**
     * 指定输出路径。
     */
    outputPath: './dist',

    /**
     * 配置额外的 umi 插件。
     * 配置可选项见：https://umijs.org/zh-CN/plugins
     * 插件参数声明方式见：https://umijs.org/zh-CN/config#plugins
     */
    // plugins: []

    /**
     * 设置按需引入 polyfill，对应core-js的引入范围，默认全量引入。
     * 注意：设置 BABEL_POLYFILL=none 环境变量后，该配置失效，且无 polyfill 引入。
     * core-js相关说明：https://github.com/zloirock/core-js#commonjs-api
     */
    // polyfill: {
    //   imports: []
    // },

    /**
     * 设置 postcss-loader 配置项。
     * 配置具体含义见：https://github.com/postcss/postcss-loader#options
     */
    // postcssLoader: {},

    /**
     * 同 plugins 配置，用于配置额外的 umi 插件集。
     */
    // presets: [],

    /**
     * 配置代理能力。
     * 默认只有grace模式下才打开。
     */
    proxy: {
      // '/api': {
      //   'target': 'http://192.169.3.12:8080/',
      //   'changeOrigin': true,
      //   'pathRewrite': { '^/api' : '' },
      // },
    },
    /**
     * 配置 webpack 的 publicPath。
     * slaveDomain 在 qiankun 中会自动过滤掉 dev 模式和非子应用的情况
     */
    publicPath: './',

    /**
     * 配置路由。
     * umi 的路由基于 react-router@5 实现，配置和 react-router 基本一致，详见：https://umijs.org/zh-CN/docs/routing#%E9%85%8D%E7%BD%AE%E8%B7%AF%E7%94%B1
     */
    routes,

    /**
     * 配置是否需要动态变更 history 类型。
     */
    // runtimeHistory: {},

    /**
     * 配置是否启用运行时 publicPath。
     */
    runtimePublicPath: false,

    /**
     * 配置是否开启服务端渲染
     * 配置具体含义见：https://umijs.org/zh-CN/config#ssr-32
     */
    // ssr: false,

    /**
     * 同 headScripts，配置 <body> 里的额外脚本。
     */
    // scripts: [],

    /**
     * 配置是否启用单数模式的目录。
     * 比如 src/pages 的约定在开启后为 src/page 目录，@umijs/plugins 里的插件也遵照此配置的约定。
     */
    // singular: false,

    /**
     * 启用并设置 style-loader 配置项，用于让 CSS 内联打包在 JS 中，不输出额外的 CSS 文件。
     * 配置具体含义见：https://github.com/webpack-contrib/style-loader
     */
    // styleLoader: {},

    /**
     * 配置额外 CSS。
     */
    // styles: [],

    /**
     * 配置需要兼容的浏览器最低版本，会自动引入 polyfill 和做语法转换。
     */
    // targets: { chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10 },

    /**
     * 配置压缩器 terser 的配置项。
     * 配置具体含义见：https://github.com/terser/terser#minify-options
     * 默认值见：https://github.com/umijs/umi/blob/master/packages/bundler-webpack/src/getConfig/terserOptions.ts
     */
    // terserOptions: {},

    /**
     * 配置主题，实际上是配 less 变量。
     */
    // // Theme for antd: https://ant.design/docs/react/customize-theme-cn
    theme: {},

    /**
     * 配置标题。
     * 也可以针对路由配置标题。
     */
    title: '标题',
  },
  {
    /**
     * @umijs/plugin-sass
     */
    sass: {
      implementation: dartSass,
    },
  }

]));
