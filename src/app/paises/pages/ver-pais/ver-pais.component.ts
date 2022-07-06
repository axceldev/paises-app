import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!: Country;

  constructor( private activatedRoute: ActivatedRoute,
               private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ( { id } ) => this.paisService.getPaisPorCodigo( id  ) ),
     //tap( console.log )
    )
    .subscribe( pais =>{
      pais.forEach(item => {
        this.pais = item;
      })
    } );

   /* this.activatedRoute.params.
    subscribe( ( { id } ) => {
        this.paisService.getPaisPorCodigo( id ).subscribe( ( pais ) => {

          console.log( pais );

        });
    });*/
  }


}
