export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  role: "admin" | "member";
  status: "active" | "blocked" | "pending";
  groups: number;
  totalExpenses: number;
  joinedAt: string;
  color: string;
};

export type Group = {
  id: string;
  name: string;
  emoji: string;
  members: User[];
  expenses: Expense[];
  totalSpent: number;
  settled: number;
  pending: number;
  status: "active" | "settled";
  yourBalance: number; // positive = owed to you, negative = you owe
  accentColor: string;
};

export type Expense = {
  id: string;
  description: string;
  amount: number;
  category: Category;
  paidBy: User;
  splitAmong: User[];
  yourShare: number;
  date: string;
  groupId: string;
};

export type Balance = {
  id: string;
  from: User;
  to: User;
  amount: number;
  description: string;
};

export type Category =
  | "food"
  | "rent"
  | "transport"
  | "entertainment"
  | "shopping"
  | "health"
  | "utilities"
  | "other";

export const CATEGORY_META: Record<
  Category,
  { label: string; icon: string; color: string }
> = {
  food: { label: "Food", icon: "restaurant", color: "text-secondary" },
  rent: { label: "Rent", icon: "home", color: "text-primary" },
  transport: { label: "Transport", icon: "directions_car", color: "text-tertiary" },
  entertainment: { label: "Movies", icon: "movie", color: "text-primary" },
  shopping: { label: "Shopping", icon: "shopping_bag", color: "text-secondary" },
  health: { label: "Health", icon: "medical_services", color: "text-error" },
  utilities: { label: "Utils", icon: "bolt", color: "text-tertiary" },
  other: { label: "Other", icon: "more_horiz", color: "text-on-surface-variant" },
};

export const USERS: User[] = [
  {
    id: "u1",
    name: "Ali Hassan",
    username: "alihassan",
    email: "ali.hassan@example.com",
    avatar: "AH",
    role: "admin",
    status: "active",
    groups: 8,
    totalExpenses: 120400,
    joinedAt: "Jan 05, 2023",
    color: "#a8a4ff",
  },
  {
    id: "u2",
    name: "Ahmed Raza",
    username: "ahmedraza",
    email: "ahmed.raza@example.com",
    avatar: "AR",
    role: "member",
    status: "active",
    groups: 8,
    totalExpenses: 42850,
    joinedAt: "Oct 12, 2023",
    color: "#49f4c8",
  },
  {
    id: "u3",
    name: "Sara Khan",
    username: "skhan_x",
    email: "sara.khan@web.com",
    avatar: "SK",
    role: "member",
    status: "blocked",
    groups: 3,
    totalExpenses: 12200,
    joinedAt: "Mar 22, 2024",
    color: "#ff7672",
  },
  {
    id: "u4",
    name: "Fatima Malik",
    username: "fatima_m",
    email: "f.malik@corp.net",
    avatar: "FM",
    role: "member",
    status: "active",
    groups: 5,
    totalExpenses: 28110,
    joinedAt: "Feb 14, 2024",
    color: "#FF8C42",
  },
  {
    id: "u5",
    name: "Zain Butt",
    username: "zainbutt",
    email: "zain.b@outlook.com",
    avatar: "ZB",
    role: "member",
    status: "active",
    groups: 4,
    totalExpenses: 18900,
    joinedAt: "Nov 03, 2023",
    color: "#a8a4ff",
  },
  {
    id: "u6",
    name: "Rohan Das",
    username: "rohandas",
    email: "rohan.d@outlook.com",
    avatar: "RD",
    role: "member",
    status: "pending",
    groups: 1,
    totalExpenses: 0,
    joinedAt: "Mar 19, 2025",
    color: "#49f4c8",
  },
];

export const ME = USERS[0];

