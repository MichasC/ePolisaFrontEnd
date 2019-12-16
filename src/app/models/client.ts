import {Insurance} from './insurance';
import {Role} from './role';

export interface Client {
  id?: number;

  userName: String;
  password: String;
  firstName: String;
  lastName: String;
  numberPhone: number;
  mail: string;
  roles?: Array<Role>;
  insurance?: Array<Insurance>;
  // discount?: Discount;



}
