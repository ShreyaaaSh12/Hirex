export default function Marketplace() {
const items = [
    { title: "Series A Funding", company: "TechCorp", type: "Investment", sponsored: true },
    { title: "B2B Cloud Services", company: "DataFlow", type: "Service Exchange", sponsored: false }
];

return (
    <div className="p-8 bg-slate-950 min-h-screen text-white">
    <div className="flex justify-between items-end mb-10">
        <div>
        <h1 className="text-4xl font-bold">Marketplace</h1>
        <p className="text-slate-400">Discover funding, partnerships, and services. [cite: 222, 236]</p>
        </div>
        <button className="bg-blue-600 px-6 py-2 rounded-lg font-bold">Create Campaign</button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
        <div key={i} className={`p-6 rounded-xl border ${item.sponsored ? 'border-blue-500 bg-blue-900/10' : 'border-slate-800 bg-slate-900'}`}>
            {item.sponsored && <span className="text-[10px] bg-blue-600 px-2 py-0.5 rounded text-white font-bold mb-2 inline-block">SPONSORED</span>}
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-slate-400 mb-4">{item.company}</p>
            <div className="text-xs text-slate-500 mb-4 uppercase tracking-widest">{item.type}</div>
            <button className="w-full bg-slate-800 py-2 rounded hover:bg-slate-700">View Details</button>
        </div>
        ))}
    </div>
    </div>
);
}