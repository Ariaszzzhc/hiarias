import Image from "next/image";

const img = ({ src, alt, title }: React.HTMLProps<HTMLImageElement>) => {
  return <Image src={src ?? ""} alt={alt ?? src ?? ""} title={title} fill />;
};

export const MDXComponents = {
  img,
};
