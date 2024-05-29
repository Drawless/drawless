import { ModalBasic, ModalImage, ModalTextInput } from "../../../components/Modal";
import Notification from "../../../components/Notification";
import Navigation from "../../drawless/ui/Navigation";
import PrismLoader from "../../drawless/utils/PrismLoader";

export default function Home() {

    const title="Insert Your Modal Title"
    const text="A lazy fox jumps over the bloody cyborg, gets its data stolen to the cybernet."
    const code='console.log("hello")'
    return (
        <div className="flex flex-col space-y-24">

            <Navigation  selected={["components", "file_upload"]}  />

            <div className="w-full min-h-[1px] bg-slate-200"> </div>
            <div className="flex flex-col space-y-10">
                <h1 className="text-black">File Upload Components Here...</h1>
            </div>
            <PrismLoader/>
        </div>
);
}
