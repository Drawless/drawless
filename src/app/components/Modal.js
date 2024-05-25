import { Info, X } from "@phosphor-icons/react/dist/ssr"
export default function Modal(){
    const title="Insert Your Modal Title"
    const text="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet."
    return(
        <div className="min-h-[280px] w-[500px] rounded-3xl shadow-lg p-6">
            <div className="flex justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 cursor-help">
                    <Info color="#4F46E5" weight="bold" size={24} />
                </div>
                <div className="cursor-pointer">
                    <X color="#475569" weight="bold" size={24} />
                </div>
            </div>
            <div className="mt-[24px] space-y-2 min-h-20">
                <div>
                    <span className="font-extrabold text-gray-800 text-xl">{title}</span>
                </div>
                <div>
                    <span className="font-regular text-base text-gray-500">{text}</span>
                </div>
            </div>
            <div className="flex justify-end  space-x-2 mt-8">
                <div className="flex items-center justify-center w-[82px] h-[40px] border-[1px] border-gray-400 rounded-3xl cursor-pointer">
                    <span className="font-bold text-sm text-gray-500">Cancel</span>
                </div>
                <div className="flex items-center justify-center w-[82px] h-[40px] bg-indigo-600 rounded-3xl cursor-pointer">
                    <span className="font-bold text-sm text-white">Accept</span>
                </div>
            </div>
        </div>
    )
}