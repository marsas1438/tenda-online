import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "../faces/HomePage";
import ProductDetail from "../faces/ProductDetail";

const RoutePath  = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} >
          </Route>
          <Route path={'/detalle/:idProduct'} element={<ProductDetail />} >
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default RoutePath 
