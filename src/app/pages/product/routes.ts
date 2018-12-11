import { ProductComponent } from './product.component';
import { AuthGuard } from 'src/app/routes/auth.guard';


export const productRoutes = [
    { path: 'product', component: ProductComponent, canActivate: [AuthGuard] }
];