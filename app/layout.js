import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WeatherMan App by Shalini",
  description: "This app provides weather information about the cities you search and also includes default information about five different cities. You can also find out the current weather of your location.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
