import "../../../lit-vite/dist/assets/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>A button!</div>
      {/* @ts-ignore */}
      <njc-button></njc-button>
    </main>
  );
}
