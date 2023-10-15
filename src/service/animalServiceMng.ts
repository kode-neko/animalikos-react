import IAnimalService from "./IAnimalService";
import { AnimalLocal } from "./local";
import { AnimalRest } from "./rest";

const {
  VITE_SERVICE_TYPE
} = import.meta.env;

function animalServiceMng(): IAnimalService {
  if(VITE_SERVICE_TYPE === 'rest')
    return AnimalRest.getIntsnade();
  return AnimalLocal.getIntsnade();
}

export default animalServiceMng;