import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Customers from "../components/Customers";
import Faq from "../components/Faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Customers />
      <Faq />
    </main>
  );
}
