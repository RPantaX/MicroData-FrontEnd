import React from 'react'
import { useProduct } from '../hooks/useProduct';
import { ProductContext } from './ProductContext';

export const ProductProvider = ({children}) => {
    const {
        products,
        productSelected,
        initialProductForm,
        visibleForm,
        handlerOpenForm,
        handlerCloseForm,
        handlerAddProduct,
        handlerProductSelectedForm,
        getProducts
      } = useProduct();

    return(
        <ProductContext.Provider value={
            {
                products,
                productSelected,
                initialProductForm,
                visibleForm,
                handlerOpenForm,
                handlerCloseForm,
                handlerAddProduct,
                handlerProductSelectedForm,
                getProducts
            }
        }>
            {children}
        </ProductContext.Provider>
    )
}
