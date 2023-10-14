import { Animal, Search } from "../models";

interface IAnimalService {
  getbyId(id: string): Promise<Animal|undefined>;
  getBySearch(search: Search): Promise<Animal[]>;
  save(animal: Animal): Promise<Animal>;
  edit(animal: Animal): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

export default IAnimalService;