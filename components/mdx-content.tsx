import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXComponents } from "./mdx-components";

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return <Component components={MDXComponents} />;
}
