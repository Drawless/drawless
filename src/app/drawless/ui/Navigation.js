import Image from "next/image"


export default function Navigation(){
    return (

        <div className="flex flex-col space-y-32">
            <div className="w-full">
                <Image className="m-auto" src="/img/drawless/logo.svg" width={200} height={50} alt="Drawless Logo" />
            </div>
            <div className="w-full flex flex-col space-y-8">
                <div className="font-plus-jakarta-sans flex flex-row w-full justify-center space-x-4">
                    <h1 className="bg-black text-white font-bold text-sm rounded-full py-4 px-14 cursor-pointer hover:bg-slate-800">Components</h1>
                    <h1 className="text-slate-600 font-bold text-sm rounded-full py-4 px-14 cursor-pointer hover:bg-slate-200">Templates</h1>
                    <h1 className="text-slate-600 font-bold text-sm rounded-full py-4 px-14 cursor-pointer hover:bg-slate-200">Basic UI Pack</h1>
                </div>
                <div className="font-plus-jakarta-sans flex flex-row w-full justify-center space-x-4">
                    <h1 className="text-slate-600 font-bold text-sm rounded-full py-4 px-14 cursor-pointer hover:bg-slate-200">Alerts & Notifications</h1>
                    <h1 className="text-slate-600 font-bold text-sm rounded-full py-4 px-14 cursor-pointer hover:bg-slate-200">Tooltips</h1>
                    <h1 className="bg-black text-white font-bold text-sm rounded-full py-4 px-14 cursor-pointer hover:bg-slate-800">Modals</h1>
                    <h1 className="text-slate-600 font-bold text-sm rounded-full py-4 px-14 cursor-pointer hover:bg-slate-200">File Upload</h1>
                    <h1 className="text-slate-600 font-bold text-sm rounded-full py-4 px-14 cursor-pointer hover:bg-slate-200">Progress Bars</h1>
                </div>
            </div>
        </div>

    )
}