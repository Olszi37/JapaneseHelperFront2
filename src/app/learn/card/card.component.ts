import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../learn.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input()
  showValue: {
    id:null,
    value: null
  };

  @Output() 
  onSelect = new EventEmitter();

  ngOnInit() {
  }

  select() {
    this.onSelect.emit(this.showValue.id);
  }

}
