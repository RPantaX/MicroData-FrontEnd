# Frontend de Gestión de Inventarios

Este es el frontend de una aplicación de gestión de inventarios construida con Vite y React.

## Estructura del Proyecto
/project-root
/components
ProductModalForm.jsx
ProductsList.jsx
/context
ProductContext.jsx
ProductProvider.jsx
/hooks
useProduct.jsx
/reducers
productReducer.jsx
/services
productService.js
/App.jsx
/App.css
/index.html
/package.json
/vite.config.js

## Prerrequisitos

- Node.js v14 o superior
- npm o yarn instalados globalmente

## Configuración

1. Clona el repositorio del frontend:
   ```bash
   git clone https://github.com/RPantaX/MicroData-FrontEnd.git
   cd microdata-frontend
2. Instala las dependencias:
    npm install
    o usando yarn
    yarn install
# Desarrollo Local
Para ejecutar el servidor de desarrollo de Vite:
    npm run dev
    # o usando yarn
    yarn dev
Esto iniciará el servidor de desarrollo y podrás acceder a tu aplicación en http://localhost:3000.

# Estructura de Vite Config
El archivo vite.config.js configura Vite para compilar tu proyecto React con las configuraciones necesarias.

# Uso
- Nuevo Producto: Haz clic en "Nuevo Producto" para abrir el formulario de creación.
- Listar Productos: Visualiza todos los productos disponibles en el sistema.
- Actualizar Stock: Los cambios en el stock se reflejan automáticamente desde el backend.
- Construcción y Despliegue
    Para construir tu aplicación para producción:
    npm run build
    o usando yarn
    yarn build