import { Component } from '@angular/core';
import { SharedAngularService } from '@test-nx/shared/angular';

@Component({
  selector: 'test-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private sharedService: SharedAngularService) {}

  result = this.sharedService.add(2, 3);
}
