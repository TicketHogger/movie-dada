FROM mysql:5.7.23

ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes

COPY . /docker-entrypoint-initdb.d

CMD ["--default-authentication-plugin=mysql_native_password"]