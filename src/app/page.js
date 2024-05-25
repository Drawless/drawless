import Notification from "./components/Notification";
import Modal from "./components/Modal";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="container m-auto rounded-[64px] bg-slate-100 text-black">
                <div className="p-48 font-plus-jakarta-sans flex flex-col space-y-8">
                    <h1 className="text-6xl text-slate-800 font-bold">Notification</h1>
                    <p className="text-slate-500">Notifications are like little digital poke-ins (without the actual effort of poking). Deliver your message, but don't expect them to jump up right away.</p>
                </div>
            </div>
        </div>
);
}
