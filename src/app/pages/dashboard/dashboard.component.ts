import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import {MaterielService} from '../../services/materiel/materiel.service';
import {EnginService} from '../../services/engin/engin.service';
import {Observable} from 'rxjs';
import {Materiel} from '../../services/materiel/classes/materiel';
import {Engin} from '../../services/engin/classes/engin';
import {UserService} from '../../services/user/user.service';
import {User} from '../../services/user/classes/user';
import {CamionServiceService} from '../../services/camion/camion-service.service';
import {Camion} from '../../services/camion/classes/camion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  private materiels: Materiel[];
  private materielsOBS: Observable<Materiel[]>;
  private engins: Engin[];
  private enginOBS: Observable<Engin[]>;
  private users: User[];
  private usersOBS: Observable<User[]>;
  private camions: Camion[];
  private camionsOBS: Observable<Camion[]>;

  constructor(private materielService: MaterielService, private enginService: EnginService, private userService: UserService, private camionService: CamionServiceService) {

  }

  ngOnInit() {
    this.materielsOBS = this.materielService.getAllMateriels();
    this.materielsOBS.subscribe((data) => { this.materiels = data; });
    this.enginOBS = this.enginService.getAllEngins();
    this.enginOBS.subscribe((data) => { this.engins = data; });
    this.usersOBS = this.userService.getAllUsers();
    this.usersOBS.subscribe((data) => { this.users = data; });
    this.camionsOBS = this.camionService.getAllCamions();
    this.camionsOBS.subscribe((data) => { this.camions = data; });

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }





  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
