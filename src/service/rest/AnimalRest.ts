import axios from "axios";
import { Animal, Search } from "../../models";
import IAnimalService from "../IAnimalService";

const {
  VITE_ANIMAL_SERVICE
} = process.env;

class AnimalLocal implements IAnimalService {

  private static _instance: AnimalLocal = new AnimalLocal();

  private constructor() {
    AnimalLocal._instance = this;
  }

  public static getIntsnade(): AnimalLocal {
    return AnimalLocal._instance;
  }

  getbyId(id: string): Promise<Animal|undefined> {
    return axios.get(`${VITE_ANIMAL_SERVICE}/${id}`);
  }
  getBySearch(search: Search): Promise<Animal[]> {
    return axios.post(`${VITE_ANIMAL_SERVICE}/search`, search);
  }
  save(animal: Animal): Promise<Animal> {
    return axios.post(`${VITE_ANIMAL_SERVICE}`, animal);
  }
  edit(animal: Animal): Promise<boolean> {
    return axios.put(`${VITE_ANIMAL_SERVICE}`, animal);
  }
  delete(id: string): Promise<boolean> {
    return axios.delete(`${VITE_ANIMAL_SERVICE}/${id}`);
  }
}

export default AnimalLocal;