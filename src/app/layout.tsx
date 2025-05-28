import type { Metadata } from "next";
import { Montserrat, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "../provider/Provider";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Foooter";
import RippleCursor from "../component/Cursor";

const monserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const opensans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${monserrat.variable} ${opensans.variable} bg-black `}
      >
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
        <RippleCursor />
      </body>
    </html>
  );
}
