import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ExercisesSetListComponent } from '../../common/components/widgets/exercises-set-list/exercises-set-list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @ViewChild(ExercisesSetListComponent)
  exercisesList: ExercisesSetListComponent;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEditTrainingClicked() {
    this.exercisesList.training.pipe(take(1)).subscribe(training => {
      this.router.navigate([`app/trainings/edit/${training.id}`], { replaceUrl: true });
    });
  }

}
