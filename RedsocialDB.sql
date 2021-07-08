CREATE DATABASE Redsocial
use Redsocial


CREATE TABLE dbo.Pais (id_pais int primary key not null identity (1, 1), 
namepais varchar (30) not null )

INSERT INTO dbo.Pais (namepais) VALUES ('Mexico')
INSERT INTO dbo.Pais (namepais) VALUES ('Argentina') 
INSERT INTO dbo.Pais (namepais) VALUES ('Estados unidos') 

CREATE TABLE dbo.Tipousr (id_tipousr int primary key not null identity (1, 1), 
tipousr varchar (30) not null )

INSERT INTO dbo.Tipousr (tipousr) VALUES ('Tecler')
INSERT INTO dbo.Tipousr (tipousr) VALUES ('Tecler mentor')


CREATE TABLE dbo.Usuario (id int primary key not null identity (1, 1), 
nombre_usr varchar (30) not null, apellido_usr varchar (40) not null, 
email_usr nvarchar (50) not null, edad_usr int not null, contrasena nvarchar (30) NOT NULL, 
id_pais1 int NOT NULL, id_tipousr1 INT NOT NULL, perfillinkedin VARCHAR (50), hobbies NVARCHAR (300),
CONSTRAINT FKpais FOREIGN KEY (id_pais1) REFERENCES dbo.Pais (id_pais),
CONSTRAINT FKtipousr FOREIGN KEY (id_tipousr1) REFERENCES dbo.Tipousr (id_tipousr)
)


CREATE TABLE dbo.Tecnologia (id_tecnologia int primary key not null identity (1, 1), nombre_tecn NVARCHAR (30))

INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('Node js')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('Frontend')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('Swagger')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('Javascript')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('JWT')
INSERT INTO dbo.Tecnologia (nombre_tecn) VALUES ('MVC')

CREATE TABLE dbo.developer_tecno (id_usr2 int not null, id_tecnologia1 int not null, 
beforetecla INT check (beforetecla >0 and beforetecla <=10), aftertecla INT check (aftertecla >0 and aftertecla <=10), puntaje_tecn int check (puntaje_tecn >0 and puntaje_tecn <=5),  
CONSTRAINT FKtecnologia1 FOREIGN KEY (id_usr2) REFERENCES dbo.Usuario (id),
CONSTRAINT FKusuario2 FOREIGN KEY (id_tecnologia1) REFERENCES dbo.Tecnologia (id_tecnologia)
)

CREATE TABLE dbo.Conocimiento (id_conocimiento int primary key not null identity (1, 1), descripcion_conocimiento NVARCHAR (30))

INSERT INTO dbo.Conocimiento (descripcion_conocimiento) VALUES ('Base de datos')
INSERT INTO dbo.Conocimiento (descripcion_conocimiento) VALUES ('APIS')
INSERT INTO dbo.Conocimiento (descripcion_conocimiento) VALUES ('Testing')
INSERT INTO dbo.Conocimiento (descripcion_conocimiento) VALUES ('Seguridad')
INSERT INTO dbo.Conocimiento (descripcion_conocimiento) VALUES ('Teoria de objetos')

CREATE TABLE dbo.Usuario_conocimiento (id_usr3 int not null, id_conocimiento1 int not null, 
beforeconocimiento INT check (beforeconocimiento >0 and beforeconocimiento <=10), afterconocimiento INT check (afterconocimiento >0 and afterconocimiento <=10), puntaje_conocimiento int check (puntaje_conocimiento >0 and puntaje_conocimiento <=5),  
CONSTRAINT FKconocimiento1 FOREIGN KEY (id_usr3) REFERENCES dbo.Usuario (id),
CONSTRAINT FKusuario3 FOREIGN KEY (id_conocimiento1) REFERENCES dbo.Conocimiento (id_conocimiento)
)


CREATE TABLE dbo.Desempeno (id_desempeno int primary key not null identity (1, 1), descripcion_desempeno NVARCHAR (30))

