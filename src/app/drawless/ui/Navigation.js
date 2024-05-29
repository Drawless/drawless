import Image from "next/image"
import Link from "next/link"


export default function Navigation(props){
    return (

        <div className="flex flex-col space-y-32">
            <div className="w-full">
                <Image className="m-auto" src="/img/drawless/logo.svg" width={200} height={50} alt="Drawless Logo" />
            </div>
            <div className="w-full flex flex-col space-y-8 font-bold text-sm">
                <div className="font-plus-jakarta-sans flex flex-row w-full justify-center space-x-4">
                    <Link href={"/components/alerts"}><h1 className={"rounded-full py-4 px-14 cursor-pointer " + (props.selected.indexOf("components") > -1 ? "text-white bg-black hover:bg-slate-800" : "text-slate-600 hover:bg-slate-200")}>Components</h1></Link>
                    <Link href={"/templates/"}><h1 className={"rounded-full py-4 px-14 cursor-pointer " + (props.selected.indexOf("templates") > -1 ? "text-white bg-black hover:bg-slate-800" : "text-slate-600 hover:bg-slate-200")}>Templates</h1></Link>
                    <Link href={"/uipack/"}><h1 className={"rounded-full py-4 px-14 cursor-pointer " + (props.selected.indexOf("uipack") > -1 ? "text-white bg-black hover:bg-slate-800" : "text-slate-600 hover:bg-slate-200")}>Basic UI Pack</h1></Link>
                </div>
                <div className="font-plus-jakarta-sans flex flex-row w-full justify-center space-x-4">
                    <Link href={"/components/alerts"}><h1 className={"rounded-full py-4 px-14 cursor-pointer "+(props.selected.indexOf("alerts") > -1  ? "text-white bg-black hover:bg-slate-800" : "text-slate-600 hover:bg-slate-200")}>Alerts & Notifications</h1></Link>
                    <Link href={"/components/tooltips"}><h1 className={"rounded-full py-4 px-14 cursor-pointer "+(props.selected.indexOf("tooltips") > -1  ? "text-white bg-black hover:bg-slate-800" : "text-slate-600 hover:bg-slate-200")}>Tooltips</h1></Link>
                    <Link href={"/components/modals"}><h1 className={"rounded-full py-4 px-14 cursor-pointer "+(props.selected.indexOf("modals") > -1  ? "text-white bg-black hover:bg-slate-800" : "text-slate-600 hover:bg-slate-200")}>Modals</h1></Link>
                    <Link href={"/components/file_upload"}><h1 className={"rounded-full py-4 px-14 cursor-pointer "+(props.selected.indexOf("file_upload") > -1  ? "text-white bg-black hover:bg-slate-800" : "text-slate-600 hover:bg-slate-200")}>File Upload</h1></Link>
                    <Link href={"/components/progress_bar"}><h1 className={"rounded-full py-4 px-14 cursor-pointer "+(props.selected.indexOf("progress_bar") > -1  ? "text-white bg-black hover:bg-slate-800" : "text-slate-600 hover:bg-slate-200")}>Progress Bars</h1></Link>
                </div>
            </div>
        </div>

    )
}