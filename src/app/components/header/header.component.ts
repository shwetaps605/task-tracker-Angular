import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker'
  color: string = '#3f45ff'
  btnText: string  = 'Add'

  constructor() { }

  //Lifecycle method like componentDidMount
  ngOnInit(): void {}

  toggleAddTask() {
    console.log("Button clickedng  !")
  }

}
