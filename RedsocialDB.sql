CREATE DATABASE Redsocial
use Redsocial


CREATE TABLE dbo.Pais (id_pais int primary key not null identity (1, 1), 
namepais varchar (30) not null )

INSERT INTO dbo.Pais (namepais) VALUES ('Mexico')
INSERT INTO dbo.Pais (namepais) VALUES ('Argentina') 
INSERT INTO dbo.Pais (namepais) VALUES ('Estados unidos') 

CREATE TABLE dbo.Usuario (id int primary key not null identity (1, 1), 
nombre_usr varchar (30) not null, apellido_usr varchar (40) not null, email_usr nvarchar (50) not null, edad_usr int not null, contrasena nvarchar (30) NOT NULL, id_pais1 int NOT NULL, perfillinkedin VARCHAR (50)
CONSTRAINT FKpais FOREIGN KEY (id_pais1) REFERENCES dbo.Pais (id_pais))


CREATE TABLE dbo.Foto_perfil (id_foto int primary key not null identity (1, 1), descripcion_foto NVARCHAR (50) NOT NULL, id_usr1 int NOT NULL
CONSTRAINT FKfotoperfil FOREIGN KEY (id_usr1) REFERENCES dbo.Usuario (id)
)


CREATE TABLE dbo.Tecnologia (id_tecnologia int primary key not null identity (1, 1), nombre_tecn NVARCHAR (30))

INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('Node js')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('Frontend')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('Swagger')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('Javascript')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('JWT')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('MVC')

CREATE TABLE dbo.developer_tecno (id_usr2 int not null, id_tecnologia1 int not null, puntaje_tecn int,  
CONSTRAINT FKtecnologia1 FOREIGN KEY (id_usr2) REFERENCES dbo.Usuario (id),
CONSTRAINT FKusuario2 FOREIGN KEY (id_tecnologia1) REFERENCES dbo.Tecnologia (id_tecnologia)
)
