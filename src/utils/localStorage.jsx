const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 4,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Fix UI bug",
        taskDescription: "Resolve layout issues in the dashboard.",
        taskDate: "2025-01-25",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write test cases",
        taskDescription: "Create unit tests for authentication module.",
        taskDate: "2025-01-26",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 3,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Refactor code",
        taskDescription: "Improve performance of database queries.",
        taskDate: "2025-01-25",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team meeting",
        taskDescription: "Discuss sprint progress and blockers.",
        taskDate: "2025-01-26",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Yuvraj",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 5,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Code review",
        taskDescription: "Review PRs from the development team.",
        taskDate: "2025-01-27",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Optimize queries",
        taskDescription: "Optimize slow database queries for performance.",
        taskDate: "2025-01-28",
        category: "Database",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Ravi",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 3,
      completed: 4,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Design new UI layout",
        taskDescription: "Create a new dashboard design proposal.",
        taskDate: "2025-01-29",
        category: "Design",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Bug fixing",
        taskDescription: "Resolve reported bugs from QA team.",
        taskDate: "2025-01-30",
        category: "Bug Fixing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Implement authentication",
        taskDescription: "Develop authentication logic for new users.",
        taskDate: "2025-02-01",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Security audit",
        taskDescription: "Review security policies and improve them.",
        taskDate: "2025-02-02",
        category: "Security",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs and issues.",
        taskDate: "2025-02-05",
        category: "QA",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
