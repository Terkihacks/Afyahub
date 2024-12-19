export interface navTypes{
//Navbar types 
label:string,
href:string
}
export interface featureTypes{
//Features types
icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
text:string,
description:string, 
}
export interface priceTypes{
title:string,
price:string,
features:string[]
}
export interface footerTypes{
    //footer types 
    text:string,
    href:string
}
export interface sidebarTypes{
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
    label:string
}
