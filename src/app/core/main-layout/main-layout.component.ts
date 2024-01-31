import { Component } from '@angular/core';
import studenData from '../../data.json';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { DataTable } from '../../interfaces/DataTable';



@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  informacion : DataTable[] = studenData
}
