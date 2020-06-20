import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/ProductoActions";
import Producto from "../components/Productos";

const Listado = () => {
  const dispatch = useDispatch();

  const producto = useSelector((state) => state.productos.productos);

  useEffect(() => {
    const consulta = () => dispatch(obtenerProductosAction());
    consulta();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Listado Productos</h1>
      <div className="container-table">
        <table className="table">
          <thead className="tr-body-table">
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {producto.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Listado;
