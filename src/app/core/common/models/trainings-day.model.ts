export class TrainingsDay {
    public date: Date;
    public trainings: Training[];
}

class Training {
    public name: string;
    public color: string;
    public completed: boolean;
}
