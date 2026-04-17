export default function FilterBar({ filters, active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none" role="group">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          aria-pressed={active === value}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors
            ${active === value
              ? 'bg-accent border-accent text-white'
              : 'border-surface-border text-slate-400 hover:text-slate-200 hover:border-slate-500'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
