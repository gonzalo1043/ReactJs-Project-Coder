import './App.css'
import CategoryContainer from './components/CategoryContainer/CategoryContainer'
import VinylDetailContainer from './components/VinylDetailContainer/VinylDetailContainer'
import ItemsListContainer from './components/itemsListContainer/itemsListContainer'
import NavBar from './components/navBar/Navegador'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './Notification/NotificationService'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import ItemsListContainerNR from './components/itemsListContainer2/itemsListContainerNR'
import ItemsListContainerDiscount from './components/ItemsListContainerDiscount/ItemsListContainerDiscount'





function App() {
  return (
    <>
    <NotificationProvider>
      <CartProvider>
      
      <BrowserRouter>
      
      <NavBar/>
      
      <Routes>

        <Route path='/catalogo' element={<ItemsListContainer greeting='Catalogo'/>}></Route>

        <Route path='/category' element= {<CategoryContainer/>}></Route>

        <Route path='/category/:categoryId' element={<ItemsListContainer greeting='Vinilos por categoría'/>}>
        </Route>
        
        <Route path='/vinylDetail/:vinylId' element={<VinylDetailContainer/>}></Route>

        <Route path='/newReleases/:newReleasesId' element={<ItemsListContainerNR greeting='Nuevos Lanzamientos'/>}></Route>

        <Route path='/descuento/:descuentoId' element={<ItemsListContainerDiscount greeting='Descuentos' />}></Route>

        <Route path='/cart' element={<Cart />}></Route>

        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
      </BrowserRouter>
      
      </CartProvider>
      </NotificationProvider>
    </>
  )
}

export default App
