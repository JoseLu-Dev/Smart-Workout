import { ColorContrastService } from './../../common/services/color-contrast.service';
import { TrainingSpecs } from './../../common/models/trainings-day.model';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExercisesSetListComponent } from '../../common/components/widgets/exercises-set-list/exercises-set-list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  @ViewChild(ExercisesSetListComponent)
  exercisesList: ExercisesSetListComponent;

  trainingSpecs: TrainingSpecs;

  constructor(
    private router: Router,
    private colorContrastService: ColorContrastService,
  ) { }

  onEditTrainingClicked() {
    this.router.navigate([`app/trainings/edit/${this.exercisesList.training.id}`], { replaceUrl: true });
  }

  setTrainingSpecs(trainingSpecs: TrainingSpecs) {
    this.trainingSpecs = trainingSpecs;
  }

  contrast(color: string): string {
    return this.colorContrastService.contrast(color);
  }
}
