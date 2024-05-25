export function ButtonContained({ text, color }) {
    const colorClasses = {
        indigo: "bg-indigo-600 hover:bg-indigo-500",
        blue: "bg-blue-600 hover:bg-blue-500",
        green: "bg-green-600 hover:bg-green-500",
        red: "bg-red-600 hover:bg-red-500",
    };
    const selectedColorClass = colorClasses[color] || colorClasses.indigo
    return (
        <div className={`flex items-center justify-center min-w-[82px] px-4 h-[40px] rounded-3xl cursor-pointer ${selectedColorClass}`}>
            <span className="font-bold text-sm text-white">{text}</span>
        </div>
    );
}

export function ButtonOutlined({ text }) {
    return (
        <div className="flex items-center justify-center min-w-[82px] px-4 h-[40px] border-[1px] border-gray-400 rounded-3xl cursor-pointer hover:bg-gray-100">
            <span className="font-bold text-sm text-gray-500">{text}</span>
        </div>
    );
}

