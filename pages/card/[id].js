import { useRouter } from "next/router";
import React from "react";
import products  from "../products_db";

function Cards({ props }) {
  const router = useRouter();
  const { id } = router.query;
  return (  
    <div>
      {products
        .filter((product) => product.id == id)
        .map((card, index) => (
          <div key={card.id} className="text-center bg-red-300">
            <h1 className="font-extrabold">{card.islam}</h1>
          </div>
        ))} 
    </div>
  );
}
export default Cards;
