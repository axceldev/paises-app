import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
  `
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  public termino: string = '';
  public error: boolean = false;
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = [];
  public mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  public buscar( termino: string){
    this.mostrarSugerencias = false;
    this.error = false;
    this.termino = termino;
    if (this.termino.length != 0)
    this.paisService.buscarPais(this.termino)
      .subscribe(
      ( paises ) => {
        this.paises = paises;
      },
      ( err ) =>{
        console.info( err );
        this.error = true;
        this.paises = [];
      });
  }

  /**
   * sugerencias
   */
  public sugerencias( termino: string) {
    this.mostrarSugerencias = true;
    this.error = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
    .subscribe( (paises) => this.paisesSugeridos = paises.slice(0,5));
  }

  public buscarSugerido( termino: string ){
    this.mostrarSugerencias = false;
    this.buscar( termino );
  }

}
