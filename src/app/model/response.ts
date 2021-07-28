export type ROLES = 'A' | 'U';

export interface User {
  pk: number;
  username: string;
  email: string;
  birthdate: string;
  role: ROLES;
  state: 1;
}

export interface UserRegister {
  username: string;
  email: string;
  birthdate: string;
  password: string;
  password_confirm: string;
}

export interface UserSend {
  username: string;
  password: string;
}
export interface UserResponse {
  user: User;
  token: string;
}

export interface UserChange{
  id: number;
  role: ROLES;
}
