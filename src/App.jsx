import { useContext, useEffect } from 'react';
import './App.css'
import { ProductModalForm } from './components/ProductModalForm';
import { ProductsList } from './components/ProductsList'
import { ProductContext } from './context/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
  const {
    products,
    visibleForm,
    handlerOpenForm,
    getProducts
  } = useContext(ProductContext);
  
  useEffect(()=>{
    getProducts();
  },[])

  return (
    <>
      {!visibleForm || 
        <ProductModalForm
          />
      } 

      <div className='container my-4'>
          <h2>GESTION DE INVENTARIO</h2>
          <div className='row'>
            <div className='col'>
              {visibleForm || <button
              className='btn btn-primary my-2'
              onClick={handlerOpenForm}>
                <FontAwesomeIcon icon={faPlus} />
                <span className="ms-2">Nuevo Producto</span>
              </button> }
              
              {products.length ===0
                ? <div className='alert alert-warning'>No hay productos en el sistema</div>
                : <ProductsList
                  />
              }
              
            </div>   
          </div>
              
      </div>
    </>
    
  )
}

export default App
