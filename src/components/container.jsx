export function Container({ children }) {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        {children}
      </div>
    </main>
  )
}
