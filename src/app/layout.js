import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drawless - Home",
  description: "Ready to use, Open Source Web UI Components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="w-full min-h-screen bg-white flex">
            
              <div className="p-48 font-plus-jakarta-sans flex flex-col space-y-8 m-auto">
                {children}
              </div>
        </div>
        
      </body>

    </html>
  );
}
