import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";


const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();



  if (grid_view === true) {
    return <GridView products={products}/>;
  }

 
};

export default ProductList;
