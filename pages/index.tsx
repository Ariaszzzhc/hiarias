import { useDeno } from "aleph/react";
import React from "react";
import * as path from "https://deno.land/std@0.118.0/path/mod.ts";
// import marked from "https://esm.sh/marked@4.0.7";
import matter from "https://esm.sh/gray-matter@4.0.3";

export interface HomeProps {
  posts: string[];
}

export default function Home() {
  const posts = useDeno(() => {
    const files = [...Deno.readDirSync(path.join("posts"))];

    const decoder = new TextDecoder("utf-8");

    return files.map((file) => {
      const slug = file.name.replace(".md", "");

      // get frontmatter
      const mdWithMeta = Deno.readFileSync(path.join("posts", file.name));

      const { data: frontmatter } = matter(decoder.decode(mdWithMeta));

      return { slug, frontmatter };
    });
  });

  console.log(posts);

  return (
    <>
      <head>
        <title>Blog | Home</title>
        <meta name="description" content="Ariaszzzhc's Blog" />
      </head>

      <div>
        {posts.map((post, index) => (<h3 key={index}>{post.frontmatter.title}</h3>))}
      </div>
    </>
  );
}