export const EXPENSES: Expense[] = [
  {
    id: "e1",
    description: "Dinner at Cuckoo's Den",
    amount: 3600,
    category: "food",
    paidBy: USERS[1],
    splitAmong: [USERS[0], USERS[1], USERS[2], USERS[4]],
    yourShare: 900,
    date: "Today",
    groupId: "g1",
  },
  {
    id: "e2",
    description: "Fuel - Motorway",
    amount: 12000,
    category: "transport",
    paidBy: USERS[0],
    splitAmong: [USERS[0], USERS[1], USERS[2], USERS[3], USERS[4]],
    yourShare: -9600,
    date: "Today",
    groupId: "g1",
  },
  {
    id: "e3",
    description: "Hotel Booking - Walled City",
    amount: 18500,
    category: "rent",
    paidBy: USERS[4],
    splitAmong: [USERS[0], USERS[1], USERS[4]],
    yourShare: 6166,
    date: "March 15",
    groupId: "g1",
  },
  {
    id: "e4",
    description: "July Rent",
    amount: 12000,
    category: "rent",
    paidBy: USERS[1],
    splitAmong: [USERS[0], USERS[1], USERS[3]],
    yourShare: 4000,
    date: "Yesterday",
    groupId: "g2",
  },
  {
    id: "e5",
    description: "Grocery Run",
    amount: 3200,
    category: "shopping",
    paidBy: USERS[0],
    splitAmong: [USERS[0], USERS[1], USERS[3]],
    yourShare: -2133,
    date: "March 14",
    groupId: "g2",
  },
  {
    id: "e6",
    description: "Air Tickets",
    amount: 8200,
    category: "transport",
    paidBy: USERS[0],
    splitAmong: [USERS[0], USERS[2]],
    yourShare: -4100,
    date: "July 5",
    groupId: "g4",
  },
];

export const GROUPS: Group[] = [
  {
    id: "g1",
    name: "Lahore Trip",
    emoji: "🏔️",
    members: [USERS[0], USERS[1], USERS[2], USERS[3], USERS[4]],
    expenses: EXPENSES.filter((e) => e.groupId === "g1"),
    totalSpent: 45200,
    settled: 18200,
    pending: 24600,
    status: "active",
    yourBalance: 2400,
    accentColor: "#a8a4ff",
  },
  {
    id: "g2",
    name: "Flat G-11",
    emoji: "🏠",
    members: [USERS[0], USERS[1], USERS[3]],
    expenses: EXPENSES.filter((e) => e.groupId === "g2"),
    totalSpent: 892000,
    settled: 750000,
    pending: 142000,
    status: "active",
    yourBalance: -14500,
    accentColor: "#ff7672",
  },
  {
    id: "g3",
    name: "Friday Lunches",
    emoji: "🍕",
    members: [USERS[0], USERS[1], USERS[2], USERS[3], USERS[4]],
    expenses: [],
    totalSpent: 18400,
    settled: 18400,
    pending: 0,
    status: "settled",
    yourBalance: 0,
    accentColor: "#ff7672",
  },
  {
    id: "g4",
    name: "Road Trip KPK",
    emoji: "🚗",
    members: [USERS[0], USERS[2]],
    expenses: EXPENSES.filter((e) => e.groupId === "g4"),
    totalSpent: 12000,
    settled: 0,
    pending: 12000,
    status: "active",
    yourBalance: 6200,
    accentColor: "#9995ff",
  },
];

export const BALANCES_OWE: Balance[] = [
  {
    id: "b1",
    from: ME,
    to: USERS[2],
    amount: 8750,
    description: "Grocery & Utility bills",
  },
  {
    id: "b2",
    from: ME,
    to: USERS[1],
    amount: 5500,
    description: "Dinner split @ Monal",
  },
];

export const BALANCES_OWED: Balance[] = [
  {
    id: "b3",
    from: USERS[3],
    to: ME,
    amount: 22400,
    description: "Flight tickets - Dubai Trip",
  },
];

export const GROUP_BALANCES: Balance[] = [
  { id: "gb1", from: USERS[1], to: USERS[0], amount: 500, description: "" },
  { id: "gb2", from: USERS[2], to: USERS[0], amount: 2100, description: "" },
  { id: "gb3", from: USERS[4], to: USERS[0], amount: 840, description: "" },
  { id: "gb4", from: USERS[0], to: USERS[3], amount: 1250, description: "" },
];

export function formatRs(amount: number): string {
  return `Rs. ${Math.abs(amount).toLocaleString("en-PK")}`;
}
