import { BaseStrategyComponent } from '../base-strategy.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-super-set-strategy',
  templateUrl: '../common-strategy.component.html',
})
export class SuperSetStrategyComponent extends BaseStrategyComponent implements OnInit {

  constructor(private builder: FormBuilder) {
    super(builder);
  }

  ngOnInit() {
    this.multiExercise = true;
    this.restBetweenExercises = false;
    super.ngOnInit();
  }

  setRestBetweenSets(){
    const restSecondsBetweenSet = this.setPropertiesFormGroup.get('restSecondsBetweenSet').value;
    const restMinutesBetweenSet = this.setPropertiesFormGroup.get('restMinutesBetweenSet').value;

    this.set.setParts[this.set.setParts.length-1].rest = restSecondsBetweenSet + restMinutesBetweenSet * 60;
}

}
