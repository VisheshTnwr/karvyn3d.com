import "./globals.css";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import { Metadata } from "next"; 
import AmbientBackground from "@/components/AmbientBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

// UPDATED METADATA FOR GOOGLE CRAWLING
export const metadata: Metadata = {
  title: "Karvyn3D | Proprietary Lab Instruments & Research Tools",
  description:
    "A specialized manufacturer of MRI-compatible restraints, custom labware, and institutional research tools engineered for precision.",
  metadataBase: new URL("https://karvyn3d.com"), 
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Standard favicon
      { url: "/icon.svg", type: "image/svg", sizes: "32x32" }, // Specifically for search engines
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }, // For iOS devices
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body className="antialiased text-slate-900 font-sans relative">
        <AmbientBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
