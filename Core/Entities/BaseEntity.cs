using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class BaseEntity
    {
          //Will be the primary Key of the table when table is created through the migration
        public int Id { get; set; }
    }
}
