FROM nextcloud:26.0.5-apache

RUN mkdir /data

RUN apt-get update
RUN apt-get install --no-install-recommends -y tidy csstidy nano 

RUN apt-get install software-properties-common -y && \
    apt-get update -y && \
    apt-get install ldap-utils libldap2-dev -y

RUN docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/ && \
    docker-php-ext-install ldap

COPY redis.config.php /usr/src/nextcloud/config/redis.config.php
