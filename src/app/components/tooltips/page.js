import { ButtonContained } from "@/components/Button";
import Navigation from "@/app/drawless/ui/Navigation";
function TooltipElement({color, buttonColor, position}){
    const title="Tooltip Title"
    const description="Tooltips display informative text when users hover over, focus on, or tap an element."
    const colorClasses = {
        indigo: "bg-indigo-600",
        white: "bg-white",
        dark: "bg-black"
    };
    const positionClass = {
        left: "left-10",
        right: "right-10",
        top: "self-center",
        none: "hidden"
    };
    const selectedPositionClass= positionClass[position] || positionClass.none
    const selectedColorClass = colorClasses[color] || colorClasses.indigo
    const textColor= color==="white"?"text-gray-500":"text-white"
    return(
        <div className="">
            <div className={`relative flex flex-col justify-between w-[320px] min-h-[138px] rounded-2xl p-3 shadow-lg ${selectedColorClass}`}>
            <div class={`absolute -top-2 h-4 w-4 rotate-45 ${selectedColorClass} ${selectedPositionClass}`}></div>
                <div className="">
                    <div>
                        <span className={`font-extrabold text-sm ${textColor}`}>{title}</span>
                    </div>
                    <div className="mt-2">
                        <span className={`font-semibold text-xs ${textColor}`}>{description}</span>
                    </div>
                </div>
                <div className="flex justify-end w-full space-x-[12px] mt-4">
                    <ButtonContained text="Button" color={buttonColor}/>
                </div>
            </div>
        </div>
    )
}
export default function Tooltips(){
    const title="Tooltip Title"
    const description="Tooltips display informative text when users hover over, focus on, or tap an element."
    return(
        <div className="flex flex-col space-y-12">
            <Navigation  selected={["components", "tooltips"]}  />
            <div className="w-full min-h-[1px] bg-slate-200" />
            {/* tooltip none */}
            <div className="grid grid-cols-3 gap-y-10">
                <TooltipElement color="dark" buttonColor="white" position="none"/>
                <TooltipElement color="dark" buttonColor="white" position="top"/>
                <TooltipElement color="dark" buttonColor="white" position="right"/>
                <TooltipElement color="dark" buttonColor="white" position="left"/>
            </div>
            <div className="grid grid-cols-3 gap-y-10">
                <TooltipElement color="indigo" buttonColor="white" position="none"/>
                <TooltipElement color="indigo" buttonColor="white" position="top"/>
                <TooltipElement color="indigo" buttonColor="white" position="right"/>
                <TooltipElement color="indigo" buttonColor="white" position="left"/>
            </div>
            <div className="grid grid-cols-3 gap-y-10">
                <TooltipElement color="white" buttonColor="black" position="none"/>
                <TooltipElement color="white" buttonColor="black" position="top"/>
                <TooltipElement color="white" buttonColor="black" position="right"/>
                <TooltipElement color="white" buttonColor="black" position="left"/>
            </div>
        </div>
    )
}