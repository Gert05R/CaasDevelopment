using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IDataRepository
    {
      Task<malvernData> GetDataByIdAsync(int id);
      Task<IReadOnlyList<malvernData>> GetDataAsync();
    }
}
