import { useReducer, useState } from "react";
import { productReducer } from "../reducers/productReducer";
import Swal from "sweetalert2";
import { findAll, save, update } from "../services/productService";

const initialProduct = [];
  const initialProductForm={
    id:'',
    nombreProducto:'',
    descripcion:'',
    precio:0,
    stock:0
  }

export const useProduct = () => {
    const [products, dispatch] = useReducer(productReducer, initialProduct);
    const [productSelected, setProductSelected] = useState(initialProductForm);
    const [visibleForm, setVisibleForm] = useState(false);

    const getProducts = async()=>{
      const result = await findAll();
      dispatch({
        type: 'loadingProducts',
        payload: result.data,
      });
    }
    const handlerAddProduct = async (prod)=>{
      let response;
      Swal.fire({
        title: (prod.id=='') ? '¿Estás seguro que deseas crear este producto?': '¿Estás seguro que deseas actualizar este producto?',
        text: "Tú no podrás revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: (prod.id=='')?'Sí, crear!':"Sí, actualizar!"
      }).then( async(result) => {
        if (result.isConfirmed) {
          if (prod.id === '') {
            response = await save(prod);
            if (response) {
              dispatch({
                type: 'addProduct',
                payload: response.data
              });
            }
          } else {
              // Actualizar solo el stock
              response = await update(prod.id, prod.stock);
              if (response && response.status === 200) {
                dispatch({
                  type: 'updateProduct',
                  payload: { id: prod.id, stock: response.data.newStock }
                });
              }
          }
          Swal.fire({
            title: (prod.id === '') ? 'creado' : "actualizado",
            text: (prod.id === '') ? 'El producto ha sido creado' : "El producto ha sido actualizado",
            icon: "success"
          });
        }
      });
      handlerCloseForm(false);
    }
    const handlerProductSelectedForm = (prod)=>{
      setVisibleForm(true);
      setProductSelected({...prod});
    }
    const handlerOpenForm = ()=>{
      setVisibleForm(true);
    }
    const handlerCloseForm = ()=>{
      setVisibleForm(false);
      setProductSelected(initialProductForm);
    }
    return{
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
}
