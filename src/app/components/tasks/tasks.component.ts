import { Component, OnInit } from '@angular/core'
import { TaskService } from '../../services/task.service'


import { Task } from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []

  //In order to use a service, we have to add it as a Provider into the
  //constructor i.e pass it as an arguement in the constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //Using observables is the better way to do this
    this.taskService
    .getTasks()
    .subscribe((tasks) => (this.tasks = tasks))
  }

  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(() => (
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    ))
  }

}
