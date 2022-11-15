using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.migrations
{
    /// <inheritdoc />
    public partial class intialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "auditTrailTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Type = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_auditTrailTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "fileTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Type = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_fileTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "malvernDatas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    actionType = table.Column<string>(type: "TEXT", nullable: false),
                    timestamp = table.Column<string>(type: "TEXT", nullable: true),
                    userName = table.Column<string>(type: "TEXT", nullable: false),
                    userId = table.Column<string>(type: "TEXT", nullable: true),
                    computerId = table.Column<string>(type: "TEXT", nullable: true),
                    FileName = table.Column<string>(type: "TEXT", nullable: true),
                    DateRange = table.Column<string>(type: "TEXT", nullable: true),
                    AuditTrailTypeId = table.Column<int>(type: "INTEGER", nullable: false),
                    FileTypeId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_malvernDatas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_malvernDatas_auditTrailTypes_AuditTrailTypeId",
                        column: x => x.AuditTrailTypeId,
                        principalTable: "auditTrailTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_malvernDatas_fileTypes_FileTypeId",
                        column: x => x.FileTypeId,
                        principalTable: "fileTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_malvernDatas_AuditTrailTypeId",
                table: "malvernDatas",
                column: "AuditTrailTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_malvernDatas_FileTypeId",
                table: "malvernDatas",
                column: "FileTypeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "malvernDatas");

            migrationBuilder.DropTable(
                name: "auditTrailTypes");

            migrationBuilder.DropTable(
                name: "fileTypes");
        }
    }
}
