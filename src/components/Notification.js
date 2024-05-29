import { Info, X } from "@phosphor-icons/react/dist/ssr"
import { ButtonContained } from "./Button"
export default function Notification({color}){
    const colorClasses = {
        gray: "bg-gray-200",
        indigo: "bg-indigo-200",
        green: "bg-green-200",
        red: "bg-red-200",
        yellow: "bg-yellow-200"
    };
    const selectedColorClass = colorClasses[color] || colorClasses.indigo
    return(
        <div className={`flex justify-between items-center w-[800px] min-h-[72px] rounded-2xl p-3 ${selectedColorClass}`}>
            <div>
                <div className="flex space-x-1 items-center">
                    <Info size={20}/>
                    <span className="font-extrabold text-base">Title</span>
                </div>
                <div className="px-7">
                    <span className="font-semibold text-sm text-gray-600">This is a supporting text.</span>
                </div>
            </div>
            <div className="flex items-center space-x-[12px]">
                <ButtonContained text="Button" color="black"/>
                <div className="flex items-center justify-center h-8 w-8 rounded-full cursor-pointer hover:bg-gray-100">
                    <X size={20}/>
                </div>
            </div>
        </div>
    )
}