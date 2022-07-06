import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ` button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  public regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  public regionActiva: string = '';

  public error: boolean = false;

  public paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  getClaseCss( region: string ): string{
    return (region === this.regionActiva)
    ? 'btn btn-primary'
    : 'btn btn-outline-primary'
  }

  activarRegion( region: string ): void {

    if ( region === this.regionActiva ) {return;}
    this.regionActiva = region;
    this.paises = [];
    this.error = false;
    this.paisService.buscarRegionPais(this.regionActiva)
    .subscribe( ( paises ) => this.paises = paises )

  }

}
