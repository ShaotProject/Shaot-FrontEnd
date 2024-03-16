export const shift = [
  {
    dayDate: "2023-08-26",
    dayName: "SUNDAY",
    shifts: [
      {
        shiftName: "2023-08-27T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: ["Alex", "Stas", "Oden"],
      },
      {
        shiftName: "2023-08-27T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-27T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: ["Alex", "Stas"],
      },
    ],
  },
  {
    dayDate: "2023-08-27",
    dayName: "MONDAY",
    shifts: [
      {
        shiftName: "2023-08-28T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-28T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: ["Stas"],
      },
      {
        shiftName: "2023-08-28T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: [],
      },
    ],
  },
  {
    dayDate: "2023-08-28",
    dayName: "TUESDAY",
    shifts: [
      {
        shiftName: "2023-08-29T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: ["Stas"],
      },
      {
        shiftName: "2023-08-29T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-29T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: ["Stas"],
      },
    ],
  },
  {
    dayDate: "2023-08-29",
    dayName: "WEDNESDAY",
    shifts: [
      {
        shiftName: "2023-08-30T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-30T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: ["Stas"],
      },
      {
        shiftName: "2023-08-30T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: [],
      },
    ],
  },
  {
    dayDate: "2023-08-30",
    dayName: "THURSDAY",
    shifts: [
      {
        shiftName: "2023-08-31T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: ["Alex", "Stas"],
      },
      {
        shiftName: "2023-08-31T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-31T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: ["Stas"],
      },
    ],
  },
  {
    dayDate: "2023-08-31",
    dayName: "FRIDAY",
    shifts: [
      {
        shiftName: "2023-09-01T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-09-01T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: ["Stas"],
      },
      {
        shiftName: "2023-09-01T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: [],
      },
    ],
  },
  {
    dayDate: "2023-09-01",
    dayName: "SATURDAY",
    shifts: [],
  },
];

export const settingTable = [
  {
    weekStart: "2023-08-27",
    weekEnd: "2023-09-02",
    shiftsTime: [
      {
        start: "07:00:00",
        end: "15:00:00",
        workersNumberPerShift: 3,
      },
      {
        start: "15:00:00",
        end: "23:00:00",
        workersNumberPerShift: 3,
      },
      {
        start: "23:00:00",
        end: "07:00:00",
        workersNumberPerShift: 3,
      },
    ],
    workDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    pointAlarm: "thursday",
  },
];

export const employeeShift = [
  {
    dayDate: "2023-08-27",
    dayName: "SUNDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-08-28",
    dayName: "MONDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-08-29",
    dayName: "TUESDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-08-30",
    dayName: "WEDNESDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-08-31",
    dayName: "THURSDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-09-01",
    dayName: "FRIDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "SATURDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
];

export const shift_v_2 = [
  {
    dayDate: "2023-09-02",
    dayName: "SUNDAY",
    shifts: [
      { start: "05:00:00", end: "13:00:00", change: 3 },
      { start: "13:00:00", end: "21:00:00", change: 3 },
      { start: "21:00:00", end: "05:00:00", change: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "MONDAY",
    shifts: [
      { start: "05:00:00", end: "13:00:00", change: 3 },
      { start: "13:00:00", end: "21:00:00", change: 3 },
      { start: "21:00:00", end: "05:00:00", change: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "TUENSDAY",
    shifts: [
      { start: "05:00:00", end: "13:00:00", change: 3 },
      { start: "13:00:00", end: "21:00:00", change: 3 },
      { start: "21:00:00", end: "05:00:00", change: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "WEDNESDAY",
    shifts: [
      { start: "05:00:00", end: "13:00:00", change: 3 },
      { start: "13:00:00", end: "21:00:00", change: 3 },
      { start: "21:00:00", end: "05:00:00", change: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "THURSDAY",
    shifts: [
      { start: "05:00:00", end: "13:00:00", change: 3 },
      { start: "13:00:00", end: "21:00:00", change: 3 },
      { start: "21:00:00", end: "05:00:00", change: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "FRIDAY",
    shifts: [
      { start: "05:00:00", end: "13:00:00", change: 3 },
      { start: "13:00:00", end: "21:00:00", change: 3 },
      { start: "21:00:00", end: "05:00:00", change: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "SATURDAY",
    shifts: [
      { start: "05:00:00", end: "13:00:00", change: 3 },
      { start: "13:00:00", end: "21:00:00", change: 3 },
      { start: "21:00:00", end: "05:00:00", change: 3},
    ],
  },
];

// dayDate: "2024-02-16";
// dayName: "Sunday";
// shiftEnd: "13:00:00";
// shiftStart: "05:00:00";
// workerNeeded: 3;


// [
//   {
//       "dayDate": "2024-03-07",
//       "dayName": "SUNDAY",
//       "shifts": [
//           { "start": "07:00:00", "end": "15:00:00", "change": 1 },
//           { "start": "15:00:00", "end": "23:00:00", "change": 1 },
//           { "start": "23:00:00", "end": "07:00:00", "change": 1 }
//       ]
//   },
//    {
//       "dayDate": "2024-03-07",
//       "dayName": "MONDAY",
//       "shifts": [
         
//       ]
//   }, {
//       "dayDate": "2024-03-07",
//       "dayName": "TUENSDAY",
//       "shifts": [
        
//       ]
//   },
//   {
//     "dayDate": "2024-03-07",
//     "dayName": "WEDNESDAY",
//     "shifts": [
      
//     ]
// },{
//   "dayDate": "2024-03-07",
//   "dayName": "THURSDAY",
//   "shifts": [
    
//   ]
// },
// {
//   "dayDate": "2024-03-07",
//   "dayName": "FRIDAY",
//   "shifts": [
    
//   ]
// },
// {
//   "dayDate": "2024-03-07",
//   "dayName": "SATURDAY",
//   "shifts": [
    
//   ]
// }
// ]