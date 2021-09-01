/// <reference types="@types/google.maps" />

import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const customMap = new CustomMap('map');

customMap.addUserMarker(new User());
customMap.addCompanyMarker(new Company());
