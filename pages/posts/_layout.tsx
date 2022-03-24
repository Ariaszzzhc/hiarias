import { React } from "https://deno.land/x/pagic@v1.5.1/mod.ts";

import type { PagicLayout } from "https://deno.land/x/pagic@v1.5.1/mod.ts";
import LayoutBase from "../_layout_base.tsx";
import Main from "../_main.tsx";
import Posts from "./_posts.tsx";

const Layout: PagicLayout = (props) => (
  <LayoutBase {...props} Main={props.blog?.isPost ? Main : Posts} />
);

export default Layout;
