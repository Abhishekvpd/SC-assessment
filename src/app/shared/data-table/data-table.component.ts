import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnChanges {
  @Input() tableHeader: string[] = [];
  @Input() dataSource: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = changes['dataSource'].currentValue;
    this.tableHeader = changes['tableHeader'].currentValue;
  }
}
