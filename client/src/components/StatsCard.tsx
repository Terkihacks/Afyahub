import { Code, Eye, Heart, Users } from "lucide-react";

export default function StatsCard(){
    return(
        <>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8 pt-4 mx-auto">

<div title="All countributed components"
    className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
    <div className="flex gap-2 items-center">
        <span className="font-bold text-3xl md:text-4xl">30</span>
        <Code size={35} className="stroke-current" />
    </div>
    <span className="font-semibold text-sm text-center">Components contributed</span>
</div>

<div title="Users got help"
    className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
    <div className="flex gap-2 items-center">
        <span className="font-bold text-3xl md:text-4xl">93.9k</span>
        <Users size={32} className="stroke-current" />
    </div>
    <span className="font-semibold text-sm text-center">Users got help</span>
</div>

<div title="Total favorites received on components"
    className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
    <div className="flex gap-2 items-center">
        <span className="font-bold text-3xl md:text-4xl">60</span>   
       <Heart size={32} className="stroke-current" />
    </div>
    <span className="font-semibold text-sm text-center">Favorites received</span>
</div>

<div title="component views"
    className="md:col-start-2 lg:col-auto flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
    <div className="flex gap-2 items-center">
        <span className="font-bold text-3xl md:text-4xl">3.3k</span>
        <Eye size={32} className="stroke-current" />
    </div>
    <span className="font-semibold text-sm text-center">Views in last 30 days</span>
</div>

      </div>
        </>
    )
}