import Notification from "./components/Notification";
import Modal from "./components/Modal";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

export default function Home() {
    return (
        <div className="flex flex-col space-y-12">
            <div className="flex flex-row items-center space-x-6">
                <h1 className="font-plus-jakarta-sans bg-slate-900 text-white font-bold text-2xl rounded-full py-6 px-16 cursor-pointer hover:bg-slate-800">Components</h1>
                <ArrowRight color="#000000" weight="regular" size={40} />
                <h1 className="font-plus-jakarta-sans border-4 border-neutral-900 text-black font-bold text-2xl rounded-full py-6 px-16 cursor-pointer hover:bg-slate-200">Alerts & Notifications</h1>
            </div>
            <h1 className="text-6xl text-slate-800 font-bold">Notification</h1>
            <p className="text-slate-500">Notifications are like little digital poke-ins (without the actual effort of poking). Deliver your message, but don't expect them to jump up right away.</p>
            <ModalBasic />
            <ModalImage />
        </div>
);
}
