// Highlights [placeholder] text so it is easy to find and replace.
export default function Ph({ children }) {
  const t = String(children)
  const parts = t.split(/(\[[^\]]+\])/g)
  return parts.map((p, i) => p.startsWith('[')
    ? <span key={i} className="rounded bg-amber-400/10 px-1 text-amber-300 underline decoration-dashed underline-offset-4">{p}</span>
    : p)
}
