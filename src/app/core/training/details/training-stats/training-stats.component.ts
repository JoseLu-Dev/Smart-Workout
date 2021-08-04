import { take, last } from 'rxjs/operators';
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

  public weightPerMuscleChartLabels: Label[] = [];
  public weightPerMuscleChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor(private trainingService: TrainingsComponentCommunicationService) { }

  ngOnInit() {
    this.setStatsData();
  }

  setStatsData() {
    this.trainingService.getTraining().pipe().subscribe(training => {
      if (!training || training.setsDone.length === 0) { return; }

      this.resetData();

      this.trainingStatistics = Training.fromTraining(training).getTrainingStatistics();

      this.setRepsPerMuscleChartData();
      this.setSetsPerMuscleChartData();
      this.setWeightPerMuscleChartData();
    });
  }

  resetData() {
    this.setsPerMuscleChartLabels = [];
    this.setsPerMuscleChartData = [];

    this.repsPerMuscleChartLabels = [];
    this.repsPerMuscleChartData = [];

    this.weightPerMuscleChartLabels = [];
    this.weightPerMuscleChartData = [];
  }

  setRepsPerMuscleChartData() {
    const repsNumbers = [];
    for (const [key, value] of Object.entries(this.trainingStatistics.repsPerMuscle)) {
      this.repsPerMuscleChartLabels.push(key);
      repsNumbers.push(value);
    }
    this.repsPerMuscleChartData = repsNumbers;
  }

  setSetsPerMuscleChartData() {
    const setsNumbers = [];
    for (const [key, value] of Object.entries(this.trainingStatistics.setsPerMuscle)) {
      this.setsPerMuscleChartLabels.push(key);
      setsNumbers.push(value);
    }
    this.setsPerMuscleChartData = setsNumbers;
  }

  setWeightPerMuscleChartData() {
    const weightsNumbers = [];
    for (const [key, value] of Object.entries(this.trainingStatistics.weightPerMuscle)) {
      this.weightPerMuscleChartLabels.push(key);
      weightsNumbers.push(value);
    }
    this.weightPerMuscleChartData = weightsNumbers;
  }

}
