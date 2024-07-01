import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
            <span className="text-center ms-1">Actualizar</span>
        </button>
      </td>
    </tr>
  )
}
