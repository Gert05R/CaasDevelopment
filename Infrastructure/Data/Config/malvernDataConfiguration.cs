using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
  public class malvernDataConfiguration : IEntityTypeConfiguration<malvernData>
  {
    //Method to Configure the entity
    public void Configure(EntityTypeBuilder<malvernData> builder)
    {
      builder.Property(d => d.Id).IsRequired();
      builder.Property(d => d.actionType).IsRequired();
      builder.Property(d => d.userName).IsRequired();
    }
  }
}
