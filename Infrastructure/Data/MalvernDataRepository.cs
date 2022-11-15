using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
  public class MalvernDataRepository : IDataRepository
  {
        private readonly StoreContext _context;
    public MalvernDataRepository(StoreContext context)
    {
            _context = context;

    }

    public async Task<IReadOnlyList<malvernData>> GetDataAsync()
    {
      return await _context.malvernDatas.ToListAsync();
    }

    public async Task<malvernData> GetDataByIdAsync(int id)
    {
      return await _context.malvernDatas.FindAsync(id);
    }
  }
}
