import { PropsWithChildren } from "react";

import { Footer } from "./footer";
import { Header } from "./header";

export const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col px-4">
      <Header />
      <section className="grow">{children}</section>
      <Footer />
    </main>
  );
};
