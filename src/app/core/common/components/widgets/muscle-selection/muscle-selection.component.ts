import { Muscle } from './../../../models/muscles.model';
import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MusclesService } from '../../../services/muscles.service';
import { take } from 'rxjs/operators';
import { MuscleCreationModalComponent } from '../../modals/muscle-creation-modal/muscle-creation-modal.component';

@Component({
  selector: 'app-muscle-selection',
  templateUrl: './muscle-selection.component.html',
  styleUrls: ['./muscle-selection.component.scss'],
})
export class MuscleSelectionComponent implements OnInit {

  @Input() muscle: string;
  @Output() muscleChange = new EventEmitter<string>();

  @ViewChild(MuscleCreationModalComponent)
  newMuscleOptionsModal: MuscleCreationModalComponent;

  public muscles = new BehaviorSubject<Muscle[]>(new Array<Muscle>());

  constructor(private musclesService: MusclesService) { }

  ngOnInit() {
    this.musclesService.getMuscles().pipe(take(1)).subscribe(muscles => {
      this.muscles.next(muscles);
    });
  }

  onMuscleSelected(muscle: Muscle) {
    this.muscleChange.next(muscle.name);
    // eslint-disable-next-line no-underscore-dangle
    this.muscle = muscle.name;
  }

  onDeleteMuscleClicked(event, muscleDel: Muscle) {
    this.musclesService.deleteMuscle(muscleDel).subscribe(res => {
      this.muscles.next(new Array(...this.muscles.value.filter(muscle => muscle.name !== muscleDel.name)));
    });
    // Makes father onClick not to execute
    event.stopPropagation();
  }

  onAddMuscleClicked() {
    this.newMuscleOptionsModal.openModal();
  }

  onMuscleCreated(muscle: Muscle) {
    this.muscles.value.push(muscle);
    this.muscles.next(new Array(...this.muscles.value));
  }

}
