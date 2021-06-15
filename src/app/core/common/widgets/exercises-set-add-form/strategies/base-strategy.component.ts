import { ExerciseSet, ExerciseSetPart } from '../../../models/exercise-set.model';
import { Exercise } from '../../../models/exercise.model';
import { AccordionComponent } from '../../accordion/accordion.component';
import { Component, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    template: ''
})
/**
 * Base class that strategies must extend
 */
export class BaseStrategyComponent implements OnInit {

    /**
     * Will be sended in parent using a service to
     * exercises-set-list component
     */
    @Output() exerciseSet = new EventEmitter<ExerciseSet>();

    /**
     * Accordion component that is used when (set) object
     * has more than 1 setPart
     */
    @ViewChild(AccordionComponent)
    accordion: AccordionComponent;

    /**
     * Boolean that indicates wether if the strategy accepts
     * more than one setPart or not
     */
    public multiExercise: boolean;

    /**
     * Boolean that indicates wether if the strategy accepts
     * to add rest between setParts or not
     */
    public restBetweenExercises: boolean;

    /**
     * ExerciseSet object
     */
    public set: ExerciseSet;

    public setPropertiesFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.set = new ExerciseSet();
    }
    ngOnInit(): void {
        this.setPropertiesFormGroup = this.formBuilder.group({
            setsNumber: ['', Validators.required],
            restSecondsFinal: [0, Validators.compose([Validators.required, Validators.min(0)])],
            restMinutesFinal: [0, Validators.compose([Validators.required, Validators.min(0)])],
            restSecondsBetweenSet: !this.restBetweenExercises ? [0, Validators.compose([Validators.required, Validators.min(0)])] : null,
            restMinutesBetweenSet: !this.restBetweenExercises ? [0, Validators.compose([Validators.required, Validators.min(0)])] : null,
        });
    }

    /**
     * Will send this.set object to the service
     */
    onSubmit(): void {
        this.addSetsCountToSet();
        this.exerciseSet.emit(this.set);
    }

    addSetsCountToSet() {
        this.set.finalRest =
            this.setPropertiesFormGroup.get('restSecondsFinal').value +
            this.setPropertiesFormGroup.get('restMinutesFinal').value * 60;

        this.set.setsCount = this.setPropertiesFormGroup.get('setsNumber').value;
        const setsCount = this.set.setsCount;

        const setParts = this.set.setParts;

        if (!this.restBetweenExercises) {
            this.setRestBetweenSets();
        }

        for (let index = 1; index < setsCount; index++) {
            this.set.setParts = this.set.setParts.concat(...setParts);
        }

        console.log(this.set);
    }

    setRestBetweenSets(){}

    /**
     * Adds or updates a set.setPart
     *
     * @param setPart setPart to be added to set.setParts
     * @param index index of the set part
     */
    addSetPart(setPart: ExerciseSetPart, index: number) {
        if (this.set.setParts.length === 0) {
            this.set.setParts.push(setPart);
        } else {
            this.set.setParts[index] = setPart;
        }
        if (this.accordion) {
            this.accordion.updateAccordion(null);
        }
    }

    /**
     * Adds a new setPart to be edited
     */
    addNewSetPart() {
        this.set.setParts.push(new ExerciseSetPart());
        this.accordion.updateAccordion(() => {
            this.accordion.openItem(this.set.setParts.length - 1);
        });
    }
}
