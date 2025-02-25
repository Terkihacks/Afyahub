import { Loader2 } from "lucide-react";

export default function Spinner(){
    return(
        <>
    <div className="fixed inset-0 z-[999] grid h-screen place-items-center w-screen  bg-gray-400 bg-opacity-60  backdrop-blur transition-opacity duration-500">
    <div role="status">
    <Loader2 className=" flex items-center w-8 h-8 animate-spin text-blue-600" />
    <span className=" font-extrabold text-xl ">Loading...</span>
    </div>
    </div>
        </>
    )
}