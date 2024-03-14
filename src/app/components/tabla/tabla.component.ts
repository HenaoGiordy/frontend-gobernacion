import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DataTable } from '../../interfaces/dataTable';

import { ButtonModule } from 'primeng/button';
import { DialogoComponent } from '../dialogo/dialogo.component';



@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogoComponent],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  @Input() datos!: DataTable[];




}
