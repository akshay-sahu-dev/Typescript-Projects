import { Mappable } from './CustomMap';
import faker from 'faker';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.catchPhrase = faker.company.catchPhrase();
  }

  markerContent(): string {
    return `<h2>Company Name: ${this.companyName}</h2> 
            <p>Catch Phrase: ${this.catchPhrase}</p>`;
  }
}
