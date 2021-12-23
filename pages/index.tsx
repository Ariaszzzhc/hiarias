import { useDeno } from "aleph/react";
import React from "react";
import * as path from "https://deno.land/std@0.118.0/path/mod.ts";
import { format } from "https://deno.land/std@0.118.0/datetime/mod.ts";
// import { chunk } from "https://esm.sh/lodash@4.17.21";
// import marked from "https://esm.sh/marked@4.0.7";
import matter from "https://esm.sh/gray-matter@4.0.3";
import PostCard from "../components/PostCard.tsx";
import type { PostInfo } from "../types.d.ts";

export default function Home() {
  const posts = useDeno<Array<PostInfo>>(() => {
    const files = [...Deno.readDirSync(path.join("posts"))];

    const decoder = new TextDecoder("utf-8");

    return files.map((file) => {
      const slug = file.name.replace(".md", "");

      // get frontmatter
      const mdWithMeta = Deno.readFileSync(path.join("posts", file.name));

      const { data } = matter(decoder.decode(mdWithMeta));

      const date = new Date(data.date);
      return {
        slug,
        frontmatter: {
          title: data.title,
          description: data.description,
          date: format(date, "yyyy-MM-dd"),
          isoDate: date.toISOString(),
          tags: data.tags,
          banner: data.banner,
        },
      };
    });
  }).sort((x, y) => x.frontmatter.date < y.frontmatter.date ? 1 : -1);

  return (
    <>
      <head>
        <title>Blog | Home</title>
        <meta name="description" content="Ariaszzzhc's Blog" />
      </head>
      <div className="container">
        <div className="grid grid-rows-1 grid-cols-12">
          <div className="col-start-2 col-end-12">
            {posts.map((post, index) => <PostCard post={post} key={index} />)}
          </div>
        </div>
      </div>
    </>
  );
}
