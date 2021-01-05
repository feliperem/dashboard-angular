import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions  = 
    {
    chart: {
          type: 'area'
      },
      title: {
          text: 'Cômodos com maior consumo'
      },
      xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'kWh'
          },
          labels: {
              formatter: function () {
                  return this.value / 1000;
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' kWh'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Cozinha',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Sala',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Banheiro',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Quarto 1',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Quarto 2',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
    };
  }

}
