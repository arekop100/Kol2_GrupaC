import { Component, Input, OnInit } from '@angular/core';
import {AKDataService} from "../../services/ak-data.service";

@Component({
  selector: 'app-shop-ak',
  templateUrl: './shop-ak.component.html',
  styleUrls: ['./shop-ak.component.css']
})
export class ShopAKComponent implements OnInit {

  @Input() filterText: string;
  public items$: any;

  constructor(private service: AKDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.service.getAll().subscribe(response =>{
      this.items$ = response;
    });
  }

}
