export class TrainingsDay {
    public userId?: string;
    public date: Date;
    public trainings: TrainingSpecs[];

    constructor(){
        this.trainings = new Array<TrainingSpecs>();
        this.date = new Date();
    }
}

export class TrainingSpecs {
    public name: string;
    public id?: string;
    public color: string;
    public completed: boolean;
}
