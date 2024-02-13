import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar.jsx";
import About from "../pages/About/about.js"
export default function Home() {
  return (
    <>
   <Navbar/>
   <About/>
    </>
  );
}
