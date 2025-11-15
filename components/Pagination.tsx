"use client";

export default function Pagination({ current = 1, total = 1 }: { current?: number; total?: number }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  // For a static UI similar to the screenshot, we render: 1 2 3 ... 12 Next >
  return (
    <nav className="w-full flex items-center justify-center">
      <ul className="flex items-center gap-4 text-gray-800">
        {pages.slice(0, 3).map((p) => (
          <li key={p}>
            <button
              className={
                "px-2 py-1 text-sm " + (p === current ? "font-semibold" : "hover:underline")
              }
              aria-current={p === current ? "page" : undefined}
            >
              {p}
            </button>
          </li>
        ))}
        {total > 3 && <li className="text-gray-500">…</li>}
        {total > 3 && (
          <li>
            <button className="px-2 py-1 text-sm hover:underline">{total}</button>
          </li>
        )}
        <li>
          <button className="px-2 py-1 text-sm hover:underline">Next</button>
        </li>
      </ul>
    </nav>
  );
}
