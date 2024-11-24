import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,NgFor,HotelsComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})

export class HotelsComponent{
  hotels: any[] = [];

  
}
