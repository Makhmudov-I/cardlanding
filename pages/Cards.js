import React from "react";
import Link from "next/link";
import products from "./products_db";

function Cards() {
  return (
    <div className="mt-4 text-center">
      <h1 className="text-2xl font-medium">Bizning Mahsulotlar</h1>

      {products.map((product, index) => {
        return (
          <div key={product.id} className=" font-semibold flex items-start ml-10">
          <div className=" flex flex-col items-start pt-4">
          <h1 className="text-2xl">{product.name}</h1>
            <p className="text-md font-normal text-[#797979] uppercase pt-4 ">
              {product.title}
            </p>
            <p className="w-10/12 text-sm text-start pt-2  ">
              {product.description}
            </p>
            <Link href={`/card/${product.id}`} as={`/card/${product.id}`}>
              <button className="w-28 h-9 bg-sky-700 text-sm text-white rounded-md mt-4">
                View More
              </button>
            </Link>
          </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
