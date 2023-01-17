import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ApiConectionService } from '../../services/api/api-conection.service'
import { ProductsI } from 'src/app/models/products-i';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
  styleUrls: ['./table-crud.component.scss']
})
export class TableCrudComponent implements OnInit {

  productDialog: boolean = false;

  products: ProductsI[] = [];

  product!: ProductsI;

  selectedProducts: ProductsI[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  constructor(
    private apiConection: ApiConectionService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.getAllProducts();
    this.statuses = [
      { label: 'ENSTOCK', value: 'ENSTOCK' },
      { label: 'STOCKBAJO', value: 'STOCKBAJO' },
      { label: 'SINSTOCK', value: 'SINSTOCK' }
    ];
  }

  getAllProducts() {
    let m = this.apiConection.getProducts()
    m.subscribe(
      data => {
        this.products = data;
      }
    )
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  editProduct(product: ProductsI) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: ProductsI) {

    this.confirmationService.confirm({
      message: 'Está seguro de que quiere eliminar ' + product.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        let response = this.apiConection.deleteProduct(product)
        response.subscribe({
          next: (result) => {
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto Eliminado', life: 3000 });
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Fallido', detail: 'Producto no Eliminado', life: 3000 });
          },
          complete: () => this.getAllProducts()
        });
        this.product = {};
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }


  saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
      if (this.product._id) {
        let response = this.apiConection.updateProduct(this.product)
        response.subscribe({
          next: (result) => {
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto Actualizado', life: 3000 });
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Fallido', detail: 'Producto no Actualizado', life: 3000 });
          },
          complete: () => this.getAllProducts()
        });
      }
      else {
        this.product.image = 'assets/images/default.jpg';
        let response = this.apiConection.createProduct(this.product)
        response.subscribe({
          next: (result) => {
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto Creado', life: 3000 });
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Fallido', detail: 'Producto no Creado', life: 3000 });
          },
          complete: () => this.getAllProducts()
        });
      }
      this.productDialog = false;
      this.product = {};
    }
  }

}
