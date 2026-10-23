import Counter from "../components/Counter";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Raiseup learn solutions",
  description: "Raiseup learn solutions company for training",
};

function AboutPage() {
  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hello From About page</h1>
        <Counter/>
      </main>
    </div>
  );
}

export default AboutPage;