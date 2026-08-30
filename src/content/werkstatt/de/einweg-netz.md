---
title: Ein Netz, das nur noch in eine Richtung funktioniert
summary: Nach einem Reboot war das private Mesh-Netz einseitig taub. Die Fehlermeldung, die alles erklärt hätte, gab es nicht.
locale: de
key: einweg-netz
date: 2026-07-23
topic: Netzwerk
---

Der Rechner war nach einem Systemupdate neu gestartet und danach halb verschwunden. Halb, weil er die anderen Maschinen im privaten Mesh-Netz erreichte, aber von ihnen nicht erreichbar war. Verbindungen von ihm nach draußen: gut. Verbindungen von draußen zu ihm: Zeitüberschreitung.

Der erste Reflex ist der falsche. Ein Netz, das in eine Richtung funktioniert, sieht nach einem Routing-Problem aus, also habe ich Routen verglichen, Schnittstellen aufgelistet und Namensauflösung geprüft. Alles unauffällig. Das kostet Zeit, und es kostet sie deshalb, weil das Symptom auf eine Ebene zeigt, auf der der Fehler nicht sitzt.

Der Hinweis lag in der Statistik der Netzwerkschnittstelle: gesendete Pakete stiegen, empfangene standen exakt auf null. Nicht wenige, nicht sporadisch. Null. Eine Schnittstelle, die sendet und nichts empfängt, hat kein Routing-Problem, sondern bekommt ihre Pakete nicht bis zur Anwendung durchgereicht. Damit war es die Firewall, obwohl die Firewall keinen einzigen Eintrag protokolliert hatte, der wie ein Verwerfen aussah.

Der eigentliche Fehler war eine Annahme über die Reihenfolge. Die Konfiguration ging davon aus, dass der Netzwerkdienst seinen Port selbst öffnet, während die neue Firewall-Implementierung genau das nicht mehr tat. Vorher hatte es funktioniert, weil die alte Implementierung großzügiger war. Ein Update hat die Großzügigkeit entfernt, und übrig blieb eine Konfiguration, die auf ein Verhalten baute, das es nicht mehr gab.

Zwei Dinge habe ich mitgenommen.

Erstens: Wenn eine Zahl exakt null ist, ist das eine Aussage und kein Rauschen. Ich hatte die Statistik früher schon offen und habe sie überflogen, weil ich nach etwas Auffälligem gesucht habe. Null ist auffällig, aber es sieht aus wie ein leeres Feld.

Zweitens: Der Fix gehört nicht an die Stelle, an der es weh tut. Ich hätte den Port von Hand freigeben und weitermachen können, und beim nächsten Reboot wäre dasselbe wieder passiert, nur mit mehr Vorgeschichte. Stattdessen liegt die Portfreigabe jetzt in demselben Modul, das den Dienst konfiguriert, und leitet sich aus dessen Einstellung ab. Wenn sich der Port ändert, ändert sich die Freigabe mit. Das ist der Unterschied zwischen behoben und zugedeckt.
