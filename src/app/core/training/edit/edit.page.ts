import { ExercisesSetAddFormComponent } from './../../common/components/widgets/exercises-set-add-form/exercises-set-add-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  @ViewChild(ExercisesSetAddFormComponent)
  setsForm: ExercisesSetAddFormComponent;

  constructor() { }

  ngOnInit() {
  }

}
