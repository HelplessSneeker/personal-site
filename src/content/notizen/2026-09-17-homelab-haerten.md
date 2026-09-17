---
title: "Ein Ein-Mann-Homelab härten — was messbar geholfen hat und was Theater war"
description: "Zwei Wochen Security-Arbeit an drei Servern und einem Notebook, betrieben von einer Person. Mit den Messfehlern, die ich dabei selbst gebaut habe."
date: 2026-09-17
lang: de
draft: true
---

Im September 2026 habe ich zwei Wochen damit verbracht, meinen eigenen Maschinenpark zu härten: drei Linux-Server und ein Notebook, betrieben von genau einer Person. Kein Team, keine Security-Abteilung, kein Budget für Werkzeug. Das hier ist der Bericht, inklusive der Teile, die nichts gebracht haben.

Anlass war kein Vorfall, sondern eine Vermutung: dass ich nicht weiß, wie exponiert ich eigentlich bin. Die erste Runde war deshalb strikt lesend. Nichts anfassen, nur messen. Das klingt nach einer Formalie, ist aber die eigentliche Entscheidung — zwei der geplanten Arbeitspakete haben sich beim Messen erledigt, weil sie längst umgesetzt waren. Eine Offen-Liste beschreibt den Plan, nicht die Maschine.

## Das Ergebnis in einem Satz

Die Außengrenze stand. Von außen erreichbar waren exakt zwei Ports auf genau einem Host, SSH überall schlüsselbasiert und ohne Root-Login, Brute-Force-Schutz auf allen Maschinen. Die Löcher lagen nach innen: ein flaches Vertrauen ins eigene Heimnetz, Kernel-Updates, die seit Wochen nur auf der Platte lagen, und — der eigentliche Fund — ein Backup-Pfad, über den sich die komplette Sicherungskette löschen ließ.

Wer erwartet, dass so ein Audit die Firewall findet, sucht an der falschen Stelle. Die Firewall ist der Teil, den man baut, solange man aufmerksam ist. Der Rest entsteht aus Abkürzungen, die man sich selbst gelegt hat, als es schnell gehen musste.

## Was messbar geholfen hat

### Gepatcht ist nicht neu gestartet

Auf allen Hosts lief `unattended-upgrades`, brav, seit Monaten, ohne Fehler. Auf dem exponiertesten Host lief zu diesem Zeitpunkt ein Kernel, der **fünfzehn Wochen** alt war. Neun neuere Kernel lagen installiert auf der Platte und warteten auf einen Neustart, der nie kam.

Das ist der unangenehmste Befund des ganzen Blocks, weil er sich als grüner Haken tarnt: Das Update-System meldet „gepatcht", und es hat recht — die Pakete sind da. Der laufende Kernel ist es nicht. Zwischen beidem liegt eine Reboot-Policy, die ich nie geschrieben hatte.

Der Fix ist eine Konfigurationsdatei pro Host plus ein Zeitfenster, das nicht im Backup-Fenster liegt. Zwei Fallstricke haben dabei zugeschlagen, beide unsichtbar, bis man nachmisst:

- Ohne festen Upgrade-Zeitpunkt läuft der Update-Job irgendwann am Morgen und ruft dann einen Neustart „um 04:00" auf — also am **Folgetag**. Ergebnis: 21 Stunden Verzug, in denen die Maschine ungepatcht weiterläuft und trotzdem als erledigt gilt.
- Beim Überschreiben eines systemd-Zeitplans muss der leere Wert **vor** dem neuen stehen, sonst addiert systemd den eigenen dazu, statt ihn zu ersetzen. Es sieht dann korrekt aus und feuert zweimal.

Der beobachtete Neustart danach: neun Kernel-Versionen aufgeholt, alle Container wieder oben, alle Timer wieder aktiv, drei Web-Dienste erreichbar, **60 Sekunden** bis SSH wieder antwortet. Diese 60 Sekunden sind die eigentliche Erkenntnis — der Neustart, vor dem ich mich fünfzehn Wochen lang gedrückt hatte, kostete eine Minute.

### Die eine Regel, die alles aufmacht

Auf dem Datenhost im Heimnetz stand eine Firewall-Regel, die jedem Gerät im lokalen Netz jeden Dienst erlaubte. Sie war irgendwann als Abkürzung entstanden und nie wieder angefasst worden. Gemeint waren damit zwei Dienste — der Medien-Server und die Foto-Ablage. Gegeben waren: Container-Verwaltung (was faktisch Root auf der Maschine bedeutet), Buchhaltung, Datei-Browser, Download-Stack, Dashboard. Für jedes Gerät im Netz, also auch Fernseher, Konsolen, Sprachassistenten und alles, was Besuch mitbringt.

