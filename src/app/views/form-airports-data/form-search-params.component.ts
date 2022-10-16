import { Component, OnInit } from '@angular/core';
import { PicsService } from 'src/app/services/date-based-pics.service';
import * as moment from 'moment';

@Component({
  selector: 'app-form-airports-data',
  templateUrl: './form-search-params.component.html',
  styleUrls: ['./form-search-params.component.css']
})
export class FormSearchParamsComponent implements OnInit {

  constructor(private picsService : PicsService){}

  obterDataEspecifica(dataEspecifica : string){
    let formattedDate = (moment(dataEspecifica)).format('YYYY-MM-DD');
    this.picsService.obterComDataParams(formattedDate)
    .then(resultado => console.log())
    .catch(error => console.error(error));
  }

  obterIntervaloData(dataInicial : string, dataFinal : string){
    let dataInicialFormatada = (moment(dataInicial)).format('YYYY-MM-DD');
    let dataFinalFormatada = (moment(dataInicial)).format('YYYY-MM-DD');
    this.picsService.obterComIntervaloData(dataInicialFormatada, dataFinalFormatada)
    .then(resultado => console.log())
    .catch(error => console.error(error));
  }

  ngOnInit(): void {
  }

  
}
