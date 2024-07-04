const Credentials = {
  admin: { email: 'admin@example.com', password: 'admin123' },
  user: { email: 'user@example.com', password: 'user123' },
  manager: { email: 'manager@example.com', password: 'manager123' },
}
const WorkData = [
  {
    Fname: 'Fabricator1',
    location: [
      {
        country:"India",
        state:"Karnataka",
        city:"Bangalore",
      }
    ],
    contactName: 'ABS',
    contactNumber: '9876543210',
    email: 'abs@gmail.com',
    project: [
      {
        Pname: 'Project1',
        description: 'Project1 description',
        start_date: '2021-09-10',
        end_date: '2021-10-10',
        status: 'active',
        tasks: [
          {
            Tname: 'Task1',
            description: 'Task1 description',
            start_date: '2021-09-10',
            end_date: '2021-10-10',
            status: 'active',
            assignee: 'user1',
            progress: 0,
            comments: [
              {
                comment: 'comment1',
                comment_by: 'user1',
                comment_date: '2021-09-10',
              },
            ],
          },
        ],
      },
      {
        Pname: 'Project2',
        description: 'Project2 description',
        start_date: '2021-09-10',
        end_date: '2021-10-10',
        status: 'active',
        tasks: [
          {
            Tname: 'Task2',
            description: 'Task2 description',
            start_date: '2021-09-10',
            end_date: '2021-10-10',
            status: 'completed',
            assignee: 'user2',
            progress: 0,
            comments: [
              {
                comment: 'comment2',
                comment_by: 'user2',
                comment_date: '2021-09-10',
              },
            ],
          },
        ],
      },
      {
        Pname: 'Project3',
        description: 'Project3 description',
        start_date: '2021-09-10',
        end_date: '2021-10-10',
        status: 'active',
        tasks: [
          {
            Tname: 'Task2',
            description: 'Task2 description',
            start_date: '2021-09-10',
            end_date: '2021-10-10',
            status: 'completed',
            assignee: 'user2',
            progress: 0,
            comments: [
              {
                comment: 'comment2',
                comment_by: 'user2',
                comment_date: '2021-09-10',
              },
            ],
          },
        ],
      },
    ],
  },
]


const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-07-11T13:00',
    endDatetime: '2024-07-11T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30007d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-07-20T09:00',
    endDatetime: '2024-07-20T11:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1507794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-07-20T17:00',
    endDatetime: '2024-07-20T18:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-07-09T13:00',
    endDatetime: '2024-07-09T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30007d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-07-13T14:00',
    endDatetime: '2024-07-13T14:30',
  },
];

// const Project = [
//   {
//     name: 'Project1',
//     description: 'Project1 description',
//     start_date: '2021-09-10',
//     end_date: '2021-10-10',
//     status: 'active',
//     tasks: [
//       {
//         name: 'Task1',
//         description: 'Task1 description',
//         start_date: '2021-09-10',
//         end_date: '2021-10-10',
//         status: 'active',
//         assignee: 'user1',
//         progress: 0,
//         comments: [
//           {
//             comment: 'comment1',
//             comment_by: 'user1',
//             comment_date: '2021-09-10',
//           },
//         ],
//       },
//     ],
//   },
// ]

export { WorkData, Credentials,meetings }
