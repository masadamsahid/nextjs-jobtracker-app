import type { Metadata } from "next";
import { Inter, Noto_Color_Emoji, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GlobalDrawer from "@/components/GlobalDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobtracker App",
  description: "Jobtracker App by Team C",
};

// export async function generateMetadata() {
//   return {
//     charset: 'utf-16',

//     title: "Jobtracker App",
//     description: "Jobtracker App by Team C",
//   };
// }


export const noto = Noto_Color_Emoji({
  subsets: ['emoji'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${plusJakartaSans.variable} ${inter.variable}`}>
        <GlobalDrawer />
        {children}
      </body>
    </html>
  );
}
