import { Component, OnInit } from '@angular/core'
import { UiServiceService } from '../../services/ui-service.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker'
  showAddTask!: boolean
  subscription!: Subscription

  constructor(private uiService:UiServiceService) {
    this.uiService.onToggle().subscribe( (value) => (this.showAddTask = value))
   }

  //Lifecycle method like componentDidMount
  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

}
