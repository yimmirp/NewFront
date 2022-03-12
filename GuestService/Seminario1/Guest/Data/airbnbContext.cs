using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Guest.Data
{
    public partial class airbnbContext : DbContext
    {
        public airbnbContext()
        {
        }

        public airbnbContext(DbContextOptions<airbnbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AsigRol> AsigRols { get; set; } = null!;
        public virtual DbSet<Lodging> Lodgings { get; set; } = null!;
        public virtual DbSet<Reservation> Reservations { get; set; } = null!;
        public virtual DbSet<Review> Reviews { get; set; } = null!;
        public virtual DbSet<Rol> Rols { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        public DbSet<PhotosLodging> PhotosLodging { get; set; }

        //        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //        {
        //            if (!optionsBuilder.IsConfigured)
        //            {
        //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        //                optionsBuilder.UseMySql("server=34.94.68.96;database=airbnb;port=3306;user id=root;password=secret", Microsoft.EntityFrameworkCore.ServerVersion.Parse("5.7.37-mysql"));
        //            }
        //        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("latin1_swedish_ci")
                .HasCharSet("latin1");

            modelBuilder.Entity<AsigRol>(entity =>
            {
                entity.HasKey(e => e.IdAsigRol)
                    .HasName("PRIMARY");

                entity.ToTable("asig_rol");

                entity.HasIndex(e => e.IdRol, "id_rol");

                entity.HasIndex(e => e.IdUser, "id_user");

                entity.Property(e => e.IdAsigRol)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_asig_rol");

                entity.Property(e => e.IdRol)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_rol");

                entity.Property(e => e.IdUser)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_user");

                entity.HasOne(d => d.IdRolNavigation)
                    .WithMany(p => p.AsigRols)
                    .HasForeignKey(d => d.IdRol)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("asig_rol_ibfk_1");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.AsigRols)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("asig_rol_ibfk_2");
            });

            modelBuilder.Entity<Lodging>(entity =>
            {
                entity.ToTable("lodging");

                entity.HasIndex(e => e.IdUser, "lodging_user_fk");

                entity.Property(e => e.LodgingId)
                    .HasColumnType("int(11)")
                    .HasColumnName("lodgingID");

                entity.Property(e => e.Active)
                    .HasColumnName("active")
                    .HasDefaultValueSql("'1'");

                entity.Property(e => e.Bathrooms)
                    .HasColumnType("int(11)")
                    .HasColumnName("bathrooms");

                entity.Property(e => e.Beds)
                    .HasColumnType("int(11)")
                    .HasColumnName("beds");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .HasColumnName("description");

                entity.Property(e => e.Guests)
                    .HasColumnType("int(11)")
                    .HasColumnName("guests");

                entity.Property(e => e.IdUser)
                    .HasColumnType("int(11)")
                    .HasColumnName("idUser");

                entity.Property(e => e.NeedsApproval).HasColumnName("needsApproval");

                entity.Property(e => e.OverallReview)
                    .HasColumnType("int(11)")
                    .HasColumnName("overallReview");

                entity.Property(e => e.Rooms)
                    .HasColumnType("int(11)")
                    .HasColumnName("rooms");

                entity.Property(e => e.Services)
                    .HasMaxLength(500)
                    .HasColumnName("services");

                entity.Property(e => e.TotalReviews)
                    .HasColumnType("int(11)")
                    .HasColumnName("totalReviews");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.Lodgings)
                    .HasForeignKey(d => d.IdUser)
                    .HasConstraintName("lodging_user_fk");
            });

            modelBuilder.Entity<Reservation>(entity =>
            {
                entity.ToTable("reservations");

                entity.HasIndex(e => e.LodgingId, "reservations_lodging_lodgingID_fk");

                entity.HasIndex(e => e.UserId, "reservations_users_id_user_fk");

                entity.Property(e => e.ReservationId)
                    .HasColumnType("int(11)")
                    .HasColumnName("reservationID");

                entity.Property(e => e.Active).HasColumnName("active");

                entity.Property(e => e.Approved).HasColumnName("approved");

                entity.Property(e => e.EndDate).HasColumnName("endDate");

                entity.Property(e => e.LodgingId)
                    .HasColumnType("int(11)")
                    .HasColumnName("lodgingID");

                entity.Property(e => e.StartDate).HasColumnName("startDate");

                entity.Property(e => e.UserId)
                    .HasColumnType("int(11)")
                    .HasColumnName("userID");

                entity.HasOne(d => d.Lodging)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.LodgingId)
                    .HasConstraintName("reservations_lodging_lodgingID_fk");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("reservations_users_id_user_fk");
            });

            modelBuilder.Entity<Review>(entity =>
            {
                entity.ToTable("reviews");

                entity.HasIndex(e => e.LodgingId, "reviews_lodging_lodgingID_fk");

                entity.HasIndex(e => e.ReservationId, "reviews_reservations_reservationID_fk");

                entity.HasIndex(e => e.UserId, "reviews_users_id_user_fk");

                entity.Property(e => e.ReviewId)
                    .HasColumnType("int(11)")
                    .HasColumnName("reviewID");

                entity.Property(e => e.Cleanlines)
                    .HasColumnType("int(11)")
                    .HasColumnName("cleanlines");

                entity.Property(e => e.Comment)
                    .HasMaxLength(500)
                    .HasColumnName("comment");

                entity.Property(e => e.Comunication)
                    .HasColumnType("int(11)")
                    .HasColumnName("comunication");

                entity.Property(e => e.Location)
                    .HasColumnType("int(11)")
                    .HasColumnName("location");

                entity.Property(e => e.LodgingId)
                    .HasColumnType("int(11)")
                    .HasColumnName("lodgingID");

                entity.Property(e => e.ReservationId)
                    .HasColumnType("int(11)")
                    .HasColumnName("reservationID");

                entity.Property(e => e.SecurityReview)
                    .HasColumnType("int(11)")
                    .HasColumnName("securityReview");

                entity.Property(e => e.UserId)
                    .HasColumnType("int(11)")
                    .HasColumnName("userID");

                entity.HasOne(d => d.Lodging)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.LodgingId)
                    .HasConstraintName("reviews_lodging_lodgingID_fk");

                entity.HasOne(d => d.Reservation)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.ReservationId)
                    .HasConstraintName("reviews_reservations_reservationID_fk");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("reviews_users_id_user_fk");
            });

            modelBuilder.Entity<Rol>(entity =>
            {
                entity.HasKey(e => e.IdRol)
                    .HasName("PRIMARY");

                entity.ToTable("rol");

                entity.Property(e => e.IdRol)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_rol");

                entity.Property(e => e.NombreRol)
                    .HasMaxLength(100)
                    .HasColumnName("nombreRol");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.IdUser)
                    .HasName("PRIMARY");

                entity.ToTable("users");

                entity.Property(e => e.IdUser)
                    .HasColumnType("int(11)")
                    .HasColumnName("id_user");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(100)
                    .HasColumnName("apellido");

                entity.Property(e => e.Celular)
                    .HasColumnType("int(9)")
                    .HasColumnName("celular");

                entity.Property(e => e.CorreoElectronico)
                    .HasMaxLength(100)
                    .HasColumnName("correoElectronico");

                entity.Property(e => e.Direccion)
                    .HasMaxLength(500)
                    .HasColumnName("direccion");

                entity.Property(e => e.Dpi)
                    .HasColumnType("bigint(12)")
                    .HasColumnName("dpi");

                entity.Property(e => e.EsNormal).HasColumnName("esNormal");

                entity.Property(e => e.Fechanac).HasColumnName("fechanac");

                entity.Property(e => e.Foto)
                    .HasMaxLength(200)
                    .HasColumnName("foto");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnName("nombre");

                entity.Property(e => e.Password)
                    .HasMaxLength(25)
                    .HasColumnName("password");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
