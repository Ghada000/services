import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar.jsx";

import About from '../pages/About/index.js'
import NavbarGoods from "@/components/navbarGoods.jsx";

import About from "../pages/About/index.js"

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