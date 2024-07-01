import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/ProductContext";

export const ProductForm = ({ initialProductForm, handlerCloseForm}) => {
  
  const [productForm, setProductForm] = useState(initialProductForm);
  const [errors, setErrors] = useState({});
  const { productSelected, handlerAddProduct } = useContext(ProductContext);
  const { id, nombreProducto, descripcion, precio, stock } = productForm;
  
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
  const validateForm = () => {
    const newErrors = {};
    if (!nombreProducto || nombreProducto.trim() === "") {
      newErrors.nombreProducto = "El nombre del producto es requerido";
    }
    if (!descripcion || descripcion.trim() === "") {
      newErrors.descripcion = "La descripción es requerida";
    }
    if (
      !precio ||
      !/^(\d+(\.\d{1,2})?)?$/.test(precio) ||
      Number(precio) <= 0
    ) {
      newErrors.precio = "El precio debe ser un número positivo";
    }
    if (!stock || !/^\d+$/.test(stock) || Number(stock) < 0) {
      newErrors.stock = "El stock debe ser un número no negativo y entero";
    }
    return newErrors;
  };
  //save the product
  const onSubmit = async(event) =>{
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      await handlerAddProduct(productForm); // Agregar el producto al contexto
      setProductForm(initialProductForm); // Limpiar el formulario después de agregar el producto
    } else {
      setErrors(formErrors);
    }
  }
  const onCloseForm =()=>{
    handlerCloseForm();
    setProductForm(initialProductForm);
  }
  const validateNumberInput = (value) => {
    return /^[\d.]*$/.test(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          className={`form-control my-3 w-75 ${
            errors.nombreProducto ? "is-invalid" : ""
          }`}
          placeholder="Producto"
          name="nombreProducto"
          value={nombreProducto}
          onChange={onInputChange}
          disabled={id !== ""}
        />
        {errors.nombreProducto && (
          <div className="invalid-feedback">{errors.nombreProducto}</div>
        )}
      </div>
      <div className="form-group">
        <input
          className={`form-control my-3 w-75 ${
            errors.descripcion ? "is-invalid" : ""
          }`}
          placeholder="Descripción"
          name="descripcion"
          value={descripcion}
          onChange={onInputChange}
          disabled={id !== ""}
        />
        {errors.descripcion && (
          <div className="invalid-feedback">{errors.descripcion}</div>
        )}
      </div>
      <div className="form-group">
        <input
          className={`form-control my-3 w-75 ${
            errors.precio ? "is-invalid" : ""
          }`}
          placeholder="Precio"
          name="precio"
          value={precio}
          disabled={id !== ""}
          onChange={({ target }) => {
            if (validateNumberInput(target.value)) {
              onInputChange({ target });
            }
          }}
        />
        {errors.precio && (
          <div className="invalid-feedback">{errors.precio}</div>
        )}
      </div>
      <div className="form-group">
        <input
          className={`form-control my-3 w-75 ${
            errors.stock ? "is-invalid" : ""
          }`}
          placeholder="Stock"
          name="stock"
          value={stock}
          onChange={({ target }) => {
            if (validateNumberInput(target.value)) {
              onInputChange({ target });
            }
          }}
        />
        {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
      </div>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-primary" type="submit">
        {id === "" ? "Crear" : "Editar"}
      </button>
      <button
        className="btn btn-danger mx-2"
        type="button"
        onClick={onCloseForm}
      >
        Cerrar
      </button>
    </form>
  )
}
