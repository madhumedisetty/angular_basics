// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <div>
      <h2>{{ message }}</h2> 
      <button (click)="sendResponse()">Send Response to Parent</button>
    </div>
  `,
})
export class ChildComponent {
  @Input() message: string = ''; // Input property to receive data from parent
  @Output() response = new EventEmitter<string>(); // Output event to send data to parent

  sendResponse() {
    this.response.emit('Response from child class'); // Emit response to parent
  }
}
