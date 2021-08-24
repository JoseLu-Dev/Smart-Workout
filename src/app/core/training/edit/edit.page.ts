import { ColorContrastService } from './../../common/services/color-contrast.service';
import { ExercisesSetAddFormComponent } from './../../common/components/widgets/exercises-set-add-form/exercises-set-add-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TrainingSpecs } from '../../common/models/trainings-day.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  @ViewChild(ExercisesSetAddFormComponent)
  setsForm: ExercisesSetAddFormComponent;

  trainingSpecs: TrainingSpecs;

  constructor(private colorContrastService: ColorContrastService,) { }

  ngOnInit() {
  }

  setTrainingSpecs(trainingSpecs: TrainingSpecs){
    this.trainingSpecs = trainingSpecs;
  }

  contrast(color: string): string{
    return this.colorContrastService.contrast(color);
  }

}
