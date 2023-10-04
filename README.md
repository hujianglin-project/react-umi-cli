### 目录结构
```
├── dist    // 默认的 build 输出目录
├── config
│   ├── config.ts  // umi 配置，同.umirc.js，且.umirc.js优先级更高
├── mock      // mock 文件所在目录，基于 express
├── public  				// 变通的数据资源目录和一些无需打包的资源
├── src
│   ├── .umi                  // dev 临时目录，需添加到 .gitignore
│   ├── .umi-production       // build 临时目录，会自动删除
│   ├── assets
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── pages
│       ├── page1.tsx               // 页面 1，任意命名，导出 react 组件
│       ├── 404.tsx                 // 404 页面
│       ├── document.ejs // HTML 模板
│   ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
│   ├── app.ts                     // 运行时配置文件
│   ├── request
│   ├── utils
├── .umirc.ts                      // umi 配置，同 config/config.ts，二选一
├── tsconfig.json
├── .env                           // 环境变量
```