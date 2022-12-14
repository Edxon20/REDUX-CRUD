import React, {Fragment, useEffect} from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {obtenerProductosAction}  from '../actions/productosActions.js';
import Producto from './Producto'

const Productos = () =>{

    const dispatch = useDispatch();
    
    useEffect( () =>{
        // Consultar la API
        const cargarProductos = () => dispatch( obtenerProductosAction()  );
        cargarProductos();

    },[])

    // obtener el state 
    const productos = useSelector( state => state.productos.productos );
    const error = useSelector( state=> state.productos.error );
    const cargando = useSelector( state => state.loading );
    

    return (
        <Fragment>

            <h2 className='text-center my-5'>Listado de Productos</h2>
            {error ?<p className='font-weigth-bold alert alert-danger text-center mt-4'>Hubo un error</p> : null}
            { cargando ? <p className='text-center'> Cargando. . . </p> : null }
            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.length === 0 ? 'No hay productos' : (
                        productos[0].map(producto => (
                            <Producto 
                                //producto.id lo da el provio JSON Server
                                key= {producto.id}
                                producto={producto}
                            />
                        ))
                    ) }
                </tbody>
            </table>

        </Fragment>
    )


}

export default Productos;