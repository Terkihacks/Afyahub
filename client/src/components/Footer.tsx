import { communityLinks, platformLinks, resourcesLinks } from "../data/webContent";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer(){
    return(
        <>
        <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                <h3 className="text-md font-semibold mb-4">Community Links</h3>
                  <ul className="space-y-2">
                  {
                        communityLinks.map((community,index) =>(
                            <li key={index}>
                                <a 
                                className="text-neutral-300 hover:text-white"
                                href={community.href}>{community.text}</a>
                            </li>
                        ))
                    }
                  </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Platform Links</h3>
                   <ul className="space-y-2">
                   {
                       platformLinks.map((platform,index) =>(
                            <li key={index}>
                                <a 
                                className="text-neutral-300 hover:text-white"
                                href={platform.href}>{platform.text}</a>
                            </li>
                        ))
                    }

                   </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Resources Links</h3>
                    <ul className="space-y-2">
                    {
                       resourcesLinks.map((resource,index) =>(
                            <li key={index}>
                                <a 
                                className="text-neutral-300 hover:text-white"
                                href={resource.href}>{resource.text}</a>
                            </li>
                        ))
                    }

                    </ul>
                </div>

            </div>
        </footer>
     <div className="text-center my-[50px] mx-[50px] text-xl flex flex-col items-center space-y-4">
      <div className="flex justify-between space-x-6">
        <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-500" />
        <Instagram className="w-6 h-6 cursor-pointer hover:text-pink-500" />
        <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
        <Github className="w-6 h-6 cursor-pointer hover:text-gray-700" />
      </div>
      <p className="font-semibold text-xl">© {new Date().getFullYear()} AfyaHub. All rights reserved.</p>
    </div>
        </>
    )
}