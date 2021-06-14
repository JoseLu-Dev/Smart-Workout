export class Exercise {
    specsId: string;
    name: string;
    variation: string;
    progression: string;
    muscleGroup: string;
    bodyWeight: boolean;
    static: boolean;
}

export class ExerciseSpecs {
    id: string;
    name: string;
    variations: string[];
    progressions: string[];
    muscleGroup: string;
    bodyWeight: boolean;
    static: boolean;
}

export class ExerciseListElement {
    name: string;
    id: string;
}
