import characters from "../Data/Characters";
import CharacterCard from "../Components/CharecterCard";

const Characters = () => {
  return (
    <section className="bg-black py-24">

      <h1 className="text-5xl text-center text-white font-bold mb-4">
        Meet the Demon Slayers
      </h1>

      <p className="text-center text-gray-400 mb-16">
        The strongest warriors who protect humanity.
      </p>

      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}

      </div>

    </section>
  );
};

export default Characters;