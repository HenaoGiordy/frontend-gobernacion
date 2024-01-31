import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DataTable } from '../../interfaces/DataTable';


@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [TableModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  @Input() datos!: DataTable[];




}
