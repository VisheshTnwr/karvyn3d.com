import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Metadata } from "next"; // Added for type safety

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
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="antialiased bg-gray-50 text-gray-950 font-sans">
        {children}
      </body>
    </html>
  );
}
