import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter();
  public starIcon: string

  constructor() {
  }

  ngOnInit() {
    this.starIcon = this.isSelected ?  "star" : "star-half"
  }

  starClick(){
    this.change.emit();
    this.isSelected = !this.isSelected
    return this.starIcon = this.isSelected ?  "star" : "star-half"
  }
}
