import { ModalBasic, ModalImage, ModalTextInput } from "../../../components/Modal";
import Notification from "../../../components/Notification";
import Navigation from "../../drawless/ui/Navigation";
import PrismLoader from "../../drawless/utils/PrismLoader";

function ProgressBar({length=300, percent=10, size="sm"}){
    const sizeClass = {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
    }[size];
    return(
        <div className={`rounded-lg bg-slate-200 ${sizeClass}`} style={{width:length}}>
            <div className="h-full rounded-lg bg-indigo-500" style={{width:percent+"%"}}></div>
        </div>
    )
}

function ProgressBarLabel({length=300, percent=10, size="sm"}){
    const sizeClass = {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
    }[size];
    return(
        <div className="flex flex-col  space-x-2" style={{width:length}}>
            <div className={`rounded-lg bg-slate-200 ${sizeClass}`}>
                <div className="h-full rounded-lg bg-indigo-500" style={{width:percent+"%"}}></div>
            </div>
            <div className="flex justify-end mt-2">
                <span className=" text-black font-semibold text-sm">{percent+"%"}</span>
            </div>
        </div>
    )
}

function ProgressBarLabelRight({length=300, percent=10, size="sm"}){
    const sizeClass = {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
    }[size];
    return(
        <div className="flex justify-center items-center space-x-2" style={{width:length}}>
            <div className={`w-full rounded-lg bg-slate-200 ${sizeClass}`}>
                <div className="h-full rounded-lg bg-indigo-500" style={{width:percent+"%"}}></div>
            </div>
            <div className="flex items-center">
                <span className=" text-black font-semibold text-sm">{percent+"%"}</span>
            </div>
        </div>
    )
}
export default function Home() {

    const title="Insert Your Modal Title"
    const text="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet."
    const code='console.log("hello")'
    return (
        <div className="flex flex-col space-y-24">

            <Navigation  selected={["components", "progress_bar"]}  />

            <div className="w-full min-h-[1px] bg-slate-200"> </div>
            <div className="flex flex-col space-y-10">
                <ProgressBar percent={20} />
                <ProgressBar percent={30} size="md"/>
                <ProgressBar percent={40} size="lg"/>
            </div>
            <div className="flex flex-col space-y-10">
                <ProgressBarLabel percent={20} />
                <ProgressBarLabel percent={30} size="md"/>
                <ProgressBarLabel percent={40} size="lg"/>
            </div>
            <div className="flex flex-col space-y-10">
                <ProgressBarLabelRight percent={20} />
                <ProgressBarLabelRight percent={30} size="md"/>
                <ProgressBarLabelRight percent={40} size="lg"/>
            </div>
            <PrismLoader/>
        </div>
);
}
