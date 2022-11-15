using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;


namespace Infrastructure.Data
{
  public class StoreContext : DbContext
  {
    //the base passes the options to the base constructor class of dbcontext
    public StoreContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<malvernData> malvernDatas {get; set;}

     public DbSet<AuditTrailType> auditTrailTypes {get; set;}

     public DbSet<FileType> fileTypes {get; set;}

     protected override void OnModelCreating(ModelBuilder modelBuilder)
     {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

     }

  }
}
