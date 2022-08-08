FROM node:12-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN echo 'Hallo aus dem Imagebau'

COPY server.js /usr/share/node/

EXPOSE 80

CMD [""]