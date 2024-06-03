import { Component, Input } from '@angular/core';
import { Users } from '../../user';

@Component({
  selector: 'app-search-box-result',
  templateUrl: './search-box-result.component.html',
  styleUrl: './search-box-result.component.css'
})
export class SearchBoxResultComponent {
@Input({required:true}) user !:Users
}
