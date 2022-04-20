import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public projectName: string = '';
  public client: string = '';
  public template: string = '';
  public isPublic: boolean = true;
  constructor(public dialogRef: MatDialogRef<NewProjectComponent>) { }

  ngOnInit(): void {
    // this.newForm = form.gr
  }

  public saveProject() {
    if(this.projectName != null || this.projectName != '') {
      const project = {
        projectName: this.projectName,
        client: this.client,
        template: this.template
      };
      localStorage.setItem('project', JSON.stringify(project));
      this.dialogRef.close(project);
    }
  }

  public cancel() {
    this.dialogRef.close();
  }

}
