import { User } from './components/User';
import { Company } from './components/Company';
import { LocationMap } from './components/Map';

const user = new User();
const company = new Company();

const locationMap = new LocationMap("map");
locationMap.addMarker(user);
locationMap.addMarker(company);


