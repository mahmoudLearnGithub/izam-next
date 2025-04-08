"use client";
import SidebarProvider from "./components/SidebarContext";
// import DragDropTest from "./components/DragDropTest";
import { useEffect, useState } from "react";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import JobSection from "./components/JobSection";
import Preloader from "./components/Preloader";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <title>دفترة - اكتشف فرص العمل المثالية - موقع دفترة للتوظيف</title>
        <meta name="description" content="اكتشف فرص العمل المثالية وابدأ مسيرتك المهنية الناجحة مع موقع دفترة - الحل الأمثل للتوظيف." />
        <meta name="keywords" content="وظائف, فرص عمل, التوظيف, مسار مهني, موقع دفترة" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,width=device-width" />
      </head>
      <body id="white" className="layout">
        {isLoading ? <Preloader /> : (
          <>
          {/* <DragDropTest /> */}
            <Navbar />
            <SidebarProvider>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-3">
                  <Sidebar />
                </div>
                <div className="col-xs-12 col-md-9">
                  {children}
                  <JobSection />
                </div>
              </div>
            </div>
            </SidebarProvider>
          </>
        )}

        
      </body>
    </html>
  );
}
