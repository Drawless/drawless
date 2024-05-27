import { ModalBasic, ModalImage, ModalTextInput } from "./components/Modal";
import Notification from "./components/Notification";
import { ArrowRight, Info, X } from "@phosphor-icons/react/dist/ssr"
import PrismLoader from "./drawless/PrismLoader";

export default function Home() {

    const title="Insert Your Modal Title"
    const text="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet."
    const code='console.log("hello")'
    return (
        <div className="flex flex-col space-y-24">

            <Navigation />

            <div className="w-full min-h-[1px] bg-slate-200"> </div>
            <div className="flex flex-col space-y-10">
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
