/** @jsx h */

import blog, { h } from "blog";
import "./prismjs-extensions.ts";

blog({
  title: "Arias's Blog",
  description:
    "那个少年，从小想当亚瑟·戴恩，但不知怎地，生命拐了个弯，最后成为了微笑骑士。",
  avatar: "./images/avatar.png",
  avatarClass: "rounded-full",
  showHeaderOnPostPage: true,
  author: "Arias",
  links: [
    { title: "GitHub", url: "https://github.com/Ariaszzzhc" },
    { title: "Email", url: "mailto:ariaszzzzhc@gmail.com" },
  ],
  footer: (
    <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
      <p class="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
        <a
          href="https://beian.miit.gov.cn/"
          class="inline-flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          title="备案号"
        >
          浙ICP备2022026659号
        </a>
        <span>
          Powered by{" "}
          <a
            class="inline-flex items-center gap-1 underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            href="https://deno.land/x/blog"
          >
            Deno Blog
          </a>
        </span>
        <a
          href="/feed"
          class="inline-flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          title="Atom Feed"
        >
          <svg
            class="inline-block w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
            <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
          </svg>
          RSS
        </a>
      </p>
    </footer>
  ),
  middlewares: [
    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-115297697-1"),
    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),
  ],
});
