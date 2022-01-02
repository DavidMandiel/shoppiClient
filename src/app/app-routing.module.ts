import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminEditConsoleComponent } from './components/admin-edit-console/admin-edit-console.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';

// TODO - create a category list component and route
const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LandingComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'order',component:OrderComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'admin-panel',component:AdminPanelComponent},
  {path:'admin-edit-console',component:AdminEditConsoleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
