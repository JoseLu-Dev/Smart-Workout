import { CountPerMuscle, TrainingStatistics } from './training-statistics.model';
import { Exercise } from './exercise.model';

export class Training {
    id?: string;
    userId?: string;
    date: Date;
    setsDone: ExerciseSet[];

    constructor() {
        this.setsDone = new Array<ExerciseSet>();
    }

    static fromTraining(training: Training): Training {
        const newTraining = new Training();

        newTraining.id = training.id || null;
        newTraining.userId = training.userId || null;
        newTraining.date = new Date(training.date);

        newTraining.setsDone = new Array<ExerciseSet>();
        training.setsDone.forEach((set => {
            newTraining.setsDone.push(ExerciseSet.fromExerciseSet(set));
        }));

        return newTraining;
    }

    getTotalSets(): number {
        let setsNumber = 0;
        this.setsDone.forEach((set) => { setsNumber += set.setsCount; });
        return setsNumber;
    }

    getTotalReps(): number {
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

    getTotalRest(): number {
        let totalRest = 0;
        this.setsDone.forEach((setDone) => {
            totalRest += setDone?.getTotalRest() || 0;
        });
        return totalRest;
    }

    getSetsPerMuscle(): CountPerMuscle {
        const setsPerMuscle: CountPerMuscle = new CountPerMuscle();
        this.setsDone.forEach((setDone) => {
            setsPerMuscle.addCounts(setDone.getSetsPerMuscle());
        });
        return setsPerMuscle;
    }

    getRepsPerMuscle(): CountPerMuscle {
        const repsPerMuscle: CountPerMuscle = new CountPerMuscle();
        this.setsDone.forEach((setDone) => {
            repsPerMuscle.addCounts(setDone.getRepsPerMuscle());
        });
        return repsPerMuscle;
    }

    getWeightPerMuscle(): CountPerMuscle {
        const weightPerMuscle: CountPerMuscle = new CountPerMuscle();
        this.setsDone.forEach((setDone) => {
            weightPerMuscle.addCounts(setDone.getWeightPerMuscle());
        });
        return weightPerMuscle;
    }

    getTrainingStatistics(): TrainingStatistics {
        const trainingStatistics: TrainingStatistics = new TrainingStatistics();

        trainingStatistics.totalSets = this.getTotalSets();
        trainingStatistics.totalReps = this.getTotalReps();
        trainingStatistics.totalWeightMoved = this.getTotalMovedWeight();
        trainingStatistics.totalRest = this.getTotalRest();
        trainingStatistics.setsPerMuscle = this.getSetsPerMuscle();
        trainingStatistics.repsPerMuscle = this.getRepsPerMuscle();
        trainingStatistics.weightPerMuscle = this.getWeightPerMuscle();

        return trainingStatistics;
    };
}

export class ExerciseSet {
    setParts: ExerciseSetPart[];
    type: string;
    setsCount: number;
    finalRest: number;

    constructor() {
        this.setParts = new Array<ExerciseSetPart>();
    }

    static fromExerciseSet(exerciseSet: ExerciseSet): ExerciseSet {
        const newExerciseSet = new ExerciseSet();

        newExerciseSet.setParts = new Array<ExerciseSetPart>();
        exerciseSet.setParts.forEach((set => {
            newExerciseSet.setParts.push(ExerciseSetPart.fromExerciseSet(set));
        }));

        newExerciseSet.type = exerciseSet.type;
        newExerciseSet.setsCount = exerciseSet.setsCount;
        newExerciseSet.finalRest = exerciseSet.finalRest;

        return newExerciseSet;
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

    getTotalRest() {
        let totalRest = this.finalRest;
        this.setParts.forEach((setPart) => {
            totalRest += setPart?.rest || 0;
        });
        return totalRest;
    }

    getSetsPerMuscle(): CountPerMuscle {
        const setsPerMuscle: CountPerMuscle = new CountPerMuscle();
        this.setParts.forEach((setPart) => {
            setsPerMuscle.addCount(setPart.exercise.muscleGroup, 1);
        });
        return setsPerMuscle;
    }

    getRepsPerMuscle(): CountPerMuscle {
        const setsPerMuscle: CountPerMuscle = new CountPerMuscle();
        this.setParts.forEach((setPart) => {
            setsPerMuscle.addCount(setPart.exercise.muscleGroup, setPart.quantity);
        });
        return setsPerMuscle;
    }

    getWeightPerMuscle(): CountPerMuscle {
        const setsPerMuscle: CountPerMuscle = new CountPerMuscle();
        this.setParts.forEach((setPart) => {
            setsPerMuscle.addCount(setPart.exercise.muscleGroup, setPart.quantity * setPart.intensity.getIntensity());
        });
        return setsPerMuscle;
    }

}

export class ExerciseSetPart {
    exercise: Exercise;
    intensity: Intensity;
    quantity: number;
    rest: number;

    constructor() {
        this.intensity = new Intensity();
    }

    static fromExerciseSet(setPart: ExerciseSetPart): ExerciseSetPart {
        const newSetPart = new ExerciseSetPart();

        newSetPart.exercise = setPart.exercise;

        newSetPart.intensity = Intensity.fromIntensity(setPart.intensity);

        newSetPart.quantity = setPart.quantity;
        newSetPart.rest = setPart.rest;

        return newSetPart;
    }
}

export class Intensity {
    band: BandUsed;
    weight: number;

    static fromIntensity(intensity: Intensity): Intensity {
        const newIntensity = new Intensity();

        if (intensity.band) {
            newIntensity.band = BandUsed.fromBand(intensity.band);
        }
        newIntensity.weight = intensity.weight;

        return newIntensity;
    }

    getIntensity() {
        const bandWeight = this.band?.weight || 0;
        return this.weight + bandWeight;
    }
}

export class BandUsed {
    color: string;
    fullUse: boolean;
    twoEnds: boolean;
    weight: number;

    static fromBand(band: BandUsed) {
        const newBand = new BandUsed();

        newBand.color = band.color;
        newBand.fullUse = band.fullUse;
        newBand.twoEnds = band.twoEnds;
        newBand.weight = band.weight;

        return newBand;
    }
}

export class Band {
    id: string;
    color: string;
    weight: number;
}
