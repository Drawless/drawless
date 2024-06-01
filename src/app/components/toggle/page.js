'use client'
import { useState } from "react"
import Navigation from "@/app/drawless/ui/Navigation"
import { X, Check } from "@phosphor-icons/react/dist/ssr"
function ToggleComponent({isActive, size="sm"}){
    const [active, setActive]= useState(isActive)
    const colorClass =active?"bg-indigo-500":"bg-slate-200"
    const positionClass=active?"translate-x-[18px]":"translate-x-[2px]"
    const sizeClass = {
        sm: "scale-100",
        md: "scale-125",
        lg: "scale-150",
    }[size];
    
    return(
        <div
            onClick={()=>setActive(!active)}
            className={`flex items-center w-9 h-5 rounded-full cursor-pointer ${colorClass} ${sizeClass}`}
        >
            <div className={`transition-transform ease-linear h-4 w-4 rounded-full bg-white ${positionClass}`} />
        </div>
    )
}

function ToggleComponentOutlined({isActive, size="sm"}){
    const [active, setActive]= useState(isActive)
    const colorClass =active?"bg-indigo-500":"bg-slate-200"
    const positionClass=active?"translate-x-[18px]":"translate-x-[2px]"
    const sizeClass = {
        sm: "scale-100",
        md: "scale-125",
        lg: "scale-150",
    }[size];
    
    return(
        <div
            onClick={()=>setActive(!active)}
            className={`flex items-center w-9 h-5 rounded-full cursor-pointer outline outline-indigo-200 ${colorClass} ${sizeClass}`}
        >
            <div className={`transition-transform ease-linear h-4 w-4 rounded-full bg-white ${positionClass}`} />
        </div>
    )
}

function ToggleComponentIcon({isActive, size="sm"}){
    const [active, setActive]= useState(isActive)
    const colorClass =active?"bg-indigo-500":"bg-slate-200"
    const positionClass=active?"translate-x-[18px]":"translate-x-[2px]"
    const sizeClass = {
        sm: "scale-100",
        md: "scale-125",
        lg: "scale-150",
    }[size];
    
    return(
        <div
            onClick={()=>setActive(!active)}
            className={`relative flex items-center w-9 h-5 rounded-full cursor-pointer ${colorClass} ${sizeClass}`}
        >
            <div className="flex justify-between items-center z-10 absolute w-9 h-5 px-[6px]">
                <X size={8} weight="bold" color={active?"#A5B4FC":"#475569"}/>
                <Check size={8} weight="bold" color={active?"#4F46E5":"#CBD5E1"}/>
            </div>
            <div className={`transition-transform ease-linear h-4 w-4 rounded-full bg-white ${positionClass}`} />
        </div>
    )
}

function ToggleComponentIconOutlined({isActive, size="sm"}){
    const [active, setActive]= useState(isActive)
    const colorClass =active?"bg-indigo-500":"bg-slate-200"
    const positionClass=active?"translate-x-[18px]":"translate-x-[2px]"
    const sizeClass = {
        sm: "scale-100",
        md: "scale-125",
        lg: "scale-150",
    }[size];
    
    return(
        <div
            onClick={()=>setActive(!active)}
            className={`relative flex items-center w-9 h-5 rounded-full cursor-pointer outline outline-indigo-200 ${colorClass} ${sizeClass}`}
        >
            <div className="flex justify-between items-center z-10 absolute w-9 h-5 px-[6px]">
                <X size={8} weight="bold" color={active?"#A5B4FC":"#475569"}/>
                <Check size={8} weight="bold" color={active?"#4F46E5":"#CBD5E1"}/>
            </div>
            <div className={`transition-transform ease-linear h-4 w-4 rounded-full bg-white ${positionClass}`} />
        </div>
    )
}
export default function Home(){
    return(
        <div className="flex flex-col space-y-14">
            <Navigation  selected={["components", "toggle"]} />
            <div className="w-full min-h-[1px] bg-slate-200"> </div>
            <div className="flex space-x-10">
                <ToggleComponent isActive={false}/>
                <ToggleComponent isActive={true}/>
                <ToggleComponent isActive={false} size="md"/>
                <ToggleComponent isActive={true} size="md"/>
                <ToggleComponent isActive={false} size="lg"/>
                <ToggleComponent isActive={true} size="lg"/>
            </div>
            <div className="flex space-x-10">
                <ToggleComponentOutlined isActive={false}/>
                <ToggleComponentOutlined isActive={true}/>
                <ToggleComponentOutlined isActive={false} size="md"/>
                <ToggleComponentOutlined isActive={true} size="md"/>
                <ToggleComponentOutlined isActive={false} size="lg"/>
                <ToggleComponentOutlined isActive={true} size="lg"/>
            </div>
            <div className="flex space-x-10">
                <ToggleComponentIcon isActive={false}/>
                <ToggleComponentIcon isActive={true}/>
                <ToggleComponentIcon isActive={false} size="md"/>
                <ToggleComponentIcon isActive={true} size="md"/>
                <ToggleComponentIcon isActive={false} size="lg"/>
                <ToggleComponentIcon isActive={true} size="lg"/>
            </div>
            <div className="flex space-x-10">
                <ToggleComponentIconOutlined isActive={false}/>
                <ToggleComponentIconOutlined isActive={true}/>
                <ToggleComponentIconOutlined isActive={false} size="md"/>
                <ToggleComponentIconOutlined isActive={true} size="md"/>
                <ToggleComponentIconOutlined isActive={false} size="lg"/>
                <ToggleComponentIconOutlined isActive={true} size="lg"/>
            </div>
        </div>
    )
}