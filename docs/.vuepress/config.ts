import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Pointer",
  description: "Pointer-的个人博客",

  base: "/MyBold/",

  theme,
});
