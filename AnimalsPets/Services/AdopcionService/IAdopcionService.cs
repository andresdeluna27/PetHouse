﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnimalsPets.Services.AdopcionService
{
    public interface IAdopcionService
    {
        int AdoptarAmigo(int owner, int id);
    }
}
