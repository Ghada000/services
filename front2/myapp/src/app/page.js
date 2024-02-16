import Image from "next/image";
import Link from "next/link";
import NavbarGoods from "../components/navbarGoods";
import Navbar from "@/components/Navbar";
import About from "../pages/About/index.js"
// import Home from "@/pages/home/home.jsx";
export default function test() {
  return (
    <>
   {/* <Home/> */}
   <NavbarGoods/>
   <Navbar/>
   <About/>

    </>
  );
}