# Pflichtenheft - Brain Trainer
## Inhaltsverzeichnis
1. [User Stories](UserStories.md)
2. [Use Cases](UseCases.md)
3. [GUI-Mockups](Mockups.md)
5. [Systemarchitektur](Systemarchitektur.md)
6. [Datenmodell](Datenmodell.md)
7. [Zielbestimmung]()
8. [Produkteinsatz]()

## 6 Zielbestimmung

### 6.1 Musskriterien

#### Funktionale Anforderungen:

- Benutzer können Karteikarten, Sets & Übungen erstellen, ändern, löschen
- Benutzer können nach Sets suchen
- Benutzer können Suchergebnisse filtern
- Benutzer können Sets Tags zuweisen
- Benutzer können sich an- und abmelden
- Benutzer können Sets als Public oder private deklarieren
- Benutzer können Sets mit einem Server synchronisieren
- Benutzer können Sets anderer Nutzer importieren
- Benutzer können Sets anderer Nutzer bewerten
- Benutzer können Pop-Up Benachrichtigungen erhalten
- Benutzer können aktuelle Veränderungen über einen Newsfeed einsehen

#### Nicht-Funktionale Anforderungen:

- Benutzer erhalten Vorschläge zu beliebten Sets?

### 6.2 Wunschkriterien

- Benutzer können die Art des Pop-Ups auswählen
- Benutzer können Sets mit Hilfe einer URL beschränkt veröffentlichen (protected)

## 7 Produkteinsatz

### 7.1 Anwendungsbereiche

Anwendung soll als Hilfe beim Lernen benutzt werden.
Durch wiederholtes beantworten von Karteikarten, welche
automatisch abgefragt werden, soll der Lernprozess verbessert werden.
Der Benutzer kann hierbei verschiedene Fragen mit einer Antwort hinterlegen.
Durch einen Store kann der Benutzer auf andere Karteikarten zugreifen, sodass
auch Gruppen (Bsp.: Klasse) dasselbe lernen können.

### 7.2 Zielgruppen

Keine Einschränkungen. Menschen, welche mit
computergestützter Hilfe Ihren Lernprozess verbessern wollen.

### 7.3 Betriebsbedingungen

Da das Electron Framework verwendet wird und es sich hierbei um eine webbasierte Anwendung handelt, ist die Applikation weitestgehend Plattformunabhängig. Sie setzt nur die Ausführung von Google Chromium voraus, welche an die folgenden Bedingungen geknüpft ist:

    Software:
      Mind. Windows 7 (keine ARM Versionen)
      Mind. OS X 10.9. (nur 64 Bit)
      Mind. Ubuntu 12.04
      Mind. Fedora 21
      Mind. Debian 8

    Hardware:
      Windows – Intel Pentium 4 und 512 MB RAM
      Mac – 64 Bit Intel Prozessor
      Linux – Intel Pentium 4 Prozessor
