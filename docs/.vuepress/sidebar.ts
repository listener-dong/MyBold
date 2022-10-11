import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/home",
  "/slide",
  {
    text: "如何使用",
    icon: "creative",
    prefix: "/guide/",
    link: "/guide/",
    children: "structure",
  },
  {
    text: "文章",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "前端",
        icon: "edit",
        prefix: "vue/",
        children: ["article1","article9"],
      },
      {
        text: "前端规范",
        icon: "edit",
        prefix: "standard/",
        children: [
          "article2",
          "article3",
        ],
      },
    ],
  },
]);
