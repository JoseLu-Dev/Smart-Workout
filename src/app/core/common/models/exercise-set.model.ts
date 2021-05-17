import { Exercise } from './exercise.model';
export class ExerciseSet {
    setParts: ExerciseSetPart[];
    type: string;
    setsCount: number;
    finalRest: number;

    getTotalReps(): number {
        let reps = 0;
        this.setParts.forEach((setPart) => { reps += setPart.quantity })
        return reps;
    }

    getMovedWeight(): number {
        let weightMoved = 0;
        this.setParts.forEach((setPart) => {
            weightMoved += setPart.quantity + setPart.intensity.getIntensity()
        })
        return weightMoved;
    }

    getTotalRest(){
        let totalRest = this.finalRest;
        this.setParts.forEach((setPart) => {
            totalRest += setPart?.rest != null ? setPart.rest : 0;
        })
        return totalRest;
    }

}

export class ExerciseSetPart {
    exercise: Exercise;
    intensity: Intensity;
    quantity: number;
    rest: number;
}

export class Intensity {
    band: Band;
    weight: number;

    getIntensity() {
        return this.weight + this.band.weight;
    }
}

export class Band {
    color: string;
    fullUse: boolean;
    weight: number;
}
