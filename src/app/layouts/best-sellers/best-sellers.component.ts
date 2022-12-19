import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent implements OnInit {

  products:{code:string, name:string, description:string, price : number}[] = [
    {code: '01', name: 'Product 01', description: 'Product 01 descripcion', price: 100},
    {code: 'fr', name: 'Product 02', description: 'Product 01 descripcion', price: 100},
    {code: 'es', name: 'Product 03', description: 'Product 01 descripcion', price: 100},
    {code: 'ar', name: 'Product 04', description: 'Product 01 descripcion', price: 100},
    {code: 'ar', name: 'Product 05', description: 'Product 01 descripcion', price: 100},
    {code: 'ar', name: 'Product 06', description: 'Product 01 descripcion', price: 100},
    {code: 'ar', name: 'Product 07', description: 'Product 01 descripcion', price: 100},
    {code: 'ar', name: 'Product 08', description: 'Product 01 descripcion', price: 100},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
