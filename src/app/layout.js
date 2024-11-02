import { ThemeProvider } from "@/components/theme-provider";
import { Work_Sans } from "@next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import MobileNav from "@/components/Navigation/MobileNav";
import Footer from "@/components/InAll/Footer";
const WorkSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Smart Finance",
  description: "",
  icons: [
    {
      url: "/logo.jpg",
      href: "/logo.jpg",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html className="overflow-x-hidden scroll-smooth" lang="en">
      <body className={` overflow-x-hidden ${WorkSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <MobileNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
