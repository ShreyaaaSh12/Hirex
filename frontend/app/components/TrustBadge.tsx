export default function TrustBadge({ level }: { level: number }) {
const config = [
    { label: 'Unverified', color: 'bg-gray-500' },
    { label: 'Human Verified', color: 'bg-green-600' },
    { label: 'Identity Authenticated', color: 'bg-blue-600' }
];

return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-white ${config[level].color}`}>
    <span>✓</span> {config[level].label}
    </div>
);
}