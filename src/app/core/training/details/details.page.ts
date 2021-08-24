import { ColorContrastService } from './../../common/services/color-contrast.service';
import { TrainingSpecs } from './../../common/models/trainings-day.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ExercisesSetListComponent } from '../../common/components/widgets/exercises-set-list/exercises-set-list.component';
import { TrainingsService } from '../../common/services/trainings.service';

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
    this.exercisesList.training.pipe(take(1)).subscribe(training => {
      this.router.navigate([`app/trainings/edit/${training.id}`], { replaceUrl: true });
    });
  }

  setTrainingSpecs(trainingSpecs: TrainingSpecs){
    this.trainingSpecs = trainingSpecs;
  }

  contrast(color: string): string{
    return this.colorContrastService.contrast(color);
  }
}
