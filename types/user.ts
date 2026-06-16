

export type Role = "USER" | "ADMIN" | "EDITOR";

export interface User {
  id: string;
  name?: string;
  email: string;
  image?: string;
  role: Role;
  createdAt: Date;
}

