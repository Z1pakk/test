import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/tasks/model/task';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/tasks/services/task.service';

@Component({
  selector: 'app-task-layout',
  templateUrl: './task-layout.component.html',
  styleUrls: ['./task-layout.component.scss']
})
export class TaskLayoutComponent implements OnInit {

	public visableUser: boolean = true;
	public tasks: Task[] = [];
	public search: string = '';
	constructor(private tasksService: TaskService,
	private router: Router) {
	}

	public ngOnInit(): void {
		this.getTasks();
	  }
	
	  public getTasks() {
		return this.tasksService.getAll().subscribe(data => {
			debugger
		this.tasks = data;
	  });
	  }

  }
