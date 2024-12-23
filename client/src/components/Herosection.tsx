import { Link } from "react-router-dom";

// import Hero from '../assets/Hero.webp'
export default function Herosection(){
    return(
        <div className="flex flex-col items-center mt-5 lg:mt-15 ">
            <h1 className="text-4xl sm:text-6xl px-3 lg:text-7xl flex flex-col text-centre tracking-wide w-[100%] items-center">
                Afyahub Collaborative Tool
                {"  "}
                <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text  md:text-center
                ">
                Data-Driven Insights for Better Decisions
             </span>
            </h1>
            <p className="mt-8 text-lg text-centre text-neutral-500 max-w-4xl">
            Afyahub brings healthcare providers, patients, and stakeholders together on a unified platform to streamline communication,
            improve care delivery, and revolutionize health outcomes. 
            </p>
            <div className="flex justify-centre my-10">
                {/* <a href="#" className="bg-gradient-to-r from-orange-500 to-red-800 py-5 mx-3 px-4 rounded-md">  </a> */}
                <Link
             to="/register" 
             className="bg-gradient-to-r from-orange-500 to-red-800 py-5 mx-3 px-4 rounded-md"
        >
        Join the Hub Today
       </Link>
                <a href="#" className="py-5 px-4 mx-3 rounded-md border border-white">Discover How It Works</a>
            </div>
            {/* <div className="flex mt-10 justify-center">
            <img className='rounded-md px-5' src={Hero} alt="Illustration" />
            </div> */}
        </div>
    );
}