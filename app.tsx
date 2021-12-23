import React, { FC } from "react";
import Header from "./components/Header.tsx";
import "https://unpkg.com/normalize.css@8.0.1/normalize.css";
import Landing from "./components/Landing.tsx";
import Footer from "./components/Footer.tsx";
import "./styles/remixicon.css";
import "./styles/global.css";

type Metadata = {
  title?: string;
  description?: string;
  keywords?: string;
};

export default function App(
  { Page, pageProps }: {
    Page: FC & { meta: Metadata };
    pageProps: Record<string, unknown>;
  },
) {
  return (
    <div>
      <Header />
      <Landing text="Hello, World!" />
      <div className="container mx-auto px-4">
        <div
          id="body"
          className="relative bg-white rounded-lg shadow-md mt-0 py-4"
        >
          <Page {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
