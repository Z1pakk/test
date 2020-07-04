import { NgModule } from '@angular/core';
import { TaskLayoutComponent } from './shared/components/task-layout/task-layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
	declarations: [TaskLayoutComponent,
	EditTaskComponent,
	TaskFormComponent,
],
	imports: [CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{path: '', component: TaskLayoutComponent, children: [{path: ':id/edit', component: EditTaskComponent }]},
		])],
	exports: [RouterModule],

})

export class TaskModule {
}
