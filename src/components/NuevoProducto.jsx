import React, { useState } from 'react';
//1 Nos sirve para mandar a ejecutar las acciones que tengamos 
// 2 Es una forma de acceder al state dentro del componente
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Actions de redux
import { crearNuevoProductoAction } from '../actions/productosActions.js';

const NuevoProductos = () =>{
    const navigate = useNavigate();

    //State del componente
    const [nombre,guardarNombre] = useState('');
    const [precio,guardarPrecio] = useState(0);

    


    // Utilizar use dispatch y te crea la funcion

    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector( (state) => state.productos.loading  )
    const error = useSelector(state => state.productos.error);


                                    //Para usar lo del action 
    //Manda a llamar el action del productoAction
    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))

    // cuando el usuario haga submit
    const submitNuevoProducto = e =>{
        e.preventDefault();
        
        // Validar formulario
        if(nombre.trim() === '' || precio <= 0){
            return;
        }

        // Si no hay errores

        // Crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        // Redireccionar
        navigate('/')
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
                                    value = {nombre}
                                    onChange = {e=>guardarNombre(e.target.value)}
                                />
                                 <div className='form-group'>
                                <label>Precio Producto</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Precio Producto'
                                    name='precio'
                                    value = {precio}
                                    onChange = {e=>guardarPrecio(Number(e.target.value))}
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
                        {/* El cargando lo traemos del useSelector */}
                        { cargando ? <p>Cargando. . .</p> : null}
                        { error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )


}

export default NuevoProductos;