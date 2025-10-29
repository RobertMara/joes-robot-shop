import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;   // FYI - the ! after product tells Angular it's okay if there
                        // is no initializer; assume it will always have a value.
                        // OKAY FOR NOW.
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product?.imageName;
  }

  getDiscountedClasses(product: IProduct) {
    if (product.discount > 0) return ['strikethrough'];
    else return [];
  }

  buyButtonClicked(product: IProduct) {
    console.log(`buyButtonClicked in product-details-component: buying product ${product.name}`);
    this.buy.emit();
  }
}
