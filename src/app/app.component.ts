import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular/public-api';
import { CellClickedEvent,ColDef , GridReadyEvent } from 'ag-grid-community';
import { Observable , Subject } from 'rxjs';
import { GridApi } from 'ag-grid-community';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public dataFromJson: any;
  public values : string = "";
  
  public ngOnInit(): void {
    const url: string = '/assets/data.json';
    this.http.get(url).subscribe((response) => {
      this.dataFromJson = response;
    });
    this.getRowData() 
  }
 public columnDefs: ColDef[] = [
  { headerName: "Name",
      field: "name",
      width: 180,
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      sort: "asc",
       checkboxSelection: true,
    headerCheckboxSelection: true},
   { headerName: "Building",
      field: "building.name",
      width: 180,
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      sort: "asc",},
      { headerName: "Building Tower",
      field: "building_towers.tower_name",
      width: 180,
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      },
      { headerName: "Property Type",
      field: "property_type.name",
      width: 180,
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      },
      { headerName: "Configuration",
      field: "configuration.name",
      width: 180,
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      },
      { headerName: "Minimum Price",
      field: "min_price",
      width: 180,
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      },
      { headerName: "Bedroom",
      field: "bedroom",
      width: 150,
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      },
      { headerName: "Bathroom",
      field: "bathroom",
      width: 150,
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      },
      { headerName: "Half Bathroom",
      field: "half_bathroom",
      width: 150,
      sortable: true,
      sortingOrder: ["asc", "desc"],
      filter: true,
      },
  
 ];


 // DefaultColDef sets props common to all Columns
 public defaultColDef: ColDef = {
   sortable: true,
   filter: true,
 };
 
 // Data that gets displayed in the grid
 public rowData:any;
 

 
 constructor(private http: HttpClient) {}

 onKey(event: any) { // without type info
    this.values += event.target.value;
  }
 getRowData() {
    this.rowData = []
    this.http.get('/assets/data.json').subscribe(
      (response) => {
        if (
          response 
        ) {
          let temp: any = response
          this.rowData = temp.data.map((data:any) => ({
            ...data,
          }));
          
          
          
         
        }
      
      },
      
    );
  }
getNameSearch(){
  
  if(this.values){
    
            
            this.rowData = this.rowData.filter((row: any) =>
              
              
              row.name === this.values
            )
          }
}
getBuildingSearch(){
  if(this.values){
    
            
            this.rowData = this.rowData.filter((row: any) =>
              
              
              row.building.name === this.values
            )
          }

}
getTowerSearch(){
  if(this.values){
    
            
            this.rowData = this.rowData.filter((row: any) =>
              
              
              row.building_towers.tower_name === this.values
            )
          }
}
getPropertySearch(){
  
  if(this.values){
    
            
            this.rowData = this.rowData.filter((row: any) =>
              
              
              row.property_type.name === this.values
            )
          }
}
   
   getConfigurationSearch(){
    
     if(this.values){
    
            
            this.rowData = this.rowData.filter((row: any) =>
              
              
              row.configuration.name === this.values
            )
          }
   }
 
}


