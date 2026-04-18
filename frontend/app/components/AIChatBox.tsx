import { useState } from "react";

export default function AIChatBox() {
const [isOpen, setIsOpen] = useState(false);

return (
    <div className="fixed bottom-6 right-6 z-50">
    {isOpen && (
    <div className="bg-slate-900 border border-slate-700 w-80 h-96 rounded-xl mb-4 shadow-2xl flex flex-col p-4">
        <h3 className="font-bold text-blue-400 mb-2">AI Assistant</h3>
        <div className="flex-1 overflow-y-auto text-sm text-slate-300">
            <p className="bg-slate-800 p-2 rounded mb-2 italic">Tip: Verified profiles get 3x more visibility!</p>
        </div>
        <input className="bg-slate-800 border-none rounded p-2 text-white" placeholder="Ask anything..." />
        </div>
    )}
    <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
    >
        🤖
    </button>
    </div>
);
}