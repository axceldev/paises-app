import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino: string = '';
  public error: boolean = false;
  public paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  public buscar( termino: string): void {
    this.error = false;
    this.termino = termino;
    if (this.termino.length != 0)
    this.paisService.buscarCapitalPais( this.termino )
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
    this.error = false;
    // TODO: crear sugerencias.


  }
}
