import { ExerciseSet, ExerciseSetPart } from './../../../models/exercise-set.model';
import { Exercise } from './../../../models/exercise.model';
import { AccordionComponent } from './../../accordion/accordion.component';
import { Component, ViewChild } from '@angular/core';

@Component({
    template: ''
})
/**
 * Base class that strategies must extend
 */
export class BaseStrategy {
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
     * Current exercise selected to pass it to properties component
     * and is used to determine if properties component can be shown
     */
    public exerciseSelected: Exercise;

    /**
     * ExerciseSet object that will be sended using a service to
     * exercises-set-list component
     */
    public set: ExerciseSet;

    constructor() {
        this.set = new ExerciseSet();
    }

    /**
     * Will send this.set object to the service
     */
    onSubmit(): void {

    }

    /**
     * Adds or updates a set.setPart
     * @param setPart setPart to be added to set.setParts
     * @param index index of the set part
     */
    addSetPart(setPart: ExerciseSetPart, index: number) {
        console.log(setPart);
        console.log(index);
        if (this.set.setParts.length === 0) {
            this.set.setParts.push(setPart);
        } else {
            this.set.setParts[index] = setPart;
        }
    }

    /**
     * Adds a new setPart to be edited
     */
    addNewSetPart() {
        this.exerciseSelected = null;
        this.set.setParts.push(new ExerciseSetPart());
        this.accordion.updateAccordion(() => {
            this.accordion.openItem(this.set.setParts.length - 1);
        });
    }

    /**
     * exerciseSelected setter
     * @param exercise exercise to be set
     */
    setExerciseSelected(exercise: Exercise): void {
        this.exerciseSelected = exercise;
    }
}