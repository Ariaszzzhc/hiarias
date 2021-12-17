import React, { FC } from "react";
import Header from "./components/Header.tsx";
import "https://unpkg.com/normalize.css@8.0.1/normalize.css";

type Metadata = {
  title?: string
  description?: string
  keywords?: string
}

export default function App(
  { Page, pageProps }: {
    Page: FC & { meta: Metadata };
    pageProps: Record<string, unknown>;
  },
) {

  if (Page.meta) {
    return (
      <>
        <head>
          <title>{Page.meta.title}</title>
          <meta name="description" content={Page.meta.description} />
          <meta name="keywords" content={Page.meta.keywords} />
        </head>
        <Header />
        <main>
          <Page {...pageProps} />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Page {...pageProps} />
      </main>
    </>
  );
}
