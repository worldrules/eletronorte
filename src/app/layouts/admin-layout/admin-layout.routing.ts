import { Routes } from '@angular/router';

import { PrincipalComponent } from '../../pages/principal/principal.component';
import { UserComponent } from '../../pages/user/user.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'principal',      component: PrincipalComponent },
    { path: 'user',           component: UserComponent },

];
