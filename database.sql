CREATE TABLE "messages" (
  "id" serial primary key,
  "name" varchar(120),
  "message" varchar(240)
);

INSERT INTO "messages" ("name", "message")
VALUES ('Dane', 'The busses were really slow today!');
INSERT INTO "messages" ("name", "message") VALUES ($1, $2);
SELECT * FROM "messages";