import {Product} from './product';
import {PersonCar} from './personCar';

export class Insurance {
  id?: number;
  name:String;
  dateSubmission: Date;
  dateStart: number;
  dateEnd: number;
  price: String;
  product : Array<Product>;
  personCar?: PersonCar;
  statusInsurance? : boolean;
}
