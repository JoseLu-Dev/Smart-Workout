export class TrainingStatistics {
    totalReps: number;
    totalWheightMoved: number;
    totalRest: number;

    setsPerMuscle: SetsPerMuscle;
}

export class SetsPerMuscle {
    addSet(muscle: string, setsNumber: number) {
        if (!this[muscle]) { this[muscle] = 0 }
        this[muscle] += setsNumber;
    }

    addSets(setsPerMuscle: SetsPerMuscle){
        for (const [key, value] of Object.entries(setsPerMuscle)) {
            this.addSet(key, value);
          }
    }
}