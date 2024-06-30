import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/ProductContext";

export const ProductForm = ({ initialProductForm, handlerCloseForm}) => {
  
  const [productForm, setProductForm] = useState(initialProductForm);
  const {productSelected, handlerAddProduct} = useContext(ProductContext);
  const {id, nombreProducto, descripcion, precio, stock} = productForm;
  
  useEffect(() => {
    setProductForm({...productSelected});
  }, [productSelected])
  

  const onInputChange = ({target})=>{
    const {name, value} = target;
    setProductForm({
      ...productForm,
      [name]:value
    });
  }
  //save the product
  const onSubmit = (event) =>{
    event.preventDefault();
    
    handlerAddProduct(productForm);
    //clean the form
    setProductForm(initialProductForm);
  }
  const onCloseForm =()=>{
    handlerCloseForm();
    setProductForm(initialProductForm);
  }
  return (
    <form onSubmit={onSubmit}>
        <input 
          className="form-control my-3 w-75"
          placeholder="Producto"
          name="nombreProducto"
          value={nombreProducto}
          onChange={onInputChange} />
        <input
          className="form-control my-3 w-3 w-75"
          placeholder="descripcion"
          name="descripcion" 
          value={descripcion}
          onChange={onInputChange} />
        <input
          className="form-control my-3 w-3 w-75"
          placeholder="precio"
          name="precio" 
          value={precio}
          onChange={onInputChange} />
        <input
          className="form-control my-3 w-3 w-75"
          placeholder="stock"
          name="stock"
          value={stock}
          onChange={onInputChange} />
          <input 
            type="hidden" 
            name="id" 
            value={id} />
          <button
            className="btn btn-primary"
            type="submit">
             {id ==='' ? 'Crear': 'Editar' }
          </button>
          <button 
          className="btn btn-danger mx-2"
          type="button"
          onClick={()=>onCloseForm()}
          >
            Cerrar
          </button>
    </form>
  )
}
