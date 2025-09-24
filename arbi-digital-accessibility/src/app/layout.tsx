"use client";

import Head from "next/head";
import { Roboto_Slab } from "next/font/google";
import "@/app/styles/globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"; // move here!
import SearchInput from "./components/SearchInput";

import { useState } from "react";

const roboto_Slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <body className={`${roboto_Slab.variable}`}>
        <div className="bodyWrapper">
          {/* pass state & setter to Navbar */}
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          <div className="mainWrapper d-flex">
            {/* Sidebar lives here too */}
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            {/* mainContent reacts to sidebar */}
            <main
              className={`mainContent ${!isSidebarOpen ? "fullWidth" : ""}`}
              id="main-content"
              tabIndex={-1}
            >
              <div className="mobileSearchInput">
                <SearchInput />
              </div>
              {children}
            </main>
          </div>

          <Footer
            className={`mainContent ${!isSidebarOpen ? "fullWidth" : ""}`}
          />
        </div>
      </body>
    </html>
  );
}
