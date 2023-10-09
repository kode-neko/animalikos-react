import EnumSex from "./EnumSex";
import EnumSpecies from "./EnumSpecies";

interface Animal {
  _id?: string;
  name: string;
  species: EnumSpecies;
  sex: EnumSex;
  breed: string;
  bday: string;
  enter: string;
  desc: string;
}

export default Animal;