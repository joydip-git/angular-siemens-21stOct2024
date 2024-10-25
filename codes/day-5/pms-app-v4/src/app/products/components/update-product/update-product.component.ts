import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = Number(this.currentRoute.snapshot.params['id'])
    console.log(id);
  }
}
