export class TrainingsDay {
    public date: Date;
    public trainings: Training[];
}

class Training {
    public name: String;
    public color: String;
    public completed: boolean;
}
