DROP DATABASE IF EXISTS childcare;
CREATE DATABASE childcare;

\c childcare;

-- NFCtag		P0001
-- Centre		(BELFIELD)
-- Roll		Kangaroo
-- Family  	Franzi
-- Child_First 	Lara
-- Child_Last 	Franzi
-- Relation	Brother
-- Title		Mr
-- First_Name	Benjamin
-- Last_Name	Franzi
-- Phone		0412341234


CREATE TABLE family (
  ID SERIAL PRIMARY KEY,
  nfctag VARCHAR,
  centre VARCHAR,
  roll VARCHAR,
  family VARCHAR,
  child_first VARCHAR,
  child_last VARCHAR,
  relation VARCHAR,
  title VARCHAR,
  first_name VARCHAR,
  last_name	VARCHAR,
  phone	VARCHAR
);

INSERT INTO family (nfctag, centre, roll, family, child_first, child_last, relation, title, first_name, last_name, phone)
  VALUES ('P0001', 'BELFIELD', 'KANGAROO', 'FRANZI', 'LARA', 'FRANZI', 'BROTHER', 'MR', 'BENJAMIN', 'FRANZI', '0412341234');

INSERT INTO family (nfctag, centre, roll, family, child_first, child_last, relation, title, first_name, last_name, phone)
  VALUES ('P0001', 'BELFIELD', 'KANGAROO', 'FRANZI', 'MITCHELL', 'FRANZI', 'BROTHER', 'MR', 'BENJAMIN', 'FRANZI', '0412341234');

INSERT INTO family (nfctag, centre, roll, family, child_first, child_last, relation, title, first_name, last_name, phone)
  VALUES ('P0002', 'ASHFIELD', 'PIDGEON', 'BLEAER', 'GALE', 'BLEAER', 'BROTHER', 'MS', 'VICTORIA', 'BLEAER', '0443214321');
