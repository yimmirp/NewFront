using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Guest.Migrations
{
    public partial class PhotosLodgins : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "latin1");

            //migrationBuilder.CreateTable(
            //    name: "rol",
            //    columns: table => new
            //    {
            //        id_rol = table.Column<int>(type: "int(11)", nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        nombreRol = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1")
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PRIMARY", x => x.id_rol);
            //    })
            //    .Annotation("MySql:CharSet", "latin1")
            //    .Annotation("Relational:Collation", "latin1_swedish_ci");

            //migrationBuilder.CreateTable(
            //    name: "users",
            //    columns: table => new
            //    {
            //        id_user = table.Column<int>(type: "int(11)", nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        nombre = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1"),
            //        apellido = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1"),
            //        correoElectronico = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1"),
            //        password = table.Column<string>(type: "varchar(25)", maxLength: 25, nullable: false, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1"),
            //        celular = table.Column<int>(type: "int(9)", nullable: true),
            //        fechanac = table.Column<DateOnly>(type: "date", nullable: true),
            //        foto = table.Column<string>(type: "varchar(200)", maxLength: 200, nullable: true, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1"),
            //        dpi = table.Column<long>(type: "bigint(12)", nullable: true),
            //        direccion = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: true, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1"),
            //        esNormal = table.Column<bool>(type: "tinyint(1)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PRIMARY", x => x.id_user);
            //    })
            //    .Annotation("MySql:CharSet", "latin1")
            //    .Annotation("Relational:Collation", "latin1_swedish_ci");

            //migrationBuilder.CreateTable(
            //    name: "asig_rol",
            //    columns: table => new
            //    {
            //        id_asig_rol = table.Column<int>(type: "int(11)", nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        id_rol = table.Column<int>(type: "int(11)", nullable: false),
            //        id_user = table.Column<int>(type: "int(11)", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PRIMARY", x => x.id_asig_rol);
            //        table.ForeignKey(
            //            name: "asig_rol_ibfk_1",
            //            column: x => x.id_rol,
            //            principalTable: "rol",
            //            principalColumn: "id_rol");
            //        table.ForeignKey(
            //            name: "asig_rol_ibfk_2",
            //            column: x => x.id_user,
            //            principalTable: "users",
            //            principalColumn: "id_user");
            //    })
            //    .Annotation("MySql:CharSet", "latin1")
            //    .Annotation("Relational:Collation", "latin1_swedish_ci");

            //migrationBuilder.CreateTable(
            //    name: "lodging",
            //    columns: table => new
            //    {
            //        lodgingID = table.Column<int>(type: "int(11)", nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        rooms = table.Column<int>(type: "int(11)", nullable: true),
            //        guests = table.Column<int>(type: "int(11)", nullable: true),
            //        beds = table.Column<int>(type: "int(11)", nullable: true),
            //        bathrooms = table.Column<int>(type: "int(11)", nullable: true),
            //        description = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: true, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1"),
            //        needsApproval = table.Column<bool>(type: "tinyint(1)", nullable: true),
            //        totalReviews = table.Column<int>(type: "int(11)", nullable: true),
            //        overallReview = table.Column<int>(type: "int(11)", nullable: true),
            //        idUser = table.Column<int>(type: "int(11)", nullable: true),
            //        services = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: true, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1"),
            //        active = table.Column<bool>(type: "tinyint(1)", nullable: true, defaultValueSql: "'1'")
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_lodging", x => x.lodgingID);
            //        table.ForeignKey(
            //            name: "lodging_user_fk",
            //            column: x => x.idUser,
            //            principalTable: "users",
            //            principalColumn: "id_user");
            //    })
            //    .Annotation("MySql:CharSet", "latin1")
            //    .Annotation("Relational:Collation", "latin1_swedish_ci");

            migrationBuilder.CreateTable(
                name: "PhotosLodgins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    LodgingId = table.Column<int>(type: "int(11)", nullable: false),
                    PhotoUrl = table.Column<string>(type: "longtext", nullable: false, collation: "latin1_swedish_ci")
                        .Annotation("MySql:CharSet", "latin1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhotosLodgins", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PhotosLodgins_lodging_LodgingId",
                        column: x => x.LodgingId,
                        principalTable: "lodging",
                        principalColumn: "lodgingID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "latin1")
                .Annotation("Relational:Collation", "latin1_swedish_ci");

            //migrationBuilder.CreateTable(
            //    name: "reservations",
            //    columns: table => new
            //    {
            //        reservationID = table.Column<int>(type: "int(11)", nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        startDate = table.Column<DateOnly>(type: "date", nullable: true),
            //        endDate = table.Column<DateOnly>(type: "date", nullable: true),
            //        approved = table.Column<bool>(type: "tinyint(1)", nullable: true),
            //        lodgingID = table.Column<int>(type: "int(11)", nullable: true),
            //        userID = table.Column<int>(type: "int(11)", nullable: true),
            //        active = table.Column<bool>(type: "tinyint(1)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_reservations", x => x.reservationID);
            //        table.ForeignKey(
            //            name: "reservations_lodging_lodgingID_fk",
            //            column: x => x.lodgingID,
            //            principalTable: "lodging",
            //            principalColumn: "lodgingID");
            //        table.ForeignKey(
            //            name: "reservations_users_id_user_fk",
            //            column: x => x.userID,
            //            principalTable: "users",
            //            principalColumn: "id_user");
            //    })
            //    .Annotation("MySql:CharSet", "latin1")
            //    .Annotation("Relational:Collation", "latin1_swedish_ci");

            //migrationBuilder.CreateTable(
            //    name: "reviews",
            //    columns: table => new
            //    {
            //        reviewID = table.Column<int>(type: "int(11)", nullable: false)
            //            .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
            //        comment = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: true, collation: "latin1_swedish_ci")
            //            .Annotation("MySql:CharSet", "latin1"),
            //        cleanlines = table.Column<int>(type: "int(11)", nullable: true),
            //        comunication = table.Column<int>(type: "int(11)", nullable: true),
            //        location = table.Column<int>(type: "int(11)", nullable: true),
            //        securityReview = table.Column<int>(type: "int(11)", nullable: true),
            //        reservationID = table.Column<int>(type: "int(11)", nullable: true),
            //        lodgingID = table.Column<int>(type: "int(11)", nullable: true),
            //        userID = table.Column<int>(type: "int(11)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_reviews", x => x.reviewID);
            //        table.ForeignKey(
            //            name: "reviews_lodging_lodgingID_fk",
            //            column: x => x.lodgingID,
            //            principalTable: "lodging",
            //            principalColumn: "lodgingID");
            //        table.ForeignKey(
            //            name: "reviews_reservations_reservationID_fk",
            //            column: x => x.reservationID,
            //            principalTable: "reservations",
            //            principalColumn: "reservationID");
            //        table.ForeignKey(
            //            name: "reviews_users_id_user_fk",
            //            column: x => x.userID,
            //            principalTable: "users",
            //            principalColumn: "id_user");
            //    })
            //    .Annotation("MySql:CharSet", "latin1")
            //    .Annotation("Relational:Collation", "latin1_swedish_ci");

            //migrationBuilder.CreateIndex(
            //    name: "id_rol",
            //    table: "asig_rol",
            //    column: "id_rol");

            //migrationBuilder.CreateIndex(
            //    name: "id_user",
            //    table: "asig_rol",
            //    column: "id_user");

            //migrationBuilder.CreateIndex(
            //    name: "lodging_user_fk",
            //    table: "lodging",
            //    column: "idUser");

            migrationBuilder.CreateIndex(
                name: "IX_PhotosLodgins_LodgingId",
                table: "PhotosLodgins",
                column: "LodgingId");

            //migrationBuilder.CreateIndex(
            //    name: "reservations_lodging_lodgingID_fk",
            //    table: "reservations",
            //    column: "lodgingID");

            //migrationBuilder.CreateIndex(
            //    name: "reservations_users_id_user_fk",
            //    table: "reservations",
            //    column: "userID");

            //migrationBuilder.CreateIndex(
            //    name: "reviews_lodging_lodgingID_fk",
            //    table: "reviews",
            //    column: "lodgingID");

            //migrationBuilder.CreateIndex(
            //    name: "reviews_reservations_reservationID_fk",
            //    table: "reviews",
            //    column: "reservationID");

            //migrationBuilder.CreateIndex(
            //    name: "reviews_users_id_user_fk",
            //    table: "reviews",
            //    column: "userID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "asig_rol");

            migrationBuilder.DropTable(
                name: "PhotosLodgins");

            migrationBuilder.DropTable(
                name: "reviews");

            migrationBuilder.DropTable(
                name: "rol");

            migrationBuilder.DropTable(
                name: "reservations");

            migrationBuilder.DropTable(
                name: "lodging");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
