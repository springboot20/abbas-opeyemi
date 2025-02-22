
export function Container({ children }: { children: React.ReactNode }) {
  return <span className="flex items-center justify-center h-12 w-12 overflow-hidden">{children}</span>;
}
