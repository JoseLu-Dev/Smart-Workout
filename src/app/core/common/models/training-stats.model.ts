export class TrainingStats{
    date: Date;
    sets: SetsStats[];

    constructor(){
        this.sets = new Array<SetsStats>();
    }

    getTotalSets?(): number {
        let reps = 0;
        this.sets.forEach((set) => { reps += set.number; });
        return reps;
    }
}

class SetsStats{
    number: number;
    muscleGroup: string;
}