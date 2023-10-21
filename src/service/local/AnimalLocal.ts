import { Animal, Search } from "../../models";
import IAnimalService from "../IAnimalService";
import animalList from '../../fixtures/animal.json';
import { v4 as uuidv4 } from 'uuid';

let list: Animal[] = animalList as Animal[];

class AnimalLocal implements IAnimalService {

  private static _instance: AnimalLocal = new AnimalLocal();

  private constructor() {
    AnimalLocal._instance = this;
  }

  public static getIntsnade(): AnimalLocal {
    return AnimalLocal._instance;
  }

  getbyId(id: string): Promise<Animal|undefined> {
    return Promise.resolve((list.find((a: Animal) => a._id === id)));
  }

  getBySearch(search: Search): Promise<Animal[]> {
    const {limit, offset, str} = search;
    const listResult: Animal[] = list.filter((a: Animal) => a.name.match(str as string));
    return Promise.resolve(listResult.slice(offset, offset+limit));
  }

  save(animal: Animal): Promise<Animal> {
    const newAnimal: Animal = {_id: uuidv4(),...animal};
    list = [newAnimal, ...list];
    return Promise.resolve(newAnimal);
  }

  edit(animal: Animal): Promise<boolean> {
    const finded: boolean = !!list.find((a:Animal) => a._id === animal._id);
    if(finded) 
      list = list.map((a: Animal) => a._id === animal._id ? animal : a);
    return Promise.resolve(finded);
  }

  delete(id: string): Promise<boolean> {
    const finded: boolean = !!list.find((a:Animal) => a._id === id);
    if(finded) 
      list = list.filter((a: Animal) => a._id !== id);
    return Promise.resolve(finded);
  }

}

export default AnimalLocal;