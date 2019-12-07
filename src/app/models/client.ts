import {Insurance} from './insurance';

export class Client {
  id: number;

  userName: String;
  firstName: String;
  lastName: String;
  numberPhone: number;
  mail: string;

  insurance?: Array<Insurance>;
  // discount?: Discount;



}
