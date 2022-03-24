import { React } from "https://deno.land/x/pagic@v1.5.1/mod.ts";

import type { PagicLayout } from "https://deno.land/x/pagic@v1.5.1/mod.ts";
import { dateFormatter } from "../_utils.tsx";

const Posts: PagicLayout = (props) => {
  const { config, contentTitle, title, blog } = props;

  return (
    <section className="main">
      <article>
        {contentTitle ?? (title && <h1>{title}</h1>)}
        <ul className="main_posts list_style_none">
          {blog?.posts.map(
            ({ title, link, date, author, categories, excerpt, cover }) => (
              <li key={link}>
                {cover && (
                  <div
                    className="main_posts_cover"
                    style={{
                      backgroundImage: `url("${cover}")`,
                    }}
                  />
                )}
                <h1>
                  <a href={`${config.root}${link}`}>{title}</a>
                </h1>
                {excerpt && <p>{excerpt}</p>}
                <div className="main_posts_meta">
                  <time dateTime={date.toString()}>
                    {dateFormatter["yyyy-MM-dd"](date)}
                  </time>
                  {author && <>&nbsp;·&nbsp;{author}</>}
                  {categories?.[0] && (
                    <>
                      &nbsp;·&nbsp;
                      <a href={`${config.root}categories/${categories[0]}/`}>
                        {categories[0]}
                      </a>
                    </>
                  )}
                </div>
              </li>
            )
          )}
        </ul>
      </article>
    </section>
  );
};

export default Posts;
