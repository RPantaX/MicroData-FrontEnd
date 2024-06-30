import { useContext } from "react"
import { ProductRow } from "./ProductRow"
import { ProductContext } from "../context/ProductContext"

export const ProductsList = () => {
    const {products} = useContext(ProductContext);
  return (
    <>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(({id, nombreProducto, descripcion, precio, stock}) =>{
                        return(
                            <ProductRow 
                            key={id} 
                            id={id} 
                            nombreProducto={nombreProducto} 
                            descripcion={descripcion} 
                            precio={precio} 
                            stock={stock}/>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}
