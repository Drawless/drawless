import Notification from "./components/Notification";
import Modal from "./components/Modal";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow-500">
            <Notification />
            <Modal />
        </div>
);
}
