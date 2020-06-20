import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { guardarProductoAction } from "../actions/ProductoActions";

const NuevoProducto = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const guardarProducto = (e) => {
    e.preventDefault();

    if (name.trim === "" || price <= 0) {
      console.log("error campos incorrectos");
    }

    const nombre = name;
    const precio = price;
    dispatch(
      guardarProductoAction({
        nombre,
        precio,
      })
    );
    history.push('/')
  };
  return (
    <div className="container-new">
      <div className="container-new-product">
        <div className="container-title-form">
          <h1>Nuevo Producto</h1>
        </div>
        <div className="container-form">
          <form className="form-product" onSubmit={guardarProducto}>
            <div className="container-input">
              <div className="display-label">
                <label>Nombre</label>
              </div>
              <input
                type="text"
                placeholder="Ingrese el nombre"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="container-input">
              <div className="display-label">
                <label>Precio</label>
              </div>
              <input
                type="number"
                placeholder="Ingrese el precio"
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
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

export default NuevoProducto;
