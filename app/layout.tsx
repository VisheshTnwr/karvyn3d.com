import "./globals.css";
import { Inter, Poppins } from "next/font/google";

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

export const metadata = {
  title: "Karvyn3D | Next-Gen Small-Batch Manufacturing Studio",
  description: "A specialized 3D production studio for R&D labs, tech startups, and corporate teams. Aesthetic utility meets production precision.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased bg-gray-950 text-gray-50 font-sans">
        {children}
      </body>
    </html>
  );
}