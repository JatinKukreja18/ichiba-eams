export type Employees = {
  id: string;
  name: string;
  joining: string;
  phone?: string;
  designation?: string;
  email?: string;
  salary: number;
};

export const data: Employees[] = [
  {
    id: "m5gr84i9",
    name: "Baidhnath Kumar",
    joining: "success",
    email: "ken99@yahoo.com",
    salary: 30000,
  },
  {
    id: "3u1reuv4",
    name: "Anand Mishra",
    joining: "success",
    email: "Abe45@gmail.com",
    salary: 45000,
  },
  {
    id: "derv1ws0",
    name: "Suman KTM",
    joining: "processing",
    email: "Monserrat44@gmail.com",
    salary: 18500,
  },
  {
    id: "5kma53ae",
    name: "Santosh",
    joining: "success",
    email: "Silas22@gmail.com",
    salary: 22000,
  },
  {
    id: "bhqecj4p",
    name: "Ajay",
    joining: "failed",
    email: "carmella@hotmail.com",
    salary: 11500,
  },
];
