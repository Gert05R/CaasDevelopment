using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class MalvernDataController : ControllerBase
    {

        private readonly IDataRepository _repo;
    public MalvernDataController(IDataRepository repo)
    {
            _repo = repo;

    }

    [HttpGet]
      public async Task<ActionResult<List<malvernData>>> GetData()
      {
        var malvernData = await _repo.GetDataAsync();

        return Ok(malvernData);
      }

      [HttpGet("{id}")]
      public async Task<ActionResult<malvernData>> GetId(int id)
      {
        return await _repo.GetDataByIdAsync(id);
      }

      /*[HttpGet("{date}")]
      public string GetTimestamp(string date)
      {
        return "this will be the malvern data of Time stamp";
      }

      [HttpGet("{name}")]
      public string GetUserName(string name)
      {
        return "this will be the malvern data";
      }

      [HttpGet("{id}")]
      public string GetUserID(string id)
      {
        return "this will be the malvern data";
      }

      [HttpGet("{id}")]
      public string GetComputerID(string id)
      {
        return "this will be the malvern data";
      }*/

    }
}
