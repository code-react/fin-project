import { Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-rejection-analysis',
  templateUrl: './rejection-analysis.component.html',
  styleUrls: ['./rejection-analysis.component.scss'],
})
export class RejectionAnalysisComponent {
  ConversionStates: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  ConversionFilters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    // 'Select custom'
  ];

  selectedConversionState: string = 'Pan India';
  selectedConversionFilter: string = 'September';

  RejectionStates: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  RejectionFilters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    // 'Select custom'
  ];

  selectedRejectionState: string = 'Pan India';
  selectedRejectionFilter: string = 'September';

  StateChart!: echarts.ECharts;
  StateLoginChart!: echarts.ECharts;
  ProductConversionChart!: echarts.ECharts;
  StateRejectionChart!: echarts.ECharts;
  AnalysisRejectionChart!: echarts.ECharts;
  ProductRejectionChart!: echarts.ECharts;

  StateOption: any;
  StateLoginOption: any;
  ProductConversionOption: any;
  StateRejectionOption: any;
  AnalysisRejectionOption: any;
  ProductRejectionOption: any;

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart() {
    this.StateChart = echarts.init(
      document.getElementById('state-conversion') as HTMLDivElement
    );

    this.StateLoginChart = echarts.init(
      document.getElementById('state-login') as HTMLDivElement
    );

    this.ProductConversionChart = echarts.init(
      document.getElementById('product-conversion') as HTMLDivElement
    );

    this.StateRejectionChart = echarts.init(
      document.getElementById('state-rejection') as HTMLDivElement
    );

    this.ProductRejectionChart = echarts.init(
      document.getElementById('product-Rejection') as HTMLDivElement
    );

    this.AnalysisRejectionChart = echarts.init(
      document.getElementById('rejection-analysis') as HTMLDivElement
    );

    this.StateOption = {
      xAxis: {
        type: 'category',
        nameGap: 25,
        data: [
          'Login to disbursal ',
          'Financial approval to disbursal ',
          'Login to financial approval',
        ],
        axisLabel: {
          interval: 0,
          rotate: 15,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 100,
        max: 10,
        interval: 10,
        axisLine: {
          show: true,
        },
        splitLine: {
          show: false,
        },
        name: 'DAYS',
        nameLocation: 'middle',
        nameGap: 25,
      },
      series: [
        {
          barWidth: 30,
          data: [70, 30, 75],
          type: 'bar',
          itemStyle: {
            color: '#0747A6',
          },
        },
      ],
    };

    this.StateLoginOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: [
          'Login to financial approval (%)',
          'Financial approval to disbursal (Crores)',
          'Login to disbursal (Number)',
        ],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        splitLine: {
          show: false,
        },

        boundaryGap: [0, 0.01],
        axisLabel: {
          show: false, // Set this to false to hide x-axis labels
        },
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: [
          'Maharashtra',
          'MP',
          'Gujarat',
          'Rajasthan',
          'NCR',
          'Haryana',
          'Punjab',
          'Pan India',
        ],
      },

      series: [
        {
          name: 'Login to financial approval (%) ',
          type: 'bar',
          data: [40, 40, 40, 40, 40, 40, 40, 80],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
        },
        {
          name: 'Financial approval to disbursal(Crores) ',
          type: 'bar',
          data: [65, 65, 65, 65, 65, 65, 65, 225],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} Cr',
          },
        },
        {
          name: 'Login to disbursal (Number) ',
          type: 'bar',
          data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 6000],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} ',
          },
        },
      ],
    };

    this.ProductConversionOption = {
      title: {},
      responsive: true,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        data: ['HL', 'BL', 'LAP', 'SBL'],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['HL', 'BL', 'LAP', 'SBL'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          min: 10,
          max: 100,
          interval: 20,
          name: 'Percentage ',
          nameLocation: 'middle',
          nameGap: 43,
        },
      ],
      series: [
        {
          name: 'HL',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [12, 15, 25, 30, 35, 45],
        },
        {
          name: 'BL',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 1, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [30, 35, 45, 50, 58, 65],
        },
        {
          name: 'LAP',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [35, 45, 47, 50, 55, 67],
        },
        {
          name: 'SBL',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [37, 46, 48, 52, 57, 69],
        },
      ],
    };

    this.StateRejectionOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: [
          'Login to financial approval (%)',
          'Financial approval to disbursal (Crores)',
          'Login to disbursal (Number)',
        ],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        splitLine: {
          show: false,
        },

        boundaryGap: [0, 0.01],
        axisLabel: {
          show: false, // Set this to false to hide x-axis labels
        },
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: [
          'Maharashtra',
          'MP',
          'Gujarat',
          'Rajasthan',
          'NCR',
          'Haryana',
          'Punjab',
          'Pan India',
        ],
      },

      series: [
        {
          name: 'Login to financial approval (%) ',
          type: 'bar',
          data: [40, 40, 40, 40, 40, 40, 40, 80],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
          },
        },
        {
          name: 'Financial approval to disbursal(Crores) ',
          type: 'bar',
          data: [65, 65, 65, 65, 65, 65, 65, 225],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} Cr',
          },
        },
        {
          name: 'Login to disbursal (Number) ',
          type: 'bar',
          data: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 6000],
          label: {
            show: true,
            position: 'right',
            formatter: '{c} ',
          },
        },
      ],
    };

    this.ProductRejectionOption = {
      title: {},
      responsive: true,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        data: ['HL', 'BL', 'LAP', 'SBL'],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['HL', 'BL', 'LAP', 'SBL'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: true,
          },
          min: 10,
          max: 100,
          interval: 20,
          name: 'Percentage ',
          nameLocation: 'middle',
          nameGap: 43,
        },
      ],
      series: [
        {
          name: 'HL',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [12, 15, 25, 30, 35, 45],
        },
        {
          name: 'BL',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 1, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [30, 35, 45, 50, 58, 65],
        },
        {
          name: 'LAP',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [35, 45, 47, 50, 55, 67],
        },
        {
          name: 'SBL',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [37, 46, 48, 52, 57, 69],
        },
      ],
    };

    this.AnalysisRejectionOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
              formatter: '{c}%',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 35, name: 'Repayment issue' },
            { value: 20, name: 'Intention issue' },
            { value: 10, name: 'Income Issue' },
            { value: 20, name: 'Legal / Technical' },
            { value: 10, name: 'Customer not interested' },
            { value: 8, name: 'End use' },
            { value: 10, name: 'Duplicate lead' },
          ],
        },
      ],
    };

    this.StateChart.setOption(this.StateOption);
    this.StateLoginChart.setOption(this.StateLoginOption);
    this.ProductConversionChart.setOption(this.ProductConversionOption);
    this.StateRejectionChart.setOption(this.StateRejectionOption);
    this.ProductRejectionChart.setOption(this.ProductRejectionOption);
    this.AnalysisRejectionChart.setOption(this.AnalysisRejectionOption);
  }

  onConversionFilterChange(selectedValue: string) {
    this.stateConversionRandomValues();
    this.stateLoginRandomValues();
    this.ProductConversionRandomValues();
  }

  onConversionStateChange(selectedValue: string) {
    this.stateConversionRandomValues();
    this.stateLoginRandomValues();
    this.ProductConversionRandomValues();
  }

  private getRandomValue(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  stateConversionRandomValues() {
    const minValues = [15, 32, 50, 65,];
    const maxValues = [30, 45, 60, 75];

    const newData = minValues.map((min, index) => {
      const max = maxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.StateOption.series[0].data = newData;
    this.StateChart.setOption(this.StateOption);

  }
  stateLoginRandomValues() {

    const loginToFinancialApprovalMin = [39, 39, 39, 39, 39, 39, 39, 75];
    const loginToFinancialApprovalMax = [40, 40, 40, 40, 40, 40, 40, 80];
    const financialApprovalToDisbursalMin = [63, 63, 63, 63, 63, 63, 63, 222];
    const financialApprovalToDisbursalMax = [65, 65, 65, 65, 65, 65, 65, 225];
    const loginToDisbursalMin = [1900, 1900, 1900, 1900, 1900, 1900, 1900, 5900];
    const loginToDisbursalMax = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 6000];

    // Generate random values for each series
    const loginToFinancialApprovalValues = this.generateRandomValues(loginToFinancialApprovalMin, loginToFinancialApprovalMax);
    const financialApprovalToDisbursalValues = this.generateRandomValues(financialApprovalToDisbursalMin, financialApprovalToDisbursalMax);
    const loginToDisbursalValues = this.generateRandomValues(loginToDisbursalMin, loginToDisbursalMax);

    // Update the data property of the series objects
    this.StateLoginOption.series[0].data = loginToFinancialApprovalValues;
    this.StateLoginOption.series[1].data = financialApprovalToDisbursalValues;
    this.StateLoginOption.series[2].data = loginToDisbursalValues;
    this.StateLoginChart.setOption(this.StateLoginOption);

  }
  
  ProductConversionRandomValues() {
    const StateminValues = [55, 60, 64,68,75];
    const StatemaxValues = [60, 67, 78,83,90];

    const newData = StateminValues.map((min, index) => {
      const max = StatemaxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.ProductConversionOption.series[0].data = newData;
    this.ProductConversionChart.setOption(this.ProductConversionOption);

  }

  onRejectionFilterChange(selectedValue: string) {
    this.stateRejectionRandomValues();
    this.ProductRejectionRandomValues();
    this.rejectionAnalysisRandomValues();
  }

  onRejectionStateChange(selectedValue: string) {
    this.stateRejectionRandomValues();
    this.ProductRejectionRandomValues();
    this.rejectionAnalysisRandomValues();
  }
  stateRejectionRandomValues() {

    const loginToFinancialApprovalMin = [39, 39, 39, 39, 39, 39, 39, 75];
    const loginToFinancialApprovalMax = [40, 40, 40, 40, 40, 40, 40, 80];
    const financialApprovalToDisbursalMin = [63, 63, 63, 63, 63, 63, 63, 222];
    const financialApprovalToDisbursalMax = [65, 65, 65, 65, 65, 65, 65, 225];
    const loginToDisbursalMin = [1900, 1900, 1900, 1900, 1900, 1900, 1900, 5900];
    const loginToDisbursalMax = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 6000];

    // Generate random values for each series
    const loginToFinancialApprovalValues = this.generateRandomValues(loginToFinancialApprovalMin, loginToFinancialApprovalMax);
    const financialApprovalToDisbursalValues = this.generateRandomValues(financialApprovalToDisbursalMin, financialApprovalToDisbursalMax);
    const loginToDisbursalValues = this.generateRandomValues(loginToDisbursalMin, loginToDisbursalMax);

    // Update the data property of the series objects
    this.StateRejectionOption.series[0].data = loginToFinancialApprovalValues;
    this.StateRejectionOption.series[1].data = financialApprovalToDisbursalValues;
    this.StateRejectionOption.series[2].data = loginToDisbursalValues;

    this.StateRejectionChart.setOption(this.StateRejectionOption);
  }
  ProductRejectionRandomValues() {
    const StateminValues = [55, 60, 64,68,75];
    const StatemaxValues = [60, 67, 78,83,90];

    const newData = StateminValues.map((min, index) => {
      const max = StatemaxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.ProductRejectionOption.series[0].data = newData;
    this.ProductRejectionChart.setOption(this.ProductRejectionOption);
  }
  rejectionAnalysisRandomValues() {
    const newData = [
      { value: this.getRandomValue(30, 35), name: 'Repayment issue' },
      { value: this.getRandomValue(15, 20), name: 'Intention issue' },
      { value: this.getRandomValue(7, 10), name: 'Income Issue' },
      { value: this.getRandomValue(17, 20), name: 'Legal / Technical' },
      { value: this.getRandomValue(7, 10), name: 'Customer not interested' },
      { value: this.getRandomValue(6, 8), name: 'End use' },
      { value: this.getRandomValue(6, 10), name: 'Duplicate lead' },

    ];

    // Update the pie chart data with the new random values
    this.AnalysisRejectionOption.series[0].data = newData;
    this.AnalysisRejectionChart.setOption(this.AnalysisRejectionOption);
  }

 
  generateRandomValues(minArray: number[], maxArray: number[]): number[] {
    if (minArray.length !== maxArray.length) {
      throw new Error('minArray and maxArray must have the same length');
    }

    return minArray.map((min, index) => {
      const max = maxArray[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
  }
  
}