using Microsoft.EntityFrameworkCore.Migrations;

namespace Polizas.API.Migrations
{
    public partial class Añadir_Cedula : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Cedula",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cedula",
                table: "AspNetUsers");
        }
    }
}
