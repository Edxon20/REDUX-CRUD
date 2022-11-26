import {
    AGREGAR_PRODUCTO ,
    AGREGAR_PRODUCTO_EXITO ,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_EXITO,
    COMENZAR_DESCARGA_ERROR, 
    COMENZAR_DESCARGA_PRODUCTO,
    DESCARGA_PRODUCTO_EXITO,
    DESCARGA_PRODUCTO_ERROR
} from '../types'

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'


// Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) =>{
        dispatch( agregarProducto() );    
        try {
            //iNSERTAR EN LA API
            await clienteAxios.post('/productos', producto);

            //Si todo sale bien se actualiza el state
            dispatch( agregarProductoExito(producto) );

            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )

        } catch (error) {
            console.log(error);
            //Si hay un error cambiar el state
            dispatch( agregarProductoError(true) );

            //Alerta de error
            Swal.fire({
                icon: 'error',
                tittle:'Hubo un error',
                text: 'Hubo un errorm intenta de nuevo'
            })
        }
    }
}


const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// Si el producto se guarda en una base de datos 
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

// Si hubo un error

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

// Funcion que descarga los productos de la base de datos

export function obtenerProductosAction(){
    return async (dispatch) =>{
        dispatch( descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('./productos');
            dispatch( descargaProductosExitosa(respuesta.data) )

        } catch (error) {
            console.log(error);
            dispatch( descargarProductosError())
        }

    }
}

const descargarProductos = () =>({
    type: COMENZAR_DESCARGA_PRODUCTO,
    payload: true
})

const descargaProductosExitosa = productos =>({
    type: DESCARGA_PRODUCTO_EXITO,
    payload: productos
})

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTO_ERROR,
    payload: true
})