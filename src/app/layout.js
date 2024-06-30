import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-orange-500 text-white`}>
        <div className="container mx-auto px-4 xl:px-0">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
