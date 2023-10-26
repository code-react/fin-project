import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
})
export class InsightsComponent {
  states: string[] = [
    'Pan India',
    'PCH',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  statesFilter: string[] = ['Select Product', 'Home Loan', 'LAP', 'BL', 'SBL'];
  filters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    // 'Select custom'
  ];
  loginTotalAmount: number = 550;
  loginTotalFiles: number = 3050;
  financialTotalAmount: number = 550;
  financialTotalFiles: number = 3050;
  finalTotalAmount: number = 550;
  finalTotalFiles: number = 3050;
  disbursalTotalAmount: number = 500;
  disbursalTotalFiles: number = 2650;

  minLoginAmountValue = 350;
  maxLoginAmountValue = 500;

  minLoginFileValue = 3000;
  maxLoginFileValue = 4000;

  minFinancialAmountValue = 110;
  maxFinancialAmountValue = 145;

  minFinancialFileValue = 1350;
  maxFinancialFileValue = 1800;

  minDisbursalAmountValue = 90;
  maxDisbursalAmountValue = 120;

  minDisbursalFileValue = 1100;
  maxDisbursalFileValue = 1400;

  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';

  tats: string[] = [
    'Stage of Files',
    'Login ',
    'Final Approvals',
    'Financial Approvals',
    'Disbursal',
  ];
  statuss: string[] = ['Select Status', 'pending', 'approved'];
  selectedTat: string = 'Stage of Files';
  selectedStatus: string = 'Select Status';
  selectedFilterState: string = 'Select Product';
  files!: TreeNode[];
  routeName!: string | null;
  constructor(
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.routeName = params.get('data');
    });
    this.files = [
      {
        data: {
          StateName: 'Pan India',
          loginFiles: '1655',
          loginAmount: '2000',

          financialAmount: '2000',
          target: '1549',
          actual: '1050',
          percentage: '50',
        },
        children: [
          {
            data: {
              StateName: 'PCH',
              loginFiles: '1655',
              loginAmount: '150',

              financialAmount: '145',
              target: '1549',
              actual: '105',
              percentage: '50',
            },
            children: [
              {
                data: {
                  StateName: 'Chandigarh',
                  loginFiles: '1655',
                  loginAmount: '110',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Chandigarh',
                      loginFiles: '1655',
                      loginAmount: '110',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ambala',
                      loginFiles: '1655',
                      loginAmount: '110',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Patiala',
                      loginFiles: '1655',
                      loginAmount: '110',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Ludhiana',
                  loginFiles: '1655',
                  loginAmount: '105',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ludhiana',
                      loginFiles: '1655',
                      loginAmount: '110',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jalandhar',
                      loginFiles: '1655',
                      loginAmount: '110',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Moga',
                      loginFiles: '1655',
                      loginAmount: '110',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Karnal',
                  loginFiles: '1655',
                  loginAmount: '11',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Karnal',
                      loginFiles: '1655',
                      loginAmount: '110',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rohtak',
                      loginFiles: '1655',
                      loginAmount: '110',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Panipat',
                      loginFiles: '1655',
                      loginAmount: '110',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'NCR',
              loginFiles: '1655',
              loginAmount: '110',
              financialAmount: '110',
              target: '1549',
              actual: '125',
              percentage: '50',
            },
            children: [
              {
                data: {
                  StateName: 'Delhi',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'JanakPuri',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },

                  {
                    data: {
                      StateName: 'Laxmi Nagar',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },

                  {
                    data: {
                      StateName: 'Sahibad',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },

              {
                data: {
                  StateName: 'Gurgoan',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gurgoan',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },

                  {
                    data: {
                      StateName: 'Faridabad',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },

                  {
                    data: {
                      StateName: 'Meerut',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Rajasthan',
              loginFiles: '1655',
              loginAmount: '11',
              financialAmount: '111',
              target: '1549',
              actual: '110',
              percentage: '50',
            },
            children: [
              {
                data: {
                  StateName: 'Jaipur',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jaipur',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sikar Road',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Behror',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Ajmer',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ajmer',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kekri',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Merta',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Udaipur',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajsamand',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Banswara',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Udaipur',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Kota',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
              },
            ],
          },
          {
            data: {
              StateName: 'Gujarat',
              loginFiles: '1655',
              loginAmount: '120',
              financialAmount: '120',
              target: '1549',
              actual: '108',
              percentage: '50',
            },
            children: [
              {
                data: {
                  StateName: 'Ahmedabad',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Ahmedabad',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gandhinagar',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sanand',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Surat',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Surat',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kadodara',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Rundh',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Rajkot',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Rajkot',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Jamnagar',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Junagadh',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Vadodara',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Vadodara',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Anand',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dabhoi',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'MP',
              loginFiles: '1655',
              loginAmount: '114',
              financialAmount: '114',
              target: '1549',
              actual: '134',
              percentage: '50',
            },
            children: [
              {
                data: {
                  StateName: 'Indore',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Indore',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Ujjain',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Dewas',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Gwalior',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Gwalior',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Morena',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhind',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Bhopal',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Bhopal',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Vidisha',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sehore',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Jabalpur',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Jabalpur',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sihora',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Mandla',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
            ],
          },
          {
            data: {
              StateName: 'Maharashtra',
              loginFiles: '1655',
              loginAmount: '125',
              financialAmount: '125',
              target: '1549',
              actual: '102',
              percentage: '50',
            },
            children: [
              {
                data: {
                  StateName: 'Mumbai',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Navi Mumbai',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Thane',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Kalyan',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nashik',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nashik',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Malegaon',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Sinnar',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Pune',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Pune',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Bhor',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Shikrapur',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
              {
                data: {
                  StateName: 'Nagpur',
                  loginFiles: '1655',
                  loginAmount: '86',
                  financialFiles: '1741',
                  financialAmount: '1685',
                  target: '1549',
                  actual: '86',
                  percentage: '50',
                },
                children: [
                  {
                    data: {
                      StateName: 'Nagpur',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Amravati',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                  {
                    data: {
                      StateName: 'Gondia',
                      loginFiles: '1655',
                      loginAmount: '86',
                      financialFiles: '1741',
                      financialAmount: '1685',
                      target: '1549',
                      actual: '86',
                      percentage: '50',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  }

  onFilterChange(selectedValue: string) {
    this.loginTotalAmount = +(Math.random() * 15).toFixed(2);
    this.loginTotalFiles = +(Math.random() * 15).toFixed(1);
    this.financialTotalAmount = +(Math.random() * 15).toFixed(2);
    this.financialTotalFiles = +(Math.random() * 15).toFixed(1);
    this.disbursalTotalAmount = +(Math.random() * 15).toFixed(2);
    this.disbursalTotalFiles = +(Math.random() * 15).toFixed(1);

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
  }

  onStateChange(selectedValue: string) {
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
        (this.maxDisbursalAmountValue - this.minDisbursalAmountValue) +
      this.minDisbursalAmountValue
    ).toFixed(2);
    this.finalTotalFiles = +(
      Math.random() *
        (this.maxDisbursalFileValue - this.minDisbursalFileValue) +
      this.minDisbursalFileValue
    ).toFixed(0);
  }

  onStateFilterChange(selectedValue: string) {}

  onTatChange(selectedValue: string) {}

  onStatusChange(selectedValue: string) {}
}
