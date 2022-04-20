import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  public project:any;
  public taskName: string = '';
  public selectedProject: string = '';
  public task:any;
  public duration: number = 0;
  public isRunning: boolean = false;
  private interval:any;

  constructor() { }

  ngOnInit(): void {
    let project = localStorage.getItem('project');
    if(project) {
      this.project = JSON.parse(project);
    }
  }

  public createTask() {
    const task = {
      taskName: this.taskName,
      prpject: this.project.name,
      duration: this.duration
    }
    localStorage.setItem('task', JSON.stringify(task));
    this.startTask();
  }

  public startTask() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.duration += 1;
    }, 1000);
  }

  public stopTask() {
    this.isRunning = false;
    clearInterval(this.interval);
    let task = localStorage.getItem('task');
    if(task) {
      task = JSON.parse(task);
      const updatedTask = {
        taskName: this.taskName,
        prpject: this.project.name,
        duration: this.duration
      }
    }
  }

}
