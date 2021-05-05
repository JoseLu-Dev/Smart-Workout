import { TrainingsDay } from '../../common/models/trainings-day.model';

export class Day {
    // eslint-disable-next-line id-blacklist
    public number: number;
    public year: number;

    public month: string;
    public monthIndex: number;

    public weekDayName: string;
    public weekDayNumber: number;

    public isCurrentDay: boolean;
    public isCurrentMonth = true;

    public trainingsDay: TrainingsDay;
}
