import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  /*
    { path: '/icons', title: 'Icons',  icon: 'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon: 'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon: 'ni-circle-08 text-pink', class: '' },

   */
    { path: '/camions', title: 'Camions',  icon: 'fas fa-truck-moving text-red', class: '' },
    { path: '/engins', title: 'Engins',  icon: 'fas fa-truck-monster text-yellow', class: '' },
    { path: '/users', title: 'Utilisateurs',  icon: 'fas fa-user-friends text-green', class: '' },
    { path: '/transporteurs', title: 'Transporteurs',  icon: 'fas fa-user-friends text-orange', class: '' },
    { path: '/admins', title: 'Administrateurs',  icon: 'fas fa-user-friends text-purple', class: '' },
    { path: '/magasiniers', title: 'Magasiniers',  icon: 'fas fa-user-friends text-green', class: '' },
    { path: '/chefsChantier', title: 'Chefs De Chantier',  icon: 'fas fa-user-friends text-red', class: '' },
    { path: '/conducteurs', title: 'Conducteurs',  icon: 'fas fa-user-friends text-black', class: '' },
    { path: '/accessoires', title: 'Accessoires',  icon: 'ni ni-planet text-blue', class: '' },
    { path: '/materiels', title: 'Matériels',  icon: 'ni ni-planet text-green', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