Mich hat an diesem Punkt gereizt, es nicht einfach zuzuschneiden, sondern vorher zu **messen**, was tatsächlich genutzt wird. Sechs Tage Logging auf neue Verbindungen, dann auswerten, dann schneiden. Das Ergebnis deckte sich mit der Erwartung, aber die Messung hat drei Dinge beigebracht, die ich sonst nie gelernt hätte — sie stehen weiter unten unter Theater, weil zwei davon glatt daneben lagen.

Nach dem Schnitt: ein echter Neustart als Beweis, dass die Regeln auch in der richtigen Reihenfolge wieder hochkommen. Sechs von sechs Regeln da, null unbeabsichtigte Blockaden.

### Docker umgeht die Host-Firewall

Der Punkt, den ich vorher zwar gelesen, aber nicht geglaubt hatte: Container-Portfreigaben hängen sich unterhalb der Host-Firewall in die Paketfilter-Kette. Man kann eine Firewall sauber konfigurieren, `status` abfragen, ein zufriedenes „aktiv" lesen — und die Container sind trotzdem für das ganze Netz offen. Die Regeln müssen in die Kette, die der Container-Daemon selbst anlegt und respektiert, sonst wirken sie nicht.

Das betraf beide Server mit Containern. Der Fix ist unspektakulär; interessant ist die Beweisführung, siehe unten.

### Der gefährlichste Zugang war der Backup-Pfad

Der schwerste Befund kam erst in der zweiten Woche und stand in keinem Plan. Meine Offsite-Sicherungen liegen auf einem Speicherprodukt mit Unterkonten, jedes Backup-Ziel hat sein eigenes, und die Repositories laufen mit einer Einstellung, die nur Anhängen erlaubt — Löschen ist über diesen Weg unmöglich. Das war der Stolz der Backup-Arbeit aus Block 1.

Nur hing auf einer der Maschinen zusätzlich ein Netzlaufwerk, eingehängt mit den Zugangsdaten des **Hauptkontos**, schreibend, mit Sicht auf alle Unterkonten. Das Anhängen-Only war damit nicht umgangen im Sinne von ausgehebelt — es war schlicht irrelevant, weil daneben ein zweiter Weg offenstand, der alles durfte. Ein kompromittierter Prozess auf dieser einen Maschine hätte nicht nur seine eigenen Sicherungen manipulieren können, sondern jede Sicherung im ganzen Park löschen.

Ich habe den Schreibzugriff verifiziert, bevor ich es geglaubt habe: Datei angelegt, Datei wieder entfernt. Danach den Einhängepunkt auf ein eigenes Unterkonto umgestellt, Sichtweite damit auf dessen eigenes Verzeichnis reduziert, die Zugangsdaten des Hauptkontos von der Maschine gelöscht und ausschließlich in den Passwort-Manager gelegt.

Die Lehre daran ist allgemeiner Natur: **Eine Schutzmaßnahme wirkt nur, wenn sie der einzige Weg ist.** Append-only gilt für den Pfad, für den es konfiguriert ist. Jeder zweite Zugang mit mehr Rechten setzt es still außer Kraft, ohne dass irgendwo eine Warnung erscheint.

### Der Agent bekommt einen Verb-Katalog statt einer Gruppe

Ein Teil meiner Wartung läuft automatisiert unter einem eigenen Benutzer. Der hatte, weil es beim Einrichten praktisch war, Mitgliedschaft in den Gruppen, die Container steuern dürfen — und damit effektiv Root über einen Umweg.

Ersetzt durch zwei Wrapper: einen mit einem festen Katalog erlaubter Lese-Verben, der ohne Rückfrage läuft, und einen für echte Wartung, der nur in einem Zeitfenster funktioniert, das ich selbst öffne. Vorher gemessen, ob eine Automatisierung an den alten Rechten hängt — keine tat es, die Backup-Jobs laufen als System-Einheiten. Rückbau-Datei angelegt, bevor die Regel scharf ging.

## Was Theater war

Jetzt der ehrliche Teil. Die folgenden Messungen sahen aus wie Sicherheit und waren keine.

**Exposure von der eigenen Maschine messen.** Ein Verbindungstest von einem Server auf dessen eigene öffentliche Adresse meldet den SSH-Port als offen. Das ist eine Kurzschluss-Route über das lokale Interface, nicht der Weg von außen. Wäre mir das nicht aufgefallen, hätte der Bericht mit einem Fehlalarm begonnen. Exposure misst man von einem fremden Host — und mit Gegenprobe, dass von dort ausgehend überhaupt etwas geht, sonst misst man eine kaputte Leitung als Sicherheit.

