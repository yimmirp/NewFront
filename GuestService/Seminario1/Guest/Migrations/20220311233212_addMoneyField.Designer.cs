﻿// <auto-generated />
using System;
using Guest.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Guest.Migrations
{
    [DbContext(typeof(airbnbContext))]
    [Migration("20220311233212_addMoneyField")]
    partial class addMoneyField
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseCollation("latin1_swedish_ci")
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.HasCharSet(modelBuilder, "latin1");

            modelBuilder.Entity("Guest.Data.AsigRol", b =>
                {
                    b.Property<int>("IdAsigRol")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_asig_rol");

                    b.Property<int>("IdRol")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_rol");

                    b.Property<int>("IdUser")
                        .HasColumnType("int(11)")
                        .HasColumnName("id_user");

                    b.HasKey("IdAsigRol")
                        .HasName("PRIMARY");

                    b.HasIndex(new[] { "IdRol" }, "id_rol");

                    b.HasIndex(new[] { "IdUser" }, "id_user");

                    b.ToTable("asig_rol", (string)null);
                });

            modelBuilder.Entity("Guest.Data.Lodging", b =>
                {
                    b.Property<int>("LodgingId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("lodgingID");

                    b.Property<bool?>("Active")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("tinyint(1)")
                        .HasColumnName("active")
                        .HasDefaultValueSql("'1'");

                    b.Property<int?>("Bathrooms")
                        .HasColumnType("int(11)")
                        .HasColumnName("bathrooms");

                    b.Property<int?>("Beds")
                        .HasColumnType("int(11)")
                        .HasColumnName("beds");

                    b.Property<string>("Description")
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)")
                        .HasColumnName("description");

                    b.Property<int?>("Guests")
                        .HasColumnType("int(11)")
                        .HasColumnName("guests");

                    b.Property<int?>("IdUser")
                        .HasColumnType("int(11)")
                        .HasColumnName("idUser");

                    b.Property<bool?>("NeedsApproval")
                        .HasColumnType("tinyint(1)")
                        .HasColumnName("needsApproval");

                    b.Property<int?>("OverallReview")
                        .HasColumnType("int(11)")
                        .HasColumnName("overallReview");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(65,30)");

                    b.Property<int?>("Rooms")
                        .HasColumnType("int(11)")
                        .HasColumnName("rooms");

                    b.Property<string>("Services")
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)")
                        .HasColumnName("services");

                    b.Property<int?>("TotalReviews")
                        .HasColumnType("int(11)")
                        .HasColumnName("totalReviews");

                    b.HasKey("LodgingId");

                    b.HasIndex(new[] { "IdUser" }, "lodging_user_fk");

                    b.ToTable("lodging", (string)null);
                });

            modelBuilder.Entity("Guest.Data.PhotosLodging", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("LodgingId")
                        .HasColumnType("int(11)");

                    b.Property<string>("PhotoUrl")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("LodgingId");

                    b.ToTable("PhotosLodgins");
                });

            modelBuilder.Entity("Guest.Data.Reservation", b =>
                {
                    b.Property<int>("ReservationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("reservationID");

                    b.Property<bool?>("Active")
                        .HasColumnType("tinyint(1)")
                        .HasColumnName("active");

                    b.Property<bool?>("Approved")
                        .HasColumnType("tinyint(1)")
                        .HasColumnName("approved");

                    b.Property<DateOnly?>("EndDate")
                        .HasColumnType("date")
                        .HasColumnName("endDate");

                    b.Property<int?>("LodgingId")
                        .HasColumnType("int(11)")
                        .HasColumnName("lodgingID");

                    b.Property<DateOnly?>("StartDate")
                        .HasColumnType("date")
                        .HasColumnName("startDate");

                    b.Property<int?>("UserId")
                        .HasColumnType("int(11)")
                        .HasColumnName("userID");

                    b.HasKey("ReservationId");

                    b.HasIndex(new[] { "LodgingId" }, "reservations_lodging_lodgingID_fk");

                    b.HasIndex(new[] { "UserId" }, "reservations_users_id_user_fk");

                    b.ToTable("reservations", (string)null);
                });

            modelBuilder.Entity("Guest.Data.Review", b =>
                {
                    b.Property<int>("ReviewId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("reviewID");

                    b.Property<int?>("Cleanlines")
                        .HasColumnType("int(11)")
                        .HasColumnName("cleanlines");

                    b.Property<string>("Comment")
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)")
                        .HasColumnName("comment");

                    b.Property<int?>("Comunication")
                        .HasColumnType("int(11)")
                        .HasColumnName("comunication");

                    b.Property<int?>("Location")
                        .HasColumnType("int(11)")
                        .HasColumnName("location");

                    b.Property<int?>("LodgingId")
                        .HasColumnType("int(11)")
                        .HasColumnName("lodgingID");

                    b.Property<int?>("ReservationId")
                        .HasColumnType("int(11)")
                        .HasColumnName("reservationID");

                    b.Property<int?>("SecurityReview")
                        .HasColumnType("int(11)")
                        .HasColumnName("securityReview");

                    b.Property<int?>("UserId")
                        .HasColumnType("int(11)")
                        .HasColumnName("userID");

                    b.HasKey("ReviewId");

                    b.HasIndex(new[] { "LodgingId" }, "reviews_lodging_lodgingID_fk");

                    b.HasIndex(new[] { "ReservationId" }, "reviews_reservations_reservationID_fk");

                    b.HasIndex(new[] { "UserId" }, "reviews_users_id_user_fk");

                    b.ToTable("reviews", (string)null);
                });

            modelBuilder.Entity("Guest.Data.Rol", b =>
                {
                    b.Property<int>("IdRol")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_rol");

                    b.Property<string>("NombreRol")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("nombreRol");

                    b.HasKey("IdRol")
                        .HasName("PRIMARY");

                    b.ToTable("rol", (string)null);
                });

            modelBuilder.Entity("Guest.Data.User", b =>
                {
                    b.Property<int>("IdUser")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasColumnName("id_user");

                    b.Property<string>("Apellido")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("apellido");

                    b.Property<int?>("Celular")
                        .HasColumnType("int(9)")
                        .HasColumnName("celular");

                    b.Property<string>("CorreoElectronico")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("correoElectronico");

                    b.Property<string>("Direccion")
                        .HasMaxLength(500)
                        .HasColumnType("varchar(500)")
                        .HasColumnName("direccion");

                    b.Property<long?>("Dpi")
                        .HasColumnType("bigint(12)")
                        .HasColumnName("dpi");

                    b.Property<bool?>("EsNormal")
                        .HasColumnType("tinyint(1)")
                        .HasColumnName("esNormal");

                    b.Property<DateOnly?>("Fechanac")
                        .HasColumnType("date")
                        .HasColumnName("fechanac");

                    b.Property<string>("Foto")
                        .HasMaxLength(200)
                        .HasColumnType("varchar(200)")
                        .HasColumnName("foto");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("nombre");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(25)
                        .HasColumnType("varchar(25)")
                        .HasColumnName("password");

                    b.HasKey("IdUser")
                        .HasName("PRIMARY");

                    b.ToTable("users", (string)null);
                });

            modelBuilder.Entity("Guest.Data.AsigRol", b =>
                {
                    b.HasOne("Guest.Data.Rol", "IdRolNavigation")
                        .WithMany("AsigRols")
                        .HasForeignKey("IdRol")
                        .IsRequired()
                        .HasConstraintName("asig_rol_ibfk_1");

                    b.HasOne("Guest.Data.User", "IdUserNavigation")
                        .WithMany("AsigRols")
                        .HasForeignKey("IdUser")
                        .IsRequired()
                        .HasConstraintName("asig_rol_ibfk_2");

                    b.Navigation("IdRolNavigation");

                    b.Navigation("IdUserNavigation");
                });

            modelBuilder.Entity("Guest.Data.Lodging", b =>
                {
                    b.HasOne("Guest.Data.User", "IdUserNavigation")
                        .WithMany("Lodgings")
                        .HasForeignKey("IdUser")
                        .HasConstraintName("lodging_user_fk");

                    b.Navigation("IdUserNavigation");
                });

            modelBuilder.Entity("Guest.Data.PhotosLodging", b =>
                {
                    b.HasOne("Guest.Data.Lodging", "Lodging")
                        .WithMany("PhothosList")
                        .HasForeignKey("LodgingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Lodging");
                });

            modelBuilder.Entity("Guest.Data.Reservation", b =>
                {
                    b.HasOne("Guest.Data.Lodging", "Lodging")
                        .WithMany("Reservations")
                        .HasForeignKey("LodgingId")
                        .HasConstraintName("reservations_lodging_lodgingID_fk");

                    b.HasOne("Guest.Data.User", "User")
                        .WithMany("Reservations")
                        .HasForeignKey("UserId")
                        .HasConstraintName("reservations_users_id_user_fk");

                    b.Navigation("Lodging");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Guest.Data.Review", b =>
                {
                    b.HasOne("Guest.Data.Lodging", "Lodging")
                        .WithMany("Reviews")
                        .HasForeignKey("LodgingId")
                        .HasConstraintName("reviews_lodging_lodgingID_fk");

                    b.HasOne("Guest.Data.Reservation", "Reservation")
                        .WithMany("Reviews")
                        .HasForeignKey("ReservationId")
                        .HasConstraintName("reviews_reservations_reservationID_fk");

                    b.HasOne("Guest.Data.User", "User")
                        .WithMany("Reviews")
                        .HasForeignKey("UserId")
                        .HasConstraintName("reviews_users_id_user_fk");

                    b.Navigation("Lodging");

                    b.Navigation("Reservation");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Guest.Data.Lodging", b =>
                {
                    b.Navigation("PhothosList");

                    b.Navigation("Reservations");

                    b.Navigation("Reviews");
                });

            modelBuilder.Entity("Guest.Data.Reservation", b =>
                {
                    b.Navigation("Reviews");
                });

            modelBuilder.Entity("Guest.Data.Rol", b =>
                {
                    b.Navigation("AsigRols");
                });

            modelBuilder.Entity("Guest.Data.User", b =>
                {
                    b.Navigation("AsigRols");

                    b.Navigation("Lodgings");

                    b.Navigation("Reservations");

                    b.Navigation("Reviews");
                });
#pragma warning restore 612, 618
        }
    }
}
