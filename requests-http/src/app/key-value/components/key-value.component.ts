import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.scss']
})
export class KeyValueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cursos = [
    { id: '1', nome: 'Angular' },
    { id: '2', nome: 'Java' },
  ];
  
}
