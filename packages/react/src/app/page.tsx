import dynamic from "next/dynamic"

const NjcButtonComponent = dynamic(import("../../../lit-vite/src/button/button.component"), {
  ssr: false
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-slate-800">
      <div>A button!</div>
      <NjcButtonComponent></NjcButtonComponent>
    </main>
  );
}
