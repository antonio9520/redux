import React from "react";
import { eliminarProductoAction } from "../actions/ProductoActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { obtenerEditarAction } from "../actions/ProductoActions";

const Productos = ({ producto }) => {
  const { nombre, precio, id } = producto;
  const dispatch = useDispatch();
  const history = useHistory();

  const eliminarProducto = (id) => {
    dispatch(eliminarProductoAction(id));
  };

  const redirectEdit = (producto) => {
    dispatch(obtenerEditarAction(producto));
    history.push(`/editarProducto/${producto.id}`);
  };
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span>$ </span>
        {precio}
      </td>
      <td>
        <button
          className="action-btn-edit"
          onClick={() => redirectEdit(producto)}
        >
          Editar
        </button>
        <button
          className="action-btn-delete"
          onClick={() => eliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Productos;
