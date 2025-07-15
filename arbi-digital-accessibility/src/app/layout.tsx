import Head from "next/head";
import { Roboto_Slab } from "next/font/google";
import "@/app/styles/globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const roboto_Slab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </Head>
      <body className={`${roboto_Slab.variable}`}>
        <div className="bodyWrapper">
          <Navbar />
          <div className="mainWrapper d-flex">
            <Sidebar />

            <main className="mainContent" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
