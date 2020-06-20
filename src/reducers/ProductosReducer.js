import {
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
  GUARDAR_PRODUCTO_ERROR,
  GUARDAR_PRODUCTO_EXITO,
  GUARDAR_PRODUCTO,
  ELIMINAR_PRODUCTO_ERROR,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO,
  OBTENER_EDITAR,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO,
} from "../types";

const initialState = {
  productos: [],
  loading: false,
  error: false,
  productoeditar: null,
  productoeliminar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        loading: action.payload,
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productoeliminar: action.payload,
        loading: true,
      };
    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        productos: action.payload,
        loading: false,
        error: false,
      };
    case GUARDAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
        error: false,
      };
    case GUARDAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: [...state.productos, action.payload],
      };
    case GUARDAR_PRODUCTO_ERROR:
    case ELIMINAR_PRODUCTO_ERROR:
    case OBTENER_PRODUCTOS_ERROR:
    case EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoeliminar
        ),
        productoeliminar: null,
      };
    case OBTENER_EDITAR:
      return {
        ...state,
        productoeditar: action.payload,
      };
    case EDITAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        ),
      };
    default:
      return state;
  }
}
