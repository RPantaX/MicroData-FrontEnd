import { useContext,useState } from "react"
import { ProductRow } from "./ProductRow"
import { ProductContext } from "../context/ProductContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const ProductsList = () => {
    const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de productos</h2>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(
            ({ id, nombreProducto, descripcion, precio, stock }) => (
              <ProductRow
                key={id}
                id={id}
                nombreProducto={nombreProducto}
                descripcion={descripcion}
                precio={precio}
                stock={stock}
              />
            )
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="btn btn-outline-primary mr-2"
          >
            <FontAwesomeIcon icon={faChevronLeft} /> Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="btn btn-outline-primary ms-2"
          >
            Siguiente <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div>
          <span>{`Página ${currentPage} de ${totalPages}`}</span>
        </div>
        <div>
          <span>{`Total de productos: ${products.length}`}</span>
        </div>
      </div>
    </div>
  )
}
