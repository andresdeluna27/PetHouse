using AnimalsPets.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnimalsPets.Services.AnimalService
{
    public interface IAnimalService
    {
        IEnumerable<Animal> GetAnimals();
        int AddAnimal(Animal nuevoAmigo);
        void DeleteAnimal(int animalId);
    }
}
