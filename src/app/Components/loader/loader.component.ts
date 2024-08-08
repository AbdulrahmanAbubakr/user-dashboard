import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../Services/Loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
loading$ = this._loaderService.loading$
  constructor( private _loaderService: LoaderService) { }

}
