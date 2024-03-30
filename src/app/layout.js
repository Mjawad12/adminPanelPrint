import SideBar from "@/components/SideBar";
import "./globals.css";
import localFont from "next/font/local";
const fonts = localFont({
  src: [
    {
      path: "../../public/Fonts/PlusJakartaSans-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/PlusJakartaSans-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Fonts/PlusJakartaSans-SemiBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Fonts/PlusJakartaSans-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--Font-primary",
});

export const metadata = {
  title: "Project Nest",
  description: "Print invoices with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <div className="flex justify-start items-start">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
