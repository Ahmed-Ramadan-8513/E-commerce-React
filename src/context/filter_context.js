import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,

} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    category: "All",
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });

  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };


  const updateFilters = (e) => {
    // here we want to make the text = value so we set the name = text to change it as we like
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };


  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateFilters,
      
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
