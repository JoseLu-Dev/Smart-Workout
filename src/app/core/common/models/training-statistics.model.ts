export class TrainingStatistics {
    totalSets: number;
    totalReps: number;
    totalWeightMoved: number;
    totalRest: number;

    setsPerMuscle: CountPerMuscle;
    repsPerMuscle: CountPerMuscle;
    weightPerMuscle: CountPerMuscle;

    repsPerRestMinute(): number {
        return Math.round(this.totalReps / (this.totalRest / 60) * 1000) / 1000;
    }
}

export class CountPerMuscle {
    addCount(muscle: string, count: number) {
        if (!this[muscle]) { this[muscle] = 0; }
        this[muscle] += count;
    }

    addCounts(countPerMuscle: CountPerMuscle) {
        for (const [key, value] of Object.entries(countPerMuscle)) {
            this.addCount(key, value);
        }
    }
}
