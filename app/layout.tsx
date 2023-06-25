import "styles/global.css";
import "styles/tw.css";

import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import { GlobalLayout } from "components/global/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "2-NOW garden",
  description: "A digital garden of 2-NOWs",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
