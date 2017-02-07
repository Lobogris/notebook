// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data:{
      'title' : 'Alcázar Book',
      'nombre' : 'Sergio Fco. Alcázar Ríos'
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'post/:id', 
    component: PostComponent 
  }
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);
