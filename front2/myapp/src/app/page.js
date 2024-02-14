import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar.jsx";
import About from "../pages/About/about.js"
import Home from "@/pages/home/home.jsx";
export default function test() {
  return (
    <>
   {/* <Home/> */}
   <Navbar/>
   <About/>
   
    </>
  );
}