**Der Portscan, den jemand anderes beantwortet.** Für den zweiten Server habe ich die Container-Firewall gebaut und wollte sie mit einem Scan von außen beweisen. Der Scan war sauber — aber er beweist nichts, weil davor eine Cloud-Firewall des Anbieters sitzt, die schon blockt. Ich hätte die Host-Regeln komplett weglassen können und dasselbe Ergebnis bekommen. Der Beweis läuft stattdessen über die Paketzähler der Regeln selbst: gezählte Treffer heißt, die Regel hat gearbeitet.

**`--dry-run` als Beweis.** Ein Probelauf zeigt, was der Code tut, den ein Probelauf erreicht. Der Neustart-Pfad hinter einem `if not dry_run` wird dabei per Konstruktion nie betreten. Dass die Reboot-Kette funktioniert, weiß ich aus genau einem Grund: weil ich zugesehen habe, wie eine Maschine wirklich neu gestartet ist.

**Ein Prüfkommando, das nicht zum System passt.** Die Abfrage, ob ein Firewall-Dienst läuft, meldete auf dem Notebook sauber „inaktiv" — nur heißt der Dienst dort anders, weil es ein anderes Paketfilter-System ist. Das aktive System lief die ganze Zeit. Ein falsch benanntes Prüfkommando liefert keinen Fehler, sondern eine **falsche Antwort**, und eine falsche Antwort ist schlimmer als gar keine.

**Ein Log-Filter, der still das Gegenteil tut.** Bei der Auswertung der Firewall-Protokolle setzt die naheliegende Kurzform des Journal-Befehls implizit „nur der aktuelle Systemstart" und überstimmt damit den Zeitraum, den man ausdrücklich angegeben hat — ohne Warnung. Null Treffer statt 9.662. Ich habe eine Viertelstunde lang geglaubt, das Logging sei nicht scharf. Dazu: ein Firewall-Log auf einem Container-Host sieht Container-Verkehr per Konstruktion nicht. Und die ersten Treffer nach dem Scharfstellen waren zu hundert Prozent Netzwerk-Discovery-Geplapper — wer das nicht herausfiltert, zählt Rauschen und nennt es Nutzung.

**Zwei von sechs Befunden waren meine eigenen Messfehler.** Beim Durchsuchen nach Zugangsdaten im Klartext meldete mein Prüfskript sechs von sechs Dateien als auffällig. Ursache eins: Die Suche stellt jeder Trefferzeile die Zeilennummer mit Doppelpunkt voran, und mein Auswerter las genau diesen Doppelpunkt als Trennzeichen — jeder Wert fing dadurch mit einer Zahl an statt mit dem Platzhalter, nach dem ich suchte. Ursache zwei: Ein Dateirechte-Scan lief als Root und meldete Dateien als weltlesbar; sie sind es formal auch, nur liegt das übergeordnete Verzeichnis so eng, dass niemand hinkommt. Die Gegenprobe unter dem unprivilegierten Benutzer wurde sauber verweigert.

Daraus der Merksatz, den ich mir aufgeschrieben habe: **Wenn ein Check *alles* beanstandet, verdächtige zuerst den Check.** Sechs von sechs abweichend ist unwahrscheinlicher als ein Fehler im eigenen Vergleich.

**Das Audit-Log, das ich dann nicht gebaut habe.** Ganz oben auf der ursprünglichen Liste stand, die Protokolle privilegierter Befehle von der Maschine wegzuziehen, damit sie nicht dort liegen, wo der Automatisierungs-Benutzer Root ist. Technisch vorbereitet, dann verworfen. Der Grund: Es schützt nichts und erkennt nichts, es bewahrt Beweise für den Fall, dass ich forensisch arbeiten muss. Gegen den wahrscheinlichsten Angriffsweg auf ein automatisiertes Setup — untergeschobene Anweisungen, die der Agent brav ausführt — hilft es gar nicht, weil dabei niemand Logs aufräumt. Der Aufwand wanderte stattdessen in den Backup-Pfad oben. Das war die richtige Reihenfolge, aber sie stand nicht im Plan; sie kam aus der Messung.

## Was ich mitnehme

Der Unterschied zwischen *konfiguriert* und *wirksam* ist der ganze Inhalt dieser zwei Wochen. Fast jeder echte Befund hatte dieselbe Form: Es gab eine Maßnahme, sie war korrekt eingerichtet, und daneben lag ein zweiter Weg, der sie irrelevant machte. Updates ohne Neustart. Append-only neben einem Vollzugang. Eine Host-Firewall neben einer Container-Kette, die sie unterläuft.

Und jede Maßnahme braucht eine Messung, die auch **scheitern** kann. Ein Test, der nur bestätigen kann, was ich ohnehin glaube — der Scan hinter der fremden Firewall, der Probelauf, die Abfrage auf der eigenen Maschine — ist keine Prüfung, sondern eine Beruhigung. Die Messungen, die in diesen zwei Wochen etwas wert waren, sind genau die, bei denen ich am Ende blöd dastand.
