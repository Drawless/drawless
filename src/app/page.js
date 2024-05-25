import Notification from "./components/Notification";
import Modal from "./components/Modal";

export default function Home() {
    return (
        <div className="flex flex-col space-y-8">
            <h1 className="text-6xl text-slate-800 font-bold">Notification</h1>
            <p className="text-slate-500">Notifications are like little digital poke-ins (without the actual effort of poking). Deliver your message, but don't expect them to jump up right away.</p>
            <Modal />
        </div>
);
}
