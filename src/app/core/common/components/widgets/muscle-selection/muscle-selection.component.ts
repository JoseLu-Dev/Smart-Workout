import { Muscle } from './../../../models/muscles.model';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { MusclesService } from '../../../services/muscles.service';

@Component({
  selector: 'app-muscle-selection',
  templateUrl: './muscle-selection.component.html',
  styleUrls: ['./muscle-selection.component.scss'],
})
export class MuscleSelectionComponent implements OnInit {

  @Output()
  public muscleSelected = new EventEmitter<string>();

  public _muscleSelected: string;

  public muscles: Observable<Muscle[]>;

  constructor(private musclesService: MusclesService) { }

  ngOnInit() {
    this.muscles = this.musclesService.getMuscles();
  }

  onMuscleSelected(muscle: string) {
    this.muscleSelected.next(muscle);
    // eslint-disable-next-line no-underscore-dangle
    this._muscleSelected = muscle;
  }

  onDeleteMuscleClicked(event, muscle: Muscle) {
    this.musclesService.deleteMuscle(muscle).subscribe(res => {});
    // Makes father onClick not to execute
    event.stopPropagation();
  }

  onAddMuscleClicked() {
    //open modal to add new muscle
  }

}
