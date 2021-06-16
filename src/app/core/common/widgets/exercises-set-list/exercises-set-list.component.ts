import { Observable } from 'rxjs';
import { TrainingsFormService } from '../../services/trainings-form.service';
import { Training } from './../../models/exercise-set.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercises-set-list',
  templateUrl: './exercises-set-list.component.html',
  styleUrls: ['./exercises-set-list.component.scss'],
})
export class ExercisesSetListComponent implements OnInit {

  @Input() editing: boolean;

  public training = new Observable<Training>();

  constructor(
    private trainingsService: TrainingsFormService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trainingsService.getTrainingFromAPI(id);

    this.training = this.trainingsService.getTraining();
  }

  onEditSetClicked(index: number) {
    this.trainingsService.setExerciseSetToEdit(index);
  }

  onDeleteSetClicked(index: number) {
    this.trainingsService.deleteExerciseSet(index);
  }

}
