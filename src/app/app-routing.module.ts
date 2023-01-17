import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCrudComponent } from './pages/table-crud/table-crud.component';

const routes: Routes = [
   // Start Re-direct
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   // Success User Pages
   { path: 'home', component: TableCrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
