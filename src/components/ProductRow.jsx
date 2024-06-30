import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

export const ProductRow = ({id, nombreProducto, descripcion, precio, stock}) => {
  const {handlerProductSelectedForm} = useContext(ProductContext);
  return(
    <tr>
      <td>{id}</td>
      <td>{nombreProducto}</td>
      <td>{descripcion}</td>
      <td>{precio}</td>
      <td>{stock}</td>
      <td>
        <button 
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() =>handlerProductSelectedForm({
            id,
            nombreProducto,
            descripcion,
            precio,
            stock
          })}
        >
            actualizar
        </button>
      </td>
    </tr>
  )
}
