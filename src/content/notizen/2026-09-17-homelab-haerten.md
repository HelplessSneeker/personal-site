---
title: "Ein Ein-Mann-Homelab härten — was messbar geholfen hat und was Theater war"
description: "Zwei Wochen Security-Arbeit an drei Servern und einem Notebook, betrieben von einer Person. Mit den Messfehlern, die ich dabei selbst gebaut habe."
date: 2026-09-17
lang: de
draft: true
---

Zwei Wochen im September 2026, drei Linux-Server und ein Notebook, betrieben von genau einer Person. Kein Team, keine Security-Abteilung. Anlass war kein Vorfall, sondern die Vermutung, dass ich nicht weiß, wie exponiert ich bin.

Die Außengrenze stand: von außen exakt zwei offene Ports auf einem einzigen Host, SSH überall schlüsselbasiert und ohne Root-Login. Alle echten Löcher lagen innen — und fast jedes hatte dieselbe Form. Eine Maßnahme war korrekt eingerichtet, und daneben lag ein zweiter Weg, der sie irrelevant machte.

## Was geholfen hat

**Gepatcht ist nicht neu gestartet.** Die automatischen Updates liefen überall fehlerfrei. Auf dem exponiertesten Host lief trotzdem ein fünfzehn Wochen alter Kernel, neun neuere lagen installiert auf der Platte. Das Update-System meldet „gepatcht" und hat recht — die Pakete sind da. Der laufende Kernel ist es nicht. Der Neustart, vor dem ich mich fünfzehn Wochen gedrückt hatte, kostete sechzig Sekunden.

**Die eine Regel, die alles aufmacht.** Im Heimnetz stand eine Firewall-Regel, die jedem Gerät jeden Dienst erlaubte. Gemeint waren Medien-Server und Foto-Ablage. Gegeben war auch die Container-Verwaltung, also faktisch Root — für Fernseher, Konsolen, IoT und alles, was Besuch mitbringt. Ich habe sechs Tage geloggt, bevor ich geschnitten habe, und danach echt neu gestartet, um zu sehen, ob die Regeln in der richtigen Reihenfolge wiederkommen.

**Container umgehen die Host-Firewall.** Portfreigaben von Containern hängen sich unterhalb der Host-Firewall in die Filterkette. Man kann den Status abfragen, ein zufriedenes „aktiv" lesen, und die Dienste sind trotzdem offen für das ganze Netz. Die Regeln müssen in die Kette, die der Container-Daemon selbst respektiert.

**Der gefährlichste Zugang war der Backup-Pfad.** Meine Offsite-Sicherungen laufen append-only, jedes Ziel auf einem eigenen Unterkonto — löschen geht über diesen Weg nicht. Auf einer Maschine hing daneben ein Netzlaufwerk mit den Zugangsdaten des **Hauptkontos**: schreibend, mit Sicht auf alle Unterkonten. Ein kompromittierter Prozess dort hätte jede Sicherung im Park löschen können, nicht nur die eigene. Ich habe den Schreibzugriff verifiziert, bevor ich es geglaubt habe. **Eine Schutzmaßnahme wirkt nur, wenn sie der einzige Weg ist.**

## Was Theater war

**Exposure von der eigenen Maschine messen.** Ein Test vom Server auf dessen eigene öffentliche Adresse meldet den SSH-Port als offen — ein Kurzschluss über das lokale Interface. Ohne einen fremden Host als Messpunkt hätte dieser Bericht mit einem Fehlalarm begonnen.

**Der Portscan, den jemand anderes beantwortet.** Die Container-Firewall wollte ich von außen beweisen. Der Scan war sauber — aber davor sitzt die Cloud-Firewall des Anbieters. Ich hätte die Host-Regeln komplett weglassen können, gleiches Ergebnis. Der Beweis läuft über die Paketzähler der Regeln selbst.

**Ein Probelauf.** Er zeigt den Code, den ein Probelauf erreicht. Der Neustart-Pfad hinter der Abfrage „nur wenn kein Probelauf" wird dabei per Konstruktion nie betreten.

**Ein Prüfkommando, das nicht zum System passt.** Die Firewall-Statusabfrage meldete auf dem Notebook „inaktiv" — anderes Paketfilter-System, anderer Dienstname, das aktive lief die ganze Zeit. Kein Fehler, sondern eine falsche Antwort. Die ist schlimmer.

**Zwei von sechs Befunden waren meine eigenen Messfehler.** Der Durchlauf nach Zugangsdaten im Klartext meldete sechs von sechs Dateien als auffällig. Einmal, weil die Suche jeder Trefferzeile die Zeilennummer mit Doppelpunkt voranstellt und mein Auswerter genau diesen als Trennzeichen las. Einmal, weil der Rechte-Scan als Root lief und Dateien als weltlesbar meldete, an die als normaler Benutzer niemand herankommt. Merksatz: **Wenn ein Check alles beanstandet, verdächtige zuerst den Check.**

**Das Audit-Log, das ich dann nicht gebaut habe.** Es stand ganz oben auf der Liste, war vorbereitet und wurde verworfen: Es schützt nichts und erkennt nichts, es bewahrt Beweise. Gegen den wahrscheinlichsten Angriffsweg auf ein automatisiertes Setup — untergeschobene Anweisungen, die der Automat brav ausführt — hilft es gar nicht, weil dabei niemand Logs aufräumt. Der Aufwand ging stattdessen in den Backup-Pfad. Diese Reihenfolge kam aus der Messung, nicht aus dem Plan.

## Was bleibt

Der Unterschied zwischen *konfiguriert* und *wirksam* ist der ganze Inhalt dieser zwei Wochen. Updates ohne Neustart, append-only neben einem Vollzugang, eine Host-Firewall neben einer Container-Kette, die sie unterläuft — dreimal dasselbe Muster.

Und: Eine Messung, die nur bestätigen kann, was ich ohnehin glaube, ist keine Prüfung, sondern eine Beruhigung. Die Messungen, die in diesen zwei Wochen etwas wert waren, sind genau die, bei denen ich am Ende blöd dastand.
