import React from 'react';
//1 Nos sirve para mandar a ejecutar las acciones que tengamos 
// 2 Es una forma de acceder al state dentro del componente
import { useDispatch, useSelector } from 'react-redux';
// Actions de redux
import { crearNuevoProductoAction } from '../actions/productosActions.js';

const NuevoProductos = () =>{

    // Utilizar use dispatch y te crea la funcion

    const dispatch = useDispatch();

                                    //Para usar lo del action 
    //Manda a llamar el action del productoAction
    const agregarProducto = () => dispatch(crearNuevoProductoAction())

    // cuando el usuario haga submit
    const submitNuevoProducto = e =>{
        e.preventDefault();
        
        // Validar formulario

        // Si no hay errores

        // Crear el nuevo producto
        agregarProducto();

    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar nuevo producto
                        </h2>

                        <form 
                            onSubmit={submitNuevoProducto}
                        >
                            <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input 
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre Producto'
                                    name='nombre'
                                />
                                 <div className='form-group'>
                                <label>Precio Producto</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Precio Producto'
                                    name='precio'
                                />
                                </div>

                            </div>

                            <button 
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d_block w-100'
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default NuevoProductos;