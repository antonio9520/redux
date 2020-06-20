import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Listado from "./components/Listado";
import { Provider } from "react-redux";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
import store from "./store";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Route exact path="/" component={Listado} />
        <Route exact path="/nuevoProducto" component={NuevoProducto} />
        <Route exact path="/editarProducto/:id" component={EditarProducto}></Route>
      </Provider>
    </Router>
  );
}

export default App;
