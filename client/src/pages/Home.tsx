import Feature from "../components/Features";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
// import Navbar from "../components/Navbar";
import Pricing from "../components/Price";


export default function Home(){
    return(
        <>
        {/* <Navbar/> */}
        <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herosection/>
        <Feature/>
        <Pricing/>
        <Footer/>
        </div>
        </>
    )
}