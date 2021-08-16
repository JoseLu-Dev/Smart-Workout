import { BaseStrategyComponent } from '../base-strategy.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emom-strategy',
  templateUrl: '../common-strategy.component.html',
})
export class EmomStrategyComponent extends BaseStrategyComponent implements OnInit {

  constructor(private builder: FormBuilder) { super(builder); }

  ngOnInit() {
    this.multiExercise = true;
    this.restBetweenExercises = false;
    super.ngOnInit();
  }

  setRestBetweenSets(){
    const restSecondsBetweenSet = this.setPropertiesFormGroup.get('restSecondsBetweenSet').value;
    const restMinutesBetweenSet = this.setPropertiesFormGroup.get('restMinutesBetweenSet').value;

    this.set.setParts.forEach(setPart =>{
        setPart.rest = restSecondsBetweenSet + restMinutesBetweenSet * 60;
    });
}

}
