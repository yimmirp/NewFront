import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
 

  DATA = [
    { id: 1, name: 'Prueba', other: 'Otro campo' },
    { id: 2, name: 'Prueba', other: 'Otro campo' },
    { id: 3, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' }
  ]
  displayedColumns: string[] = ['id', 'name', 'other']
  
  dataSource = new MatTableDataSource<{ id: number, name: string, other: string }>(this.DATA);

  constructor() { }

  ngOnInit(): void {
  }

 
}
