import { NavItem } from '@/types';
import { EventModel } from './models/event';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  // {
  //   title: 'Dashboard',
  //   href: '/dashboard',
  //   icon: 'dashboard',
  //   label: 'Dashboard'
  // },
  {
    title: 'Listas',
    href: '/dashboard/listas',
    icon: 'list',
    label: 'Listas'
  },
  // {
  //   title: 'User',
  //   href: '/dashboard/user',
  //   icon: 'user',
  //   label: 'user'
  // },
  // {
  //   title: 'Employee',
  //   href: '/dashboard/employee',
  //   icon: 'employee',
  //   label: 'employee'
  // },
  {
    title: 'Perfil',
    href: '/dashboard/perfil',
    icon: 'profile',
    label: 'profile'
  },
  // {
  //   title: 'Kanban',
  //   href: '/dashboard/kanban',
  //   icon: 'kanban',
  //   label: 'kanban'
  // },
  // {
  //   title: 'Login',
  //   href: '/',
  //   icon: 'login',
  //   label: 'login'
  // }
];

export const events: EventModel[] = [
  {
    id: "1",
    placeId: "101",
    managerId: "501",
    name: "Racha da GOODLIFE",
    price: 150,
    minParticipants: 10,
    maxParticipants: 20,
    day: '2024-09-15',
    startAt: "09:00",
    endsAt: "11:00",
    status: "confirmed",
    createdAt: new Date(),
    updatedAt: new Date(),
    participants: ["John", "Lucas", "Maria"],
    place: {
      latitude: '',
      longitude: '',
      name: 'Arena União',
    }
  },
  {
    id: "2",
    placeId: "102",
    managerId: "502",
    name: "Vôlei de Sexta",
    price: 100,
    minParticipants: 8,
    maxParticipants: 12,
    day: '2024-09-20',
    startAt: "18:00",
    endsAt: "20:00",
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
    participants: ["Ana", "Pedro", "Carla"],
  },
  {
    id: "3",
    placeId: "103",
    managerId: "503",
    name: "Basquete Noturno",
    price: 120,
    minParticipants: 5,
    maxParticipants: 10,
    day: '2024-09-22',
    startAt: "21:00",
    endsAt: "23:00",
    status: "canceled",
    createdAt: new Date(),
    updatedAt: new Date(),
    participants: ["Carlos", "Eduardo", "Fernanda"],
  },
  {
    id: "4",
    placeId: "104",
    managerId: "504",
    name: "Racha da GOODLIFE",
    price: 150,
    minParticipants: 18,
    maxParticipants: 24,
    day: '2024-09-22',
    startAt: "16:00",
    endsAt: "18:00",
    status: "finished",
    createdAt: new Date(),
    updatedAt: new Date(),
    participants: ["Carlos", "Eduardo", "Fernanda"],
  }
];

