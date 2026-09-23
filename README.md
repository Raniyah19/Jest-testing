# Jest Testing - Opdrachten Template

Een verzameling hands-on opdrachten om Jest testing en TDD te leren voor JavaScript en React.

## Wat is Jest?

Jest is een testing framework voor JavaScript. Het helpt je automatisch te checken of je code werkt zoals verwacht, zonder elke keer handmatig te testen in de browser.

## Waarom Testen?

**"Kan ik niet gewoon zelf testen in de browser?"**

Ja, maar:

- Handmatig testen kost 5-10 minuten per keer
- Na elke code wijziging moet je ALLES opnieuw testen
- Je vergeet makkelijk edge cases
- Naarmate je app groeit wordt dit onhoudbaar

**Met Jest:**

- Schrijf tests 1x (10 minuten)
- Run alle tests in 2 seconden: `npm test`
- Tests vangen bugs voordat gebruikers ze zien
- Je krijgt vertrouwen om code te wijzigen

**Break-even:** Na 2-3 code wijzigingen heb je de tijd terugverdiend. Daarna is het pure winst!

## Opdrachten Periode 7: Basis Jest (8 opdrachten)

### JavaScript Basis (3 opdrachten)

1. **Todo Item Validatie** - Basis matchers (`toBe`, `toEqual`)
2. **Wachtwoord Checker** - Objecten en arrays testen
3. **Producten Sorteren** - Arrays en `toContain`

### JavaScript met Setup (2 opdrachten)

4. **Form Validatie** - `beforeEach` en test data
5. **Quiz Score** - Setup/teardown met arrays

### React Components (3 opdrachten)

6. **ProfileCard Component** - Basis rendering tests
7. **LikeButton Component** - User events en state
8. **SearchBar Component** - Input handling en conditional rendering

## Opdrachten Periode 8: TDD (6 opdrachten)

**Wat is TDD?** Test Driven Development = Eerst tests schrijven, dan code!

### JavaScript TDD (4 opdrachten)

9. **Calculator** - TDD basis leren (add, subtract, multiply, divide)
10. **Workout Duration** - Reduce & berekeningen met workout data
11. **Workout Filter** - Filter & sort functies
12. **Weekly Schedule** - Week planning met objecten

### React TDD (2 opdrachten)

13. **WorkoutCard Component** - Component bouwen met tests
14. **WorkoutForm Component** - Form met state, validatie & submit

## Installatie

### 1. Gebruik deze template

1. Klik op de groene knop **"Use this template"** bovenaan deze pagina
2. Kies **"Create a new repository"**
3. Geef je repository een naam (bijv. `mijn-jest-opdrachten`)
4. Klik op **"Create repository"**
5. Clone je nieuwe repository naar je computer

### 2. Installeer dependencies

```bash
npm install
```

### 3. Test of het werkt

```bash
npm test
```

**Periode 7:** Je ziet tests falen - dat klopt! Die moet je namelijk zelf invullen.  
**Periode 8:** Je ziet ook tests falen - maar nu schrijf je de CODE om ze te laten slagen!

## Hoe te gebruiken

Elke opdracht heeft een eigen map in `src/` met:

- **Periode 7 (1-8):** Code is klaar, jij vult tests in
- **Periode 8 (9-14):** Tests zijn klaar, jij schrijft de code (TDD!)
- Een README.md met instructies per opdracht

**Voorbeeld:**

```bash
npm test opdracht-01  # Test alleen opdracht 1
npm test opdracht-09  # Test alleen opdracht 9 (TDD)
npm test              # Test alle opdrachten
```

## TDD Workflow (Opdracht 9-14)

Bij TDD opdrachten werk je anders:

1. **RED** - Run tests (alles is rood ❌ - tests falen)
2. **GREEN** - Schrijf code tot tests groen zijn ✅
3. **REFACTOR** - Maak code mooier
4. **REPEAT** - Herhaal tot alle tests groen zijn

**Verschil met periode 7:**

- Periode 7: Jij schrijft tests voor bestaande code
- Periode 8: Jij schrijft code voor bestaande tests

## Meer info

Voor uitgebreide uitleg over setup, matchers en component testing, zie de [Jest Cheat Sheet](https://jschaik.github.io/React-Cheat-Sheet/pages/jest/index.html).

## Tips

- Begin met opdracht 1 en werk stap voor stap door
- Elke opdracht heeft een README.md met uitleg
- Run tests vaak: `npm test opdracht-XX`
- Lees error messages goed - ze helpen je!
- **Periode 7:** Alle tests groen? Dan ben je klaar!
- **Periode 8:** Alle tests groen? Dan werkt je code perfect!

