import { TrainingStats } from './../../common/models/training-stats.model';
import { ChartDataSets } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-trainings-graphs',
  templateUrl: './trainings-graphs.component.html',
  styleUrls: ['./trainings-graphs.component.scss'],
})
export class TrainingsGraphsComponent implements OnInit {

  data: ChartDataSets[] = [];

  chartLabels: Label[] = [];

  constructor() { }

  ngOnInit() {

    //Sort trainings stats by date
    this.trainingStats.sort((a, b) => a.date > b.date ? 1 : 0)

    this.addEmptyDays();

    const musclesArray = this.getMusclesTrained();


    console.log(this.trainingStats)

    this.setChartLabels();
    this.setChartData(musclesArray);
  }

  setChartLabels() {
    this.trainingStats.forEach((tr) => {
      const date = new Date(tr.date);
      this.chartLabels.push(`${date.getDate()}/${date.getMonth()}`);
      delete tr.date;
    })
  }

  setChartData(musclesArray: string[]) {
    musclesArray.forEach(element => {
      this.data.push({ label: element, data: [] })
    });

    this.trainingStats.forEach((trSt) => {
      let total = 0;
      trSt['setsNumber'] = new Object();
      trSt.sets.map((set)=>{
        total += set.number;
        trSt['setsNumber'][set.muscleGroup]=set.number;
      })
      trSt['setsNumber']['Total'] = total;
      
      delete trSt.sets
    })
    console.log(this.trainingStats)
  }

  getMusclesTrained() {
    //Muscles trained during this time
    let muscles = new Object();
    muscles['total'] = null
    this.trainingStats.forEach((trStats) => {
      trStats.sets.forEach((set) => {
        muscles[set.muscleGroup] = null;
      })
    })
    return Object.keys(muscles);
  }

  addEmptyDays() {
    for (let i = 0; i < this.trainingStats.length; i++) {

      let date = new Date(this.trainingStats[i].date);
      date.setDate(date.getDate() + 1)

      if (i + 1 >= this.trainingStats.length) { break; }
      while (date < new Date(this.trainingStats[i + 1].date)) {
        const trainingStats = new TrainingStats();
        trainingStats.date = JSON.parse(JSON.stringify(date));
        date.setDate(date.getDate() + 1)
        this.trainingStats.splice(i + 1, 0, trainingStats)
      }
    }
  }

  trainingStats: TrainingStats[] = [
    {
      date: new Date('2011-04-11T10:20:30Z'),
      sets: [
        {
          number: 12,
          muscleGroup: 'pecs'
        },
        {
          number: 2,
          muscleGroup: 'legs'
        },
        {
          number: 4,
          muscleGroup: 'back'
        }
      ]
    },
    {
      date: new Date('2011-04-13T10:20:30Z'),
      sets: [
        {
          number: 12,
          muscleGroup: 'pecs'
        },
        {
          number: 4,
          muscleGroup: 'back'
        }
      ]
    },
    {
      date: new Date('2011-04-17T10:20:30Z'),
      sets: [
        {
          number: 40,
          muscleGroup: 'biceps'
        }
      ]
    }
  ]
}
