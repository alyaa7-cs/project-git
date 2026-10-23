import Counter from "../components/Counter";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Raiseup learn solutions",
  description: "Raiseup learn solutions company for training",
};

function  About() {
  return (
    
    <> 
        <h1>Hello From About page</h1>
        <Counter/>
        </>
   
  );
}

export default  About;