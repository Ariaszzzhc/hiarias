import { React } from "https://deno.land/x/pagic@v1.5.1/mod.ts";

import type { PagicLayout } from "https://deno.land/x/pagic@v1.5.1/mod.ts";
import LayoutBase from "../_layout_base.tsx";

const Categories: PagicLayout = (props) => (
  <section className="main">
    {props.contentTitle ?? (props.title && <h1>{props.title}</h1>)}
    <ul className="main_categories">
      {props.blog?.categories.map(({ name, count }) => (
        <li key={name}>
          <a href={`${props.config.root}categories/${name}/`}>
            {name} ({count})
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const Layout: PagicLayout = (props) => (
  <LayoutBase {...props} Main={Categories} />
);

export default Layout;
