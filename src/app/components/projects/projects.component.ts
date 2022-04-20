import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewProjectComponent } from './new-project/new-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public project: any;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  public createNew() {
    const dialogRef = this.dialog.open(NewProjectComponent);
    dialogRef.afterClosed().subscribe(result=>{
      this.project = result;
    })
  }

  public deleteProject() {
    this.project = null;
    localStorage.setItem('project', JSON.stringify({}));
  }

}
