import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "前端",
        icon: "edit",
        prefix: "vue/",
        children: ["vue3_vite", "article9"],
      },
      {
        text: "前端规范",
        icon: "edit",
        prefix: "standard/",
        children: ["article2", "article3"],
      },
      { text: "文章 9", icon: "edit", link: "vue/article9" },
      "article11",
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
