import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedDiv = new EventEmitter();

  showDiv(divName: string) {
    this.selectedDiv.emit(divName);
  }

}
