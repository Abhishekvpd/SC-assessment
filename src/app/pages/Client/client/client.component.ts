import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  batchList: {
    id: number;
    marketplace: { id: number; marketplace_name: string };
  }[] = [];
  templateList: {
    id: number;
    file_name: string;
  }[] = [];
  tableHeader: string[] = [];
  dataSource: any;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {}

  getTemplateList() {
    this.clientService.getTemplateLists().subscribe({
      next: (response: any) => {
        this.templateList = response.data;
        this.dataSource = this.templateList.map((list) => ({
          id: list.id,
          file_name: list.file_name,
        }));
        this.tableHeader = ['id', 'file_name'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getBatchList() {
    this.clientService.getBatchLists().subscribe({
      next: (response: any) => {
        console.log(response);
        this.batchList = response.data;
        this.dataSource = this.batchList.map((list) => ({
          id: list.id,
          marketplace: list.marketplace.marketplace_name,
        }));
        this.tableHeader = ['id', 'marketplace'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  exportHandler() {
    this.clientService.handleExport().subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
