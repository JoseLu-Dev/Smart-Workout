import { Exercise } from './exercise.model';

export class Training{
    id?: string;
    userId?: string;
    date: Date;
    setsDone: ExerciseSet[];
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
        this.setParts.forEach((setPart) => { reps += setPart.quantity; });
        return reps;
    }

    getMovedWeight(): number {
        let weightMoved = 0;
        this.setParts.forEach((setPart) => {
            weightMoved += setPart.quantity + setPart.intensity.getIntensity();
        });
        return weightMoved;
    }

    getTotalRest(){
        let totalRest = this.finalRest;
        this.setParts.forEach((setPart) => {
            totalRest += setPart?.rest != null ? setPart.rest : 0;
        });
        return totalRest;
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
        return this.weight + this.band.weight;
    }
}

export class BandUsed {
    color: string;
    fullUse: boolean;
    twoEnds: boolean;
    weight: number;
}

export class Band{
    color: string;
    weight: number;
}
