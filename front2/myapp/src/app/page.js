import Image from "next/image";
import Link from "next/link";
// import Navbar from "../components/Navbar.jsx";
import About from "../pages/About/about.js"
import BabySittingPage from "../pages/Babysitting/BabysittingPage.js"
import navbar from  "../components/NavBarServices.jsx"
import HouseKeepingPage from "../pages/HouseKeeping/HouseKeepingPage.js"
import SeniorPage from "../pages/Senior/seniorPage.js"
export default function Home() {
  return (
    <>
   <navbar/>
   <BabySittingPage/>
   <HouseKeepingPage/>
   <SeniorPage/>
   
    </>
  );
}
