import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent implements OnInit {
  tableData = [
    ["id", "employeename"],
    ["1", "abc"],
    ["2", "def"]
  ];
  ngOnInit(): void {}
  onClickItem(index) {
    console.log(index);
  }
}
