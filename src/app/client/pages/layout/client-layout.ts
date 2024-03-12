import { CommonModule } from '@angular/common';
import {Component} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../ui/navbar/navbar';

@Component({
  templateUrl: './client-layout.html',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar]
})
export class ClientLayout {}
