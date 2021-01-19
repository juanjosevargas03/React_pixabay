import React,{ Component } from 'react';
import Buscador  from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {
  
  state = {

    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {

    if(this.state.pagina === 1) return null;

    let pagina = this.state.pagina;
    pagina --;
    
    this.setState({
      pagina
    }, () => {

      this.consultarApi();
      this.scroll();

    })

  }
  
  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina ++;
    
    this.setState({
      pagina
    }, () => {

      this.consultarApi();
      this.scroll();

    })

  }

  consultarApi = () => {

    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=19926213-379c59c174ebc7f04f54bc113&q=${ termino }&page=${ pagina }`;

    fetch(url)
      .then(respuesta => respuesta.json() )
      .then(resultado => this.setState( { imagenes : resultado.hits} ) )
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
      
    }, () => {
      this.consultarApi();
    })
  }

  render(){
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
           
            <Buscador datosBusqueda={ this.datosBusqueda }/>
        </div>

        <div className="row justify-content-center">
          <Resultado 
            imagenes={ this.state.imagenes }
            paginaAnterior={ this.paginaAnterior }
           paginaSiguiente={ this.paginaSiguiente } />

        </div>
       

      </div>
    );
  }
  
}

export default App;
