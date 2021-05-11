# Maker Space Infrastructure

In diesem Repo befindet sich dir Konfiguration für die digitale Infrastruktur des Maker Space. Alle Services werden in Docker gehostet und über docker-compose verwaltet.

Zugang zu den Services bekommen alle Besuchenden des Maker Space. 

Vorschläge und Hinweise gerne an jonathan.guenz@experimenta.science oder als Issue.

## LDAP

Unsere Userverwaltung ist ein Open LDAP Server. Dieser Server hängt allerdings nicht direkt im Internet, sondern ist nur intern erreichbar um die Sicherheit zu erhöhen. Alle anderen Services greifen auf diesen LDAP zu um Userdaten zu erhalten.

## Wordpress

Aktuell vor allem um die Website des Maker Space zu betreiben. Allerdings wurden im Laufe der letzten Jahre verschiedene Plugins geschrieben, um den Maker Space zu verwalten. Die Plugins befinden sich in den anderen Repos dieser Organization.
Über Wordpress findet aktuell auch der SelfService für die Useraccounts statt.

## Nextcloud

Für unsere Dateiverwaltung und Austausch. Mit der Nextcloud können Dateien an den Lasercutter-PC und Schneidplotter gesendet werden. Alle User haben 10GB auf der Nextcloud zur Verfügung. Nach Bedarf und Absprache kann das Kontingent erhöht werden. 

## HumHub

Über dieses Tool wollen wir in Zukunft mit unserer Community arbeiten. Dabei soll es als SelfService, Kommunikationstool und für die Organisation genutzt werden.

## Jitsi

Für schnelle und einfache Videokonferenzen. Zugriff für Gäste ist aktiviert, benötigt aber immer User mit Maker Space Account.
