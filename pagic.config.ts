export default {
  srcDir: "pages",
  outDir: "_site",
  plugins: ["gitalk", "ga", "blog"],
  title: "Arias's Blog",
  description: "欢迎来到我的博客",
  github: "https://github.com/Ariaszzzhc",
  ga: {
    id: "UA-115297697-1",
  },
  gitalk: {
    clientId: "3611f654025d66587638",
    clientSecret: "c7419ab7efce6e15b1b7ae2eaf7419bb23ec6043",
    repo: "hiarias",
    owner: "Ariaszzzhc",
    admin: ["Ariaszzzhc"],
    pagerDirection: "first",
  },
  blog: {
    root: "/posts",
    social: {
      github: "Ariaszzzhc/hiarias",
      email: "ariaszzzhc@outlook.com",
    },
  },
  nav: [
    {
      text: "首页",
      link: "/",
      icon: "czs-home-l",
    },
    {
      text: "分类",
      link: "/categories/",
      icon: "czs-category-l",
    },
    {
      text: "标签",
      link: "/tags/",
      icon: "czs-tag-l",
    },
    {
      text: "关于",
      link: "/about/",
      icon: "czs-about-l",
    },
    {
      text: "归档",
      link: "/archives/",
      icon: "czs-box-l",
    },
    {
      text: "友情链接",
      link: "/links/",
      icon: "czs-link-l",
    },
  ],
};
