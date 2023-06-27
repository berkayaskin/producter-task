export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-[calc(100vh-3.5rem)] bg-themeBackground lg:pl-[11.5625rem]">
      {children}
    </main>
  )
}
