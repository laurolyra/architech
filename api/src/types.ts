export interface IArchitect {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender?: number;
  age?: number;
}

export interface IClient {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender?: number;
  age?: number;
}

export interface ITicket {
  id: number;
  architect_id: number;
  description: string;
  price: number;
  client_id: number;
  status: number;
}
