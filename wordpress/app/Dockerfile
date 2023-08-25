FROM wordpress:6.3.0-php8.2-apache

RUN apt-get update
RUN apt-get install --no-install-recommends -y tidy csstidy nano netcat 

RUN apt-get install software-properties-common -y && \
    apt-get update -y && \
    apt-get install ldap-utils libldap2-dev -y

RUN docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/ && \
    docker-php-ext-install ldap
