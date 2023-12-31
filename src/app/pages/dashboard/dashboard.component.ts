import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as echarts from 'echarts';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  option!: echarts.EChartsOption;
  DisbursalAchievementChart!: echarts.ECharts;
  disbursalAchievementOption: any;
  trendDisbursalAchievementChart!: echarts.ECharts;
  trendDisbursalAchievementOption: any;
  states: string[] = [
    'Pan India',
    'PCH',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  branches: string[] = [];
  clusters: string[] = [];
  filters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
  ];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  selectedCluster: string = '';
  selectedBranch: string = '';

  IrrChart!: echarts.ECharts;
  pfChart!: echarts.ECharts;
  loginTotalAmount: number = 550;
  loginTotalFiles: number = 3050;
  financialTotalAmount: number = 175;
  financialTotalFiles: number = 1500;
  disbursalTotalAmount: number = 150;
  disbursalTotalFiles: number = 1300;
  finalTotalFiles: number = 1350;
  finalTotalAmount: number = 160;

  minLoginAmountValue = 500;
  maxLoginAmountValue = 550;

  minLoginFileValue = 3000;
  maxLoginFileValue = 3050;

  minFinancialAmountValue = 170;
  maxFinancialAmountValue = 175;

  minFinancialFileValue = 1450;
  maxFinancialFileValue = 1500;

  minDisbursalAmountValue = 140;
  maxDisbursalAmountValue = 150;

  minDisbursalFileValue = 1250;
  maxDisbursalFileValue = 1300;

  minfinalTotalAmountValue = 140;
  maxfinalTotalAmountValue = 150;

  minfinalTotalFilesValue = 1250;
  maxfinalTotalFilesValue = 1300;

  currentDate: Date = new Date(); // Initialize with the current date
  minDate: Date = new Date(); // Define the minimum allowed date
  maxDate: Date = new Date(); // Define the maximum allowed date
  isPreviousDisabled: boolean = false;
  isNextDisabled: boolean = false;

  loginData: number = 200;
  pdData: number = 175;
  financialApprovalsData: number = 100;
  finalApprovalsData: number = 75;
  disbursalData: number = 50;

  loginDataAmount: number = 40;
  pdDataAmount: number = 30;
  financialApprovalsDataAmount: number = 12;
  finalApprovalsDataAmount: number = 10;
  disbursalDataAmount: number = 6;

  PDFile= 120;
  PDAmount = 20;
  financialFile = 50;
  financialAmount = 7.5;
  finalFile = 40;
  finalAmount = 6.5;
  technicalFile = 60;
  technicalAmount = 8;
  legalFile = 65;
  legalAmount = 8.5;
  disbursalFile = 45;
  disbursalAmount = 5.5;

  constructor(private el: ElementRef, private router: Router) {
    this.minDate.setDate(this.currentDate.getDate() - 2); // Two days ago
    this.maxDate.setDate(this.currentDate.getDate());
  }
  ngAfterViewInit(): void {
    this.initializeChart();
  }
  ngOnInit(): void {
    this.IrrChart = echarts.init(
      document.getElementById('IrrChartValue') as HTMLDivElement
    );
    this.pfChart = echarts.init(
      document.getElementById('PfChartValue') as HTMLDivElement
    );

    const IrrOption = {
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 220,
          endAngle: -40,
          min: 0,
          max: 15,
          splitNumber: 12,
          itemStyle: {
            color: '#FF821C',
          },
          progress: {
            show: true,
            width: 15,
          },

          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 15,
            },
          },
          axisTick: {
            show: false,
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          splitLine: {
            show: false,
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: '#999',
            },
          },
          axisLabel: {
            show: false,
            distance: -20,
            color: '#999',
            fontSize: 20,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 10,
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            fontSize: 10,
            fontWeight: 'bolder',
            formatter: '{value}%',
            color: 'inherit',
          },
          data: [
            {
              value: 14,
            },
          ],
        },
      ],
    };

    const pfOption = {
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 220,
          endAngle: -40,
          min: 0,
          max: 15,
          splitNumber: 12,
          itemStyle: {
            color: '#7E74FB',
          },
          progress: {
            show: true,
            width: 15,
          },

          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 15,
            },
          },
          axisTick: {
            show: false,
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          splitLine: {
            show: false,
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: '#999',
            },
          },
          axisLabel: {
            show: false,
            distance: -20,
            color: '#999',
            fontSize: 20,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 20,
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            fontSize: 10,
            fontWeight: 'bolder',
            formatter: '{value}%',
            color: 'inherit',
          },
          data: [
            {
              value: 2.3,
            },
          ],
        },
      ],
    };
    this.IrrChart.setOption(IrrOption);
    this.pfChart.setOption(pfOption);
  }

  onRegionChange(region: string) {
    this.selectedState = region;
    this.clusters = this.getClusters(region);
    this.selectedCluster = this.clusters[0] || '';
    this.branches = [];
    this.generateDisbursalMeter();
    this.generateDisbursalAchievement();
    this.onDateChange();
    this.generateCardsRandomData();
    this.generateWorkInQueue();
  }
  getClusters(region: string): string[] {
    if (region === 'PCH') {
      return ['Chandigarh', 'Ludhiana', 'Karnal'];
    } else if (region === 'NCR') {
      return ['Delhi', 'Gurgaon'];
    } else if (region === 'Rajasthan') {
      return ['Jaipur', 'Udaipur', 'Ajmer', 'Kota'];
    } else if (region === 'Gujarat') {
      return ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara'];
    } else if (region === 'MP') {
      return ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur'];
    } else if (region === 'Maharashtra') {
      return ['Mumbai', 'Pune', 'Nashik', 'Nagpur'];
    } else {
      return [];
    }
  }

  onClusterChange(cluster: string) {
    this.selectedCluster = cluster;
    this.branches = this.getBranches(this.selectedState, cluster);
    this.selectedBranch = this.branches[0] || '';
    this.generateDisbursalMeter();
    this.generateCardsRandomData();
    this.generateDisbursalAchievement();
    this.onDateChange();
    this.generateWorkInQueue();
  }

  getBranches(region: string, cluster: string): string[] {
    if (region === 'PCH') {
      if (cluster === 'Chandigarh') {
        return ['Chandigarh', 'Ambala', 'Patiala'];
      } else if (cluster === 'Ludhiana') {
        return ['Ludhiana', 'Jalandhar', 'Moga'];
      } else if (cluster === 'Karnal') {
        return ['Karnal', 'Rohtak', 'Panipat'];
      }
    } else if (region === 'NCR') {
      if (cluster === 'Delhi') {
        return ['Janakpuri', 'Laxmi Nagar', 'Sahibabad'];
      } else if (cluster === 'Gurgaon') {
        return ['Gurgoan', 'Faridabad', 'Meerut'];
      }
    } else if (region === 'Rajasthan') {
      if (cluster === 'Jaipur') {
        return ['Jaipur', 'Sikar Road', 'Behror'];
      } else if (cluster === 'Ajmer') {
        return ['Ajmer', 'Kekri', 'Merta'];
      } else if (cluster === 'Udaipur') {
        return ['Rajsamand', 'Banswara', 'Udaipur'];
      } else if (cluster === 'Kota') {
        return [];
      }
    } else if (region === 'Gujarat') {
      if (cluster === 'Ahmedabad') {
        return ['Ahmedabad', 'Gandhinagar', 'Sanand'];
      } else if (cluster === 'Surat') {
        return ['Surat', 'Kadodara', 'Rundh'];
      } else if (cluster === 'Rajkot') {
        return ['Rajkot', 'Jamnagar', 'Junagadh'];
      } else if (cluster === 'Vadodara') {
        return ['Vadodara', 'Anand', 'Dabhoi'];
      }
    } else if (region === 'Maharashtra') {
      if (cluster === 'Mumbai') {
        return ['Navi Mumbai', 'Thane', 'Kalyan'];
      } else if (cluster === 'Nashik') {
        return ['Nashik', 'Malegaon', 'Sinnar'];
      } else if (cluster === 'Pune') {
        return ['Pune', 'Bhor', 'Shikrapur'];
      } else if (cluster === 'Nagpur') {
        return ['Nagpur', 'Amravati', 'Gondia'];
      }
    } else if (region === 'MP') {
      if (cluster === 'Indore') {
        return ['Indore', 'Ujjain', 'Dewas'];
      } else if (cluster === 'Gwalior') {
        return ['Gwalior', 'Morena', 'Bhind'];
      } else if (cluster === 'Bhopal') {
        return ['Bhopal', 'Vidisha', 'Sehore'];
      } else if (cluster === 'Jabalpur') {
        return ['Jabalpur', 'Sihora', 'Mandla'];
      }
    }

    return []; // Default case: return an empty array if no match is found
  }

  onBranchChange(branch: string, cluster: string) {
    this.selectedCluster = cluster;
    this.generateCardsRandomData();
    this.generateDisbursalMeter();
    this.generateDisbursalAchievement();
    this.onDateChange();
    this.generateWorkInQueue();
  }

  onPreviousDayClick() {
    const newDate = new Date(this.currentDate);
    newDate.setDate(newDate.getDate() - 1);

    if (newDate >= this.minDate) {
      this.currentDate = newDate;
      this.onDateChange();
    }

    this.isPreviousDisabled =
      new Date(this.currentDate) <= new Date(this.minDate);

    this.isNextDisabled =
      new Date(this.currentDate).toDateString() === new Date().toDateString();
  }

  onNextDayClick() {
    if (!this.isNextDisabled) {
      const newDate = new Date(this.currentDate);
      newDate.setDate(newDate.getDate() + 1);
      this.currentDate = newDate;
      this.onDateChange();
    }

    this.isPreviousDisabled = false;

    this.isNextDisabled =
      new Date(this.currentDate).toDateString() === new Date().toDateString();
  }

  onDateChange() {
    this.loginData = this.generateRandomData(180, 200);
    this.pdData = this.generateRandomData(170, 175);
    this.financialApprovalsData = this.generateRandomData(90, 100);
    this.finalApprovalsData = this.generateRandomData(70, 75);
    this.disbursalData = this.generateRandomData(45, 50);

    this.loginDataAmount = this.generateRandomData(35, 40);
    this.pdDataAmount = this.generateRandomData(25, 30);
    this.financialApprovalsDataAmount = this.generateRandomData(10, 12);
    this.finalApprovalsDataAmount = this.generateRandomData(5, 10);
    this.disbursalDataAmount = this.generateRandomData(3, 6);
  }
  generateRandomData(minValue: number, maxValue: number): number {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  workInprogressTable(title: string) {
    this.router.navigate(['/work-in-progress-table', title]);
  }

  initializeChart() {
    this.DisbursalAchievementChart = echarts.init(
      document.getElementById('Disbursal-Achievement-Chart') as HTMLDivElement
    );
    this.trendDisbursalAchievementChart = echarts.init(
      document.getElementById('trendDisbursalAchievement') as HTMLDivElement
    );

    this.disbursalAchievementOption = {
      tooltip: {
        formatter: function (params: any) {
          const randomFiles = Math.floor(Math.random() * (700 - 650 + 1)) + 650;
          const randomAmountCr = (Math.random() * (70 - 65)) + 65;
        
          return `Number of Files: ${randomFiles}<br/>Amount in Cr: ${randomAmountCr.toFixed(2)} <br/>${params.value}%`;
         
        },
      },
      series: [
        {
          type: 'gauge',
          responsive: true,
          axisLine: {
            lineStyle: {
              width: 25,
              color: [
                [0.6, '#FF0000'],
                [0.8, '#FF821C'],
                [1, '#047136'],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: 'auto',
            },
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4,
            },
          },
          axisLabel: {
            color: 'inherit',
            distance: 40,
            fontSize: 8,
            formatter: function (value: any) {
              if (value % 20 === 0) {
                return value + '%';
              } else {
                return '';
              }
            },
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}%',
            color: 'inherit',
            fontSize: 12,
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    };

    this.trendDisbursalAchievementOption = {
      title: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {},

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          boundaryGap: true,
          data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          axisLabel: {
            formatter: '{value}',
            margin: 30, // Add a margin of 15 pixels above the labels
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          min: 10,
          max: 100,
          interval: 10,
          name: 'Percentage %',
          nameLocation: 'middle',
          nameGap: 23,
          axisLabel: {
            formatter: '{value}',
            margin: 7,
          },
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
        },
      ],
      series: [
        {
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
          data: [90, 93, 94, 92, 97, 99, 100],
          itemStyle: {
            color: '#07A14E',
          },
        },
      ],
    };
    this.trendDisbursalAchievementChart.setOption(
      this.trendDisbursalAchievementOption
    );
    this.DisbursalAchievementChart.setOption(this.disbursalAchievementOption);
  }

  generateDisbursalMeter() {
    const minValue = 70;
    const maxValue = 80;

    const randomValue = +(
      Math.random() * (maxValue - minValue) +
      minValue
    ).toFixed(2);

    this.DisbursalAchievementChart.setOption({
      series: [
        {
          data: [
            {
              value: randomValue,
            },
          ],
        },
      ],
    });
  }

  generateDisbursalAchievement() {
    const StateminValues = [85, 88, 89, 87, 92, 94, 95];
    const StatemaxValues = [90, 93, 94, 92, 97, 99, 100];

    const newData = StateminValues.map((min, index) => {
      const max = StatemaxValues[index];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.trendDisbursalAchievementOption.series[0].data = newData;
    this.trendDisbursalAchievementChart.setOption(
      this.trendDisbursalAchievementOption
    );
  }
  onFilterChange(selectedValue: string) {
    this.generateCardsRandomData();
    this.generateDisbursalMeter();
    this.generateDisbursalAchievement();
    this.onDateChange();
    this.generateWorkInQueue();
  }

  onStateChange(selectedValue: string) {
    this.onRegionChange(selectedValue);
  }

  generateCardsRandomData() {
    const minIRRValue = 13; 
    const maxIRRValue = 16; 
    const minPFValue = 2.1; 
    const maxPFValue = 2.5; 

    const randomIRR = +(Math.random() * (maxIRRValue - minIRRValue) + minIRRValue).toFixed(
      1
    );
    const randomPF = +(Math.random() * (maxPFValue - minPFValue) + minPFValue).toFixed(
      1
    );
    this.IrrChart.setOption<echarts.EChartsOption>({
      series: [
        {
          data: [
            {
              value: randomIRR,
            },
          ],
        },
        {
          data: [
            {
              value: randomIRR,
            },
          ],
        },
      ],
    });
    this.pfChart.setOption<echarts.EChartsOption>({
      series: [
        {
          data: [
            {
              value: randomPF,
            },
          ],
        },
        {
          data: [
            {
              value: randomPF,
            },
          ],
        },
      ],
    });
    
    this.loginTotalAmount = +(Math.random() * 15).toFixed(2);
    this.loginTotalFiles = +(Math.random() * 15).toFixed(1);
    this.financialTotalAmount = +(Math.random() * 15).toFixed(2);
    this.financialTotalFiles = +(Math.random() * 15).toFixed(1);
    this.disbursalTotalAmount = +(Math.random() * 15).toFixed(2);
    this.disbursalTotalFiles = +(Math.random() * 15).toFixed(1);
    this.finalTotalAmount = +(Math.random() * 15).toFixed(2);
    this.finalTotalFiles = +(Math.random() * 15).toFixed(1);

    this.loginTotalAmount = +(
      Math.random() * (this.maxLoginAmountValue - this.minLoginAmountValue) +
      this.minLoginAmountValue
    ).toFixed(2);
    this.loginTotalFiles = +(
      Math.random() * (this.maxLoginFileValue - this.minLoginFileValue) +
      this.minLoginFileValue
    ).toFixed(0);

    this.financialTotalAmount = +(
      Math.random() *
        (this.maxFinancialAmountValue - this.minFinancialAmountValue) +
      this.minFinancialAmountValue
    ).toFixed(2);
    this.financialTotalFiles = +(
      Math.random() *
        (this.maxFinancialFileValue - this.minFinancialFileValue) +
      this.minFinancialFileValue
    ).toFixed(0);

    this.disbursalTotalAmount = +(
      Math.random() *
        (this.maxDisbursalAmountValue - this.minDisbursalAmountValue) +
      this.minDisbursalAmountValue
    ).toFixed(2);
    this.disbursalTotalFiles = +(
      Math.random() *
        (this.maxDisbursalFileValue - this.minDisbursalFileValue) +
      this.minDisbursalFileValue
    ).toFixed(0);
    this.finalTotalAmount = +(
      Math.random() *
        (this.maxfinalTotalAmountValue - this.minfinalTotalAmountValue) +
      this.minfinalTotalAmountValue
    ).toFixed(2);
    this.finalTotalFiles = +(
      Math.random() *
        (this.maxfinalTotalFilesValue - this.minfinalTotalFilesValue) +
      this.minfinalTotalFilesValue
    ).toFixed(0);
  }

  generateWorkInQueue() {
    this.PDFile = this.generateRandomData(110, 120);
    this.PDAmount = this.generateRandomData(15, 20);
    this.finalFile = this.generateRandomData(35, 40);
    this.finalAmount = this.generateRandomData(5.5, 6.5);
    this.disbursalFile = this.generateRandomData(35, 45);

    this.disbursalAmount = this.generateRandomData(4.4, 5.5);
    this.financialFile = this.generateRandomData(45, 50);
    this.financialAmount = this.generateRandomData(7, 8);
    this.legalFile = this.generateRandomData(60, 65);
    this.legalAmount = this.generateRandomData(7.5, 8.5);
    this.technicalFile = this.generateRandomData(55, 60);
    this.technicalAmount = this.generateRandomData(7, 8);
  }

}
