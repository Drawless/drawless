import Image from 'next/image'
import { Info, X, User, Question } from "@phosphor-icons/react/dist/ssr"
import { ButtonContained, ButtonOutlined } from "./Button"
import image from "../../../public/image.jpg"
export function ModalBasic(){
    const title="Insert Your Modal Title"
    const text="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet."
    return(
        <div className="min-h-[280px] w-[500px] rounded-3xl shadow-lg p-6 bg-white">
            <div className="flex justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 cursor-help">
                    <Info color="#4F46E5" weight="bold" size={24} />
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full cursor-pointer hover:bg-gray-100">
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
                <ButtonOutlined text="Cancel" />
                <ButtonContained text="Accept" color="indigo"/>
            </div>
        </div>
    )
}

export function ModalImage(){
    const title="Insert Your Modal Title"
    const text="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet."
    return(
        <div className="min-h-[280px] w-[500px] rounded-3xl shadow-lg p-6 bg-white">
            <div className="flex justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 cursor-help">
                    <Info color="#4F46E5" weight="bold" size={24} />
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full cursor-pointer hover:bg-gray-100">
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
            <div className="h-[240px] w-[452px] rounded-3xl bg-gray-200 mt-6">
                <Image src={image} alt="ModalPicture" className='h-[240px] w-[452px] rounded-3xl object-cover'/>
            </div>
            <div className="flex justify-end  space-x-2 mt-8">
                <ButtonOutlined text="Cancel" />
                <ButtonContained text="Accept" color="indigo"/>
            </div>
        </div>
    )
}

export function ModalTextInput(){
    const title="Insert Your Modal Title"
    const text="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet."
    return(
        <div className="min-h-[280px] w-[500px] rounded-3xl shadow-lg p-6 bg-white">
            <div className="flex justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 cursor-help">
                    <Info color="#4F46E5" weight="bold" size={24} />
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full cursor-pointer hover:bg-gray-100">
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
            <div className='relative flex items-center h-12 w-[452px] mt-6'>
                <div className='absolute left-4'>
                    <User size={20} weight='bold' color='#475569'/>
                </div>
                <input className='px-10 h-12 w-[452px] rounded-3xl border-[1px] border-gray-400' placeholder='Placeholder Text'/>
                <div className='absolute right-4 cursor-help'>
                    <Question size={20} weight='bold' color='#CBD5E1'/>
                </div>
            </div>
            <div className="flex justify-end  space-x-2 mt-8">
                <ButtonOutlined text="Cancel" />
                <ButtonContained text="Accept" color="indigo"/>
            </div>
        </div>
    )
}