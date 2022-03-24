import { React } from "https://deno.land/x/pagic@v1.5.1/mod.ts";

import type { PagicLayout } from "https://deno.land/x/pagic@v1.5.1/mod.ts";
import LayoutBase from "../_layout_base.tsx";

const Tags: PagicLayout = (props) => {
  const { contentTitle, title, blog, config } = props;
  return (
    <section className="main">
      {contentTitle ?? (title && <h1>{title}</h1>)}
      <ul className="main_tags list_style_none">
        {blog?.tags.map(({ name, count }) => (
          <li key={name}>
            <a
              href={`${config.root}tags/${name}/`}
              style={{
                fontSize: 16 + Math.floor(Math.log(count) / Math.log(1.2)),
              }}
            >
              {name} ({count})
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Layout: PagicLayout = (props) => <LayoutBase {...props} Main={Tags} />;

export default Layout;
