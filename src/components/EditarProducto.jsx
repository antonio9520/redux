import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editarProductoAction } from "../actions/ProductoActions";

const EditarProducto = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const productoeditar = useSelector((state) => state.productos.productoeditar);

  useEffect(() => {
    if (!productoeditar) return;
    setProducto(productoeditar);
  }, [productoeditar]);

  const changeEditar = (e) => {
    setProducto({...producto, [e.target.name] : e.target.value});
  };
  const { nombre, precio } = producto;
  const submitEditar = (e) => {
    e.preventDefault();

    if (nombre.trim === "" || precio <= 0) return null;

    dispatch(editarProductoAction(producto));

    history.push("/");
  };
  return (
    <div className="container-new">
      <div className="container-new-product">
        <div className="container-title-form">
          <h1>Editar Producto</h1>
        </div>
        <div className="container-form">
          <form className="form-product" onSubmit={submitEditar}>
            <div className="container-input">
              <div className="display-label">
                <label>Nombre</label>
              </div>
              <input
                type="text"
                name='nombre'
                defaultValue={nombre}
                placeholder="Ingrese el nombre"
                onChange={changeEditar}
              ></input>
            </div>
            <div className="container-input">
              <div className="display-label">
                <label>Precio</label>
              </div>
              <input
                type="number"
                name='precio'
                defaultValue={precio}
                onChange={changeEditar}
                placeholder="Ingrese el precio"
              ></input>
            </div>
            <button className="action-btn-save" type="submit">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
