import {
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_ERROR,
  OBTENER_PRODUCTOS_EXITO,
  GUARDAR_PRODUCTO,
  GUARDAR_PRODUCTO_ERROR,
  GUARDAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
  OBTENER_EDITAR,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO_EXITO,
} from "../types";
import clienteAxios from "../config/axios";

export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(obtenerProductos());
    try {
      const data = await clienteAxios.get("/productos/");
      dispatch(obtenerProductosExito(data.data));
    } catch (error) {
      dispatch(obtenerProductosError);
    }
  };
}

const obtenerProductos = () => ({
  type: OBTENER_PRODUCTOS,
  payload: true,
});

const obtenerProductosExito = (productos) => ({
  type: OBTENER_PRODUCTOS_EXITO,
  payload: productos,
});

const obtenerProductosError = () => ({
  type: OBTENER_PRODUCTOS_ERROR,
});

export function guardarProductoAction(producto) {
  return async (dispatch) => {
    dispatch(guardarProducto());
    try {
      await clienteAxios.post("/productos/", producto);
      dispatch(guardarProductoExito(producto));
    } catch (error) {
      dispatch(guardarProductoError());
    }
  };
}

const guardarProducto = () => ({
  type: GUARDAR_PRODUCTO,
  payload: true,
});

const guardarProductoExito = (producto) => ({
  type: GUARDAR_PRODUCTO_EXITO,
  payload: producto,
});

const guardarProductoError = () => ({
  type: GUARDAR_PRODUCTO_ERROR,
});

export function eliminarProductoAction(id) {
  return async (dispatch) => {
    dispatch(eliminarProducto(id));
    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito(id));
    } catch (error) {
      dispatch(eliminarProductoError());
    }
  };
}

const eliminarProducto = (id) => ({
  type: ELIMINAR_PRODUCTO,
  payload: id,
});

const eliminarProductoExito = (id) => ({
  type: ELIMINAR_PRODUCTO_EXITO,
  payload: id,
});

const eliminarProductoError = () => ({
  type: ELIMINAR_PRODUCTO_ERROR,
});

export function obtenerEditarAction(producto) {
  return (dispatch) => {
    dispatch(obtenerEditar(producto));
  };
}

const obtenerEditar = (producto) => ({
  type: OBTENER_EDITAR,
  payload: producto,
});

export function editarProductoAction(producto) {
  return async (dispatch) => {
    dispatch(editarProducto());
    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto);
      dispatch(editarProductoExito(producto));
    } catch (error) {
      dispatch(editarProductoError());
    }
  };
}

const editarProducto = () => ({
  type: EDITAR_PRODUCTO,
  payload: true,
});

const editarProductoExito = (producto) => ({
  type: EDITAR_PRODUCTO_EXITO,
  payload: producto,
});

const editarProductoError = () => ({
  type: EDITAR_PRODUCTO_ERROR,
});
