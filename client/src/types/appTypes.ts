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
    path:string
}
export interface registrationTypes{
    first_name:string,
    last_name:string,
    email:string,
    phone:string,
    department:string,
    specialization:string
    password:string
    confirmPassword:string
}
export interface loginTypes{
    email:string,
    password:string
}