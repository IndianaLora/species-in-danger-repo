import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { speciesList } from "./speciesData/speciesData";
import SpeciesCards from "../components/speciesData/SpeciesCards";



function Species() {
  const [species, setSpecies] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      test: { name: "" },
    },
  });
  //add useEffect
  const onSubmit = (data) => {
    let inputName = data.test.name;

    speciesList.map((speciesStore) => {
     const speciesName = speciesStore.name;
      const des = speciesStore.des;
      inputName = inputName.toLowerCase();
      const img = speciesStore.img;
      if (inputName === speciesName.toLocaleLowerCase()) {
        console.log(speciesName);
        //Que pasa aqui
        setSpecies(speciesName);
        setImage(img);
        setDescription(des);
      } else {
        setSpecies("Name not found");
      }
    });
  };
  return (
    <div>
      <h1>Species in danger!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("test.name")}
          placeholder="Type a name for details"
        />
        <input type="submit" />
      </form>

      <h4>{description}</h4>
      <img src={image} alt="" />
      {/* estudiar filter y map */}
      <SpeciesCards/>
    </div>
  );
}

export default Species;
