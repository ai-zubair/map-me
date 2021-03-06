import faker from 'faker'; 
import { Mappable, Named } from './Map';

class User implements Mappable, Named{
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  popupContent(): string {
    return `User Name: ${this.name}`;
  }
}

export { User };