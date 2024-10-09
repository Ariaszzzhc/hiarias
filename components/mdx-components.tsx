import Image from "next/image";
import { MDXComponents as MDXComponentsType } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const MDXComponents: MDXComponentsType = {
  img: ({ src, alt, title }: React.HTMLProps<HTMLImageElement>) => (
    <Image
      src={src ?? ""}
      alt={alt ?? src ?? ""}
      title={title}
      loading="lazy"
      // Make the image responsive
      width={400}
      height={200}
      sizes="100vw"
      // Make the image display full width
      className="w-full h-auto"
    />
  ),

  a: ({ href, children }: React.HTMLProps<HTMLAnchorElement>) => (
    <Link href={href ?? ""}>{children}</Link>
  ),

  p: ({ className, ...restProps }) => (
    <p {...restProps} className={cn(className, "mb-6 leading-relaxed")} />
  ),

  li: ({ className, ...restProps }) => (
    <li {...restProps} className={cn(className, "mb-2")} />
  ),
};
