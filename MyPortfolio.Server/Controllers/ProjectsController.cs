using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase {
    [HttpGet]
    public IActionResult Get() => Ok(new[] { 
        new Project(1, "SAP Procurement Management System", "C#, MS SQL"),
        new Project(2, "Training Management System", "Native PHP , MS SQL"),
        new Project(3, "Budget and Indirect Management System", "C#, ASP.NET Core MVC, PostgreSQL"),
        new Project(4, "IPORTALv2", "C#, ASP.NET Core, MS SQL"),
        new Project(5, "BPS Ticketing System", "React, TypeScript, ASP.NET Core, SignalR, MS SQL")
    
    });
}