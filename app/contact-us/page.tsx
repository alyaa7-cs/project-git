

import Counter from "../components/Counter";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Raiseup learn solutions",
  description: "Raiseup learn solutions company for training",
};

function  ContactUs() {
  return (
    
    <> 
        <h1>Hello From ContactUs
         page</h1>
        <Counter/>
        </>
   
  );
}

export default  ContactUs;