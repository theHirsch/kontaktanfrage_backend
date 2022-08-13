FROM postgres:latest
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN docker exec -it postgres_max bash
RUN psql -U postgres
RUN create database testdb;
RUN psql -h localhost -p 5432 -U postgres -W MadMax12
