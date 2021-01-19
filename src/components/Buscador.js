import React,{ Component } from 'react';

class Buscador extends Component {
    
    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        const termino = this.busquedaRef.current.value;

        this.props.datosBusqueda( termino );
    }
    
    render(){
        return (

            <form onSubmit={ this.obtenerDatos }>
                <div className="row">
                    <div className="form-group col-md-2"></div>

                    <div className="form-group col-md-5">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" 
                        placeholder="Busca tu Imagen" />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" 
                        value="Buscar..." />
                    </div>

                    <div className="form-group col-md-2"></div>

                </div>
            </form>
        )
    }
}

export default Buscador;