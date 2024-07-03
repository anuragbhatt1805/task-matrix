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
            status: 'active',
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

export { WorkData, Credentials }
