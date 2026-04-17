export default function TagBadge({ label }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
      {label}
    </span>
  )
}
