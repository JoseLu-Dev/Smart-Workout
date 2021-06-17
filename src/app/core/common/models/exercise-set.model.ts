import { SetsPerMuscle, TrainingStatistics } from './training-statistics.model';
import { Exercise } from './exercise.model';

export class Training{
    id?: string;
    userId?: string;
    date: Date;
    setsDone: ExerciseSet[];

    getTotalReps(): number{
        let totalReps = 0;
        this.setsDone.forEach((setDone) => {
            totalReps += setDone.getTotalReps();
        });
        return totalReps;
    }

    getTotalMovedWeight(): number {
        let weightMoved = 0;
        this.setsDone.forEach((setDone) => {
            weightMoved += setDone.getMovedWeight();
        });
        return weightMoved;
    }

    getTotalRest(): number{
        let totalRest = 0;
        this.setsDone.forEach((setDone) => {
            totalRest += setDone?.getTotalRest() || 0;
        });
        return totalRest;
    }

    getSetsPerMuscle(): SetsPerMuscle{
        const setsPerMuscle: SetsPerMuscle = new SetsPerMuscle();
        this.setsDone.forEach((setDone) =>{
            setsPerMuscle.addSets(setDone.getSetsPerMuscle())
        });
        return setsPerMuscle;
    }

    getTrainingStatistics(): TrainingStatistics{
        return {
            totalReps: this.getTotalReps(),
            totalWheightMoved: this.getTotalMovedWeight(),
            totalRest: this.getTotalRest(),
            setsPerMuscle: this.getSetsPerMuscle()
        } as TrainingStatistics
    }
}

export class ExerciseSet {
    setParts: ExerciseSetPart[];
    type: string;
    setsCount: number;
    finalRest: number;

    constructor(){
        this.setParts = new Array<ExerciseSetPart>();
    }

    getTotalReps(): number {
        let reps = 0;
        this.setParts.forEach((setPart) => { reps += setPart.quantity || 0; });
        return reps;
    }

    getMovedWeight(): number {
        let weightMoved = 0;
        this.setParts.forEach((setPart) => {
            weightMoved += setPart.quantity * setPart.intensity.getIntensity();
        });
        return weightMoved;
    }

    getTotalRest(){
        let totalRest = this.finalRest;
        this.setParts.forEach((setPart) => {
            totalRest += setPart?.rest || 0;
        });
        return totalRest;
    }

    getSetsPerMuscle(): SetsPerMuscle{
        const setsPerMuscle: SetsPerMuscle = new SetsPerMuscle();
        this.setParts.forEach((setPart)=>{
            setsPerMuscle.addSet(setPart.exercise.muscleGroup, 1);
        });
        return setsPerMuscle;
    }

}

export class ExerciseSetPart {
    exercise: Exercise;
    intensity: Intensity;
    quantity: number;
    rest: number;

    constructor(){
        this.intensity = new Intensity();
    }
}

export class Intensity {
    band: BandUsed;
    weight: number;

    getIntensity() {
        return this.weight + this.band.weight || 0;
    }
}

export class BandUsed {
    color: string;
    fullUse: boolean;
    twoEnds: boolean;
    weight: number;
}

export class Band{
    id: string;
    color: string;
    weight: number;
}