INSERT INTO dbo.Desempeno (descripcion_desempeno) VALUES ('Calidad de codigo')
INSERT INTO dbo.Desempeno (descripcion_desempeno) VALUES ('Velocidad de entrega')
INSERT INTO dbo.Desempeno (descripcion_desempeno) VALUES ('performance del codigo')

CREATE TABLE dbo.Usuario_desempeno (id_usr4 int not null, id_desempeno1 int not null, 
beforedesempeno INT check (beforedesempeno >0 and beforedesempeno <=10), afterdesempeno INT check (afterdesempeno >0 and afterdesempeno <=10), puntaje_desempeno int check (puntaje_desempeno >0 and puntaje_desempeno <=5),  
CONSTRAINT FKdesempeno1 FOREIGN KEY (id_usr4) REFERENCES dbo.Usuario (id),
CONSTRAINT FKusuario4 FOREIGN KEY (id_desempeno1) REFERENCES dbo.Desempeno (id_desempeno)
)

CREATE TABLE dbo.Habilidad_blanda (id_habilidad int primary key not null identity (1, 1), descripcion_habilidad NVARCHAR (30))

INSERT INTO dbo.Habilidad_blanda (descripcion_habilidad) VALUES ('Enfocado')
INSERT INTO dbo.Habilidad_blanda (descripcion_habilidad) VALUES ('Trabajo en equipo')
INSERT INTO dbo.Habilidad_blanda (descripcion_habilidad) VALUES ('Comprometido')
INSERT INTO dbo.Habilidad_blanda (descripcion_habilidad) VALUES ('Comunicacion')
INSERT INTO dbo.Habilidad_blanda (descripcion_habilidad) VALUES ('Capacidad de aprendizaje')
INSERT INTO dbo.Habilidad_blanda (descripcion_habilidad) VALUES ('Resolucion de problemas')

CREATE TABLE dbo.Usuario_habilidad (id_usr5 int not null, id_habilidad1 int not null, 
beforehabilidad INT check (beforehabilidad >0 and beforehabilidad <=10), afterhabilidad INT check (afterhabilidad >0 and afterhabilidad <=10), puntaje_habilidad int check (puntaje_habilidad >0 and puntaje_habilidad <=5),  
CONSTRAINT FKhabilidad1 FOREIGN KEY (id_usr5) REFERENCES dbo.Usuario (id),
CONSTRAINT FKusuario5 FOREIGN KEY (id_habilidad1) REFERENCES dbo.Habilidad_blanda (id_habilidad)
)

CREATE TABLE dbo.Entorno_profesional (id_entorno int primary key not null identity (1, 1), descripcion_entorno NVARCHAR (30))

INSERT INTO dbo.Entorno_profesional (descripcion_entorno) VALUES ('Versionado - Github')
INSERT INTO dbo.Entorno_profesional (descripcion_entorno) VALUES ('Trello o Jira')
INSERT INTO dbo.Entorno_profesional (descripcion_entorno) VALUES ('Slack')
INSERT INTO dbo.Entorno_profesional (descripcion_entorno) VALUES ('Metodologias agiles')

CREATE TABLE dbo.Usuario_entorno (id_usr6 int not null, id_entorno1 int not null, 
beforeentorno INT check (beforeentorno >0 and beforeentorno <=10), afterentorno INT check (afterentorno >0 and afterentorno <=10), puntaje_entorno int check (puntaje_entorno >0 and puntaje_entorno <=5),  
CONSTRAINT FKentorno1 FOREIGN KEY (id_usr6) REFERENCES dbo.Usuario (id),
CONSTRAINT FKusuario6 FOREIGN KEY (id_entorno1) REFERENCES dbo.Entorno_profesional (id_entorno)
)

CREATE TABLE dbo.Foto_perfil (id_foto int NOT NULL primary key identity(1, 1), filename1 varchar (200) not null, descripcion_foto varchar (200), id_usr7 int not null
CONSTRAINT FKfotoperfil1 FOREIGN KEY (id_usr7) REFERENCES dbo.Usuario (id),
)