export interface IPerson {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: 'string';
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
