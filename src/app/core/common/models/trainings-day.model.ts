export class TrainingsDay {
    public userId?: string;
    public date: Date;
    public trainings: TrainingSpecs[];

    constructor(){
        this.trainings = new Array<TrainingSpecs>();
        this.date = new Date();
    }

    setDate(date: Date): void {
        this.date = date;
        this.date.setUTCFullYear(this.date.getFullYear());
        this.date.setUTCMonth(this.date.getMonth());
        this.date.setUTCDate(this.date.getDate());
        this.date.setUTCHours(0);
        this.date.setUTCMinutes(0);
        this.date.setUTCSeconds(0);
        this.date.setUTCMilliseconds(0);
    }
}

export class TrainingSpecs {
    public name: string;
    public id?: string;
    public color: string;
    public completed: boolean;
    public date?: Date;
}
