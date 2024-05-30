import Navigation from "../../drawless/ui/Navigation";
import PrismLoader from "../../drawless/utils/PrismLoader";
import { FileArrowUp, UploadSimple } from "@phosphor-icons/react/dist/ssr"; 

export default function FileUpload() {

    const title="Insert Your Modal Title"
    const text="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet."
    const code='console.log("hello")'
    return (
        <div className="flex flex-col space-y-24">

            <Navigation  selected={["components", "file_upload"]}  />

            <div className="w-full min-h-[1px] bg-slate-200"> </div>
            <div className="flex flex-col space-y-10">
                <div className="flex flex-col items-center space-y-8 border-2 border-slate-200 border-dashed rounded-3xl p-12 cursor-pointer hover:bg-[#F8FAFC]">
                    <div className="rounded-full bg-[#EEF2FF] p-6">
                        <FileArrowUp color="#4F46E5" weight="bold" size={38} />
                    </div>
                    <div className="flex flex-col space-y-2 items-center">
                        <h2 className="text-slate-500 font-medium"><span className="text-blue-600 font-bold">Click here</span> to upload your file or drag and drop.</h2>
                        <h2 className="text-slate-400">Supported Format: SVG, JPG, PNG (10mb each)</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-8 border-2 border-slate-200 border-dashed rounded-3xl p-12 cursor-pointer hover:bg-[#F8FAFC]">
                    <div className="flex flex-col space-y-2 items-center">
                        <h2 className="text-blue-600 font-bold">Browse your file to upload!</h2>
                        <h2 className="text-slate-400">Supported Format: SVG, JPG, PNG (10mb each)</h2>
                    </div>
                    <div className="bg-blue-600 flex flex-row justify-center space-x-4 rounded-full px-8 py-4 font-bold">
                        <h1>Browse File</h1>
                        <UploadSimple color="#ffffff" weight="bold" size={24} />
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-8 border-2 border-slate-300 border-dashed rounded-3xl p-12 cursor-not-allowed bg-[#F8FAFC] select-none">
                    <div className="rounded-full bg-slate-100 p-6 border border-slate-300">
                        <FileArrowUp color="#4F46E5" weight="bold" size={38} />
                    </div>
                    <div className="flex flex-col space-y-2 items-center">
                        <h2 className="text-slate-300 font-medium"><span className="text-blue-300 font-bold">Click here</span> to upload your file or drag and drop.</h2>
                        <h2 className="text-slate-400">Supported Format: SVG, JPG, PNG (10mb each)</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-8 border-2 border-slate-200 border-dashed rounded-3xl p-12 cursor-not-allowed bg-[#F8FAFC] select-none">
                    <div className="flex flex-col space-y-2 items-center">
                        <h2 className="text-blue-300 font-bold">Browse your file to upload!</h2>
                        <h2 className="text-slate-400">Supported Format: SVG, JPG, PNG (10mb each)</h2>
                    </div>
                    <div className="bg-blue-100 flex flex-row justify-center space-x-4 rounded-full px-8 py-4 font-bold">
                        <h1 className="text-blue-400">Browse File</h1>
                        <UploadSimple color="#ffffff" weight="bold" size={24} />
                    </div>
                </div>
            </div>
            <PrismLoader/>
        </div>
);
}
