import { ChartOptions, ChartType } from 'chart.js';
import { TrainingsComponentCommunicationService } from './../../../common/services/trainings-component-communication.service';
import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/core/common/models/training.models';
import { TrainingStatistics } from 'src/app/core/common/models/training-statistics.model';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-training-stats',
  templateUrl: './training-stats.component.html',
  styleUrls: ['./training-stats.component.scss'],
})
export class TrainingStatsComponent implements OnInit {

  public trainingStatistics: TrainingStatistics;

  public setsPerMuscleChartLabels: Label[] = [];
  public setsPerMuscleChartData: MultiDataSet = [];

  public repsPerMuscleChartLabels: Label[] = [];
  public repsPerMuscleChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor(private trainingService: TrainingsComponentCommunicationService) { }

  ngOnInit() {
    this.trainingService.getTraining().subscribe(training => {
      if (!training) { return; }
      this.trainingStatistics = Training.fromTraining(training).getTrainingStatistics();

      const setsNumbers = [];
      for (const [key, value] of Object.entries(this.trainingStatistics.setsPerMuscle)) {
        this.setsPerMuscleChartLabels.push(key);
        setsNumbers.push(value);
      }
      this.setsPerMuscleChartData = setsNumbers;

      const repsNumbers = [];
      for (const [key, value] of Object.entries(this.trainingStatistics.repsPerMuscle)) {
        this.repsPerMuscleChartLabels.push(key);
        repsNumbers.push(value);
      }
      this.repsPerMuscleChartData = repsNumbers;
    });
  }

}
