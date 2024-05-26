import { ModalBasic, ModalImage, ModalTextInput } from "./components/Modal";
import Notification from "./components/Notification";
import { ArrowRight, Info, X } from "@phosphor-icons/react/dist/ssr"
import PrismLoader from "./drawless/PrismLoader";

export default function Home() {

    const title="Insert Your Modal Title"
    const text="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet."
    const code='console.log("hello")'
    return (
        <div className="flex flex-col space-y-16">
            <div className="flex flex-row items-center space-x-6">
                <h1 className="font-plus-jakarta-sans bg-slate-900 text-white font-bold text-2xl rounded-full py-6 px-16 cursor-pointer hover:bg-slate-800">Components</h1>
                <ArrowRight color="#000000" weight="regular" size={40} />
                <h1 className="font-plus-jakarta-sans border-4 border-neutral-900 text-black font-bold text-2xl rounded-full py-6 px-16 cursor-pointer hover:bg-slate-200">Alerts & Notifications</h1>
            </div>

            <div className="w-full min-h-[1px] bg-slate-200"> </div>
            <div className="flex flex-col space-y-10">
                <h1 className="text-6xl text-slate-800 font-bold">Notification</h1>
                <p className="text-slate-500">Notifications are like little digital poke-ins (without the actual effort of poking). Deliver your message, but don't expect them to jump up right away.</p>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-between space-x-8">
                        <Notification color="gray" />
                        <pre className="language-ts w-full">
                            <code className="language-ts">
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-between space-x-8">
                        <Notification color="indigo" />
                        <pre className="language-ts w-full">
                            <code className="language-ts">
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-between space-x-8">
                        <Notification color="green" />
                        <pre className="language-ts w-full">
                            <code className="language-ts">
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-between space-x-8">
                        <Notification color="red" />
                        <pre className="language-ts w-full">
                            <code className="language-ts">
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-between space-x-8">
                        <ModalBasic />
                        <pre className="language-ts w-full">
                            <code className="language-ts">
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-between space-x-8">
                        <ModalTextInput />
                        <pre className="language-ts w-full">
                            <code className="language-ts">
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-between space-x-8">
                        <ModalImage />
                        <pre className="language-ts w-full">
                            <code className="language-ts">
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <PrismLoader/>
        </div>
);
}
