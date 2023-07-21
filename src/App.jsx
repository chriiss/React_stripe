import "./styles/App.scss"
import { Routes, Route } from "react-router-dom"
import Product from "./components/product/Product"
import Success from "./components/success/Success"
import Cancel from "./components/cancel/Cancel"


const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/cancel" element={<Cancel />}></Route>
      </Routes>
    </section>
  )
}

export default App
