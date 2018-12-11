import { EventComponent } from './event.component';
import { AuthGuard } from 'src/app/routes/auth.guard';


export const eventRoutes = [
    { path: 'event', component: EventComponent, canActivate: [AuthGuard] }
];