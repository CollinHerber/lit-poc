import {NjcButtonComponent} from "../../../lit-vite/src/button/button.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>A button!</div>
      <NjcButtonComponent></NjcButtonComponent>
    </main>
  );
}
