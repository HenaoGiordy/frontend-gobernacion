import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Registro } from '../../interfaces/registro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialogo',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, FormsModule, CommonModule],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent {

  visible: boolean = false;

  registro: Registro = {
    numero : 0,
    concepto : "",
    fecha: "",
    vigencia : 0,
    periodo : 0,
    intereses: 0,
    sancion : 0
  }

    showDialog() {
        this.visible = true;
    }

    emitirRegistro(){
      
      this.visible = false
    }
}
