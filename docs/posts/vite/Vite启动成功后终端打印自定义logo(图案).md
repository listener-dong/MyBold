---
icon: edit
date: 2023-03-10
category:
  - Vite
tag:
  - Vite Cmd
---

# Vite启动成功后终端打印自定义logo(图案)

## 1. 安装依赖 🔨🔨🔨🔨

这里会用一个插件，picocolors，它是一个可以修改终端输出字符颜色的 npm 包。

```sh
yarn add picocolors
```

## 2. 新建`build/info.ts`文件🔨🔨🔨🔨

```ts
import type { Plugin } from "vite";
import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import { green, blue, bold } from "picocolors";
import { getPackageSize } from "@pureadmin/utils";
dayjs.extend(duration);

export function viteBuildInfo(): Plugin {
  let config: { command: string };
  let startTime: Dayjs;
  let endTime: Dayjs;
  let outDir: string;
  return {
    name: "vite:buildInfo",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      outDir = resolvedConfig.build?.outDir ?? "dist";
    },
    buildStart() {
      console.log(
        bold(
          green(
            `👏欢迎使用${blue(
              "[vue-pure-admin]"
            )}，如果您感觉不错，记得点击后面链接给个star哦💖 https://github.com/pure-admin/vue-pure-admin`
          )
        )
      );
      if (config.command === "build") {
        startTime = dayjs(new Date());
      }
    },
    closeBundle() {
      if (config.command === "build") {
        endTime = dayjs(new Date());
        getPackageSize({
          folder: outDir,
          callback: (size: string) => {
            console.log(
              bold(
                green(
                  `🎉恭喜打包完成（总用时${dayjs
                    .duration(endTime.diff(startTime))
                    .format("mm分ss秒")}，打包后的大小为${size}）`
                )
              )
            );
          }
        });
      }
    }
  };
}

```

## 3. `vite.config.ts`中引入刚刚写好的插件🔨🔨🔨🔨

```ts
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
const pathSrc = path.resolve(__dirname, 'src')
// 注意这里千万不要使用@，因为这里还不能识别你配置文件系统路径别名
import { vitesStartInfo, viteBuildInfo } from "./build/info";
 
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    }
  },
  plugins: [
    vue(),
    vitePluginStart(),
 vitesStartInfo(),
    viteBuildInfo()
  ],
  server: {
    host: '0.0.0.0', // 指定服务器应该监听哪个 IP 地址
    port: 9527, // 指定开发服务器端口
    strictPort: true, // 若端口已被占用则会直接退出
    open: false, // 启动时自动在浏览器中打开应用程序
  }
})
```

## 4. 最终效果浏览 💥 ✨ ⭐️ 🌟 💥

![Cat](/imgs/vite_console_1.png)
![Cat](/imgs/vite_console_2.jpg)
