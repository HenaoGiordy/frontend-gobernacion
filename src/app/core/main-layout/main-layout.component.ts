import { Component } from '@angular/core';
import info from '../../data.json';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { DataTable } from '../../interfaces/dataTable';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';



@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TablaComponent, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  informacion : DataTable[] = info;

 
}
