// 1. Schreibe eine Funktion namens truncate, um eine Zeichenkette auf eine bestimmte Anzahl von Wörtern abzuschneiden.

function truncate(text, removedBy) {
  const textInArray = text.split(" ");
  return textInArray.splice(0, removedBy).join(" ");
}

console.log(truncate("The quick brown fox jumps over the lazy dog", 4));

// 2. Schreibe eine Funktion namens alphabetize_string, um eine gegebene Zeichenkette zu alphabetisieren.

function alphabetize_string(toBeAlphabetized) {
  const ArrayOfToBeAlphabetized = toBeAlphabetized.toLowerCase().split("");
  ArrayOfToBeAlphabetized.sort();
  return ArrayOfToBeAlphabetized.join("").trim();
}

console.log(alphabetize_string("United States"));

//3. Schreibe eine Funktion namens ascii_to_hexa, um das ASCII-Format in das Hexadezimalformat umzuwandeln.

function ascii_to_hexa(valueOfAscii) {
  const arr1 = [];
  for (let i = 0; i < valueOfAscii.length; i++) {
    const hex = valueOfAscii.charCodeAt(i).toString(16);
    // Unicode-Wert von Zeichen an Stelle n

    //Die toString(16) wird in eine Hexadezimaldarstellung umgewandelt.

    // charCodeAt: der Unicode-Wert für ASCII-Zeichen stimmt mit ASCII-Code überein, da ASCII-Zeichen auch Teil des Unicode-Zeichensatzes sind. Jedes ASCII-Zeichen wird von Computern als eine Dezimalzahl gespeichert: 1 = 49. 2 = 50.

    arr1.push(hex);
  }
  return arr1.join("");
}

console.log(ascii_to_hexa("12"));
console.log(ascii_to_hexa("100"));

//4. Schreibe eine Funktion mit dem Namen humanize, um vermenschlichte Zahlen mit dem richtigen Suffix wie 1, 2, 3 oder 4 zu erhalten.

function humanize(randomNum) {
  const numToStr = randomNum.toString();
  const theLastDigit = numToStr.slice(-1);

  if (numToStr.slice(-2) == 11 || theLastDigit == 0 || theLastDigit >= 4) {
    return numToStr + "th";
  } else if (theLastDigit == 3) {
    return numToStr + "rd";
  } else if (theLastDigit == 2) {
    return numToStr + "nd";
  } else if (theLastDigit == 1) {
    return numToStr + "st";
  } else {
    return "Try again";
  }
}

console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));

//5. Schreibe eine JavaScript-Funktion, um den Nachfolger eines Strings zu ermitteln.

function successor(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // damit ich nächsten Buchstaben finde, brauche ich Buchstabenabfolge

  const length = alphabet.length;
  // index von nächsten Buchstaben soll innerhalb des Alphabets liegen
  console.log("length:", length); //26

  let last = str.charAt(str.length - 1);
  // letzter Buchstabe wird gespeichert (d)
  console.log("last:", last);

  let rest = str.slice(0, -1);
  // Rest des Eingabebetrags (abcd)
  console.log("rest:", rest);

  let next = "";
  // nächsten Buchstabe für Ergebnisstring speichern
  console.log("next:", next); // ''

  let carry = false;
  // Übertrag?
  console.log("carry:", carry); // false

  if (isNaN(last)) {
    // Ist Wert vom letzten Index keine Nummer? (d)

    let index = alphabet.indexOf(last.toLowerCase());
    console.log("index:", index); // 3: Buchstabe d im Alphabet an Stelle 3

    if (index === -1) {
      // Wenn -1, ist der Buchstabe nicht im Alphabet

      next = last;
      // wird next auf last gesetzt und carry auf true
      carry = true;
    } else {
      console.log("letter is in alphabet");

      const isUpperCase = last === last.toUpperCase();
      // Ist der letzte Buchstabe großgeschrieben?
      console.log("isUpperCase:", isUpperCase); // false

      next = alphabet.charAt((index + 1) % length);
      //(index + 1)% length bedeutet 4%26 = 4
      console.log("next:", next); // e (ist Index 4)

      if (isUpperCase) {
        next = next.toUpperCase();
        // Wenn der letzte Buchstabe aus isUpperCase großgeschrieben ist, wird es auch der nächste
        console.log("next (uppercase):", next);
      }

      carry = index + 1 >= length;
      console.log("carry:", carry); //false

      if (carry && rest === "") {
        const added = isUpperCase ? "A" : "a";
        console.log("added:", added);
        return added + next;
      }
    }
  } else {
    console.log("last is a number");

    next = +last + 1;
    console.log("next:", next);

    if (next > 9) {
      next = 0;
      carry = true;
    }

    if (carry && rest === "") {
      return "1" + next;
    }
  }

  if (carry) {
    return successor(rest) + next;
  } else {
    return rest + next;
  }
}

console.log(successor("abcd"));

//6. Schreibe eine Funktion namens compare_to_sort, um das folgende Array von Objekten nach dem Titelwert zu sortieren.

const library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function compare_to_sort(writers) {
  writers.sort(function (a, b) {
    if (a.title < b.title) {
      // Wenn der Titel von a im Alphabet vor b liegt
      return -1;
      // gib -1 zurück = a wird vor b sortiert
    }
    if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  return writers;
}

console.log(compare_to_sort(library));

//7. Schreibe eine Funktion namens num_string_range, um ein Array mit Werten (numerisch, String mit einem Zeichen) innerhalb der angegebenen Grenzen zu füllen.

function num_string_range(beginning, end, jumps) {
  let alphabet = "abcdefghijklmnopqrstuvxyz".split("");
  let result = [];
  for (let i = alphabet.indexOf(beginning); i <= alphabet.indexOf(end); i++) {
    if (i % jumps == 0) {
      result.push(alphabet[i]);
    }
  }
  return result;
}

console.log(num_string_range("a", "z", 2));
// jedes zweite Zeichen ab dem a (inklusive Start)

// 8.Die Instanz von Clock sollte die Eigenschaften Stunden, Minuten und Sekunden haben. Anmerkung": Die Ausgabe wird jede Sekunde erfolgen.

class Clock {
  constructor() {
    this.count = 0;
    // count als clock-Eigenschaft, damit Zähler jedes Mal erhöht wird bis 5.
  }
  run() {
    const time = new Date();
    // speicher Klasse in Variabel, um Aufrufmethoden aus Date zu nutzen
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hour}:${minutes}:${seconds}`;
  }
  callRunMultipleTimes() {
    if (this.count < 5) {
      // Abbruchbedingung: Solange kleiner als 5
      setTimeout(() => {
        console.log(this.run());
        //Funktionslogik: Gib mir run auf der Konsole aus: Den habe ich verbunden mit settimeout
        this.count++;
        this.callRunMultipleTimes();
      }, 2000);
      // Funktionsaufruf
    }
  }
}

const my_Clock = new Clock();

my_Clock.callRunMultipleTimes();

//9. Schreibe eine Funktion namens all_properties, um alle Methoden in einem JavaScript-Objekt auszugeben.

const testObject = {
  firstName: "John",
  surName: "Smith",
  city: "New York",
  digits: [1, 4, 6],
  sayHello() {
    return "Hallo";
  },
  connectVars() {
    return `${this.firstName} ${this.surName} from ${this.city}`;
  },
  highest() {
    return Math.max(...this.digits);
  },
};

function allproperties(obj) {
  let result = [];
  for (const key in obj) {
    if (typeof obj[key] == "function") {
      result.push(key);
    }
  }
  return result;
}
console.log(allproperties(testObject));

//10. Schreibe eine Funktion namens "allproperties_second", die alle Eigenschaften eines Objekts ausgibt.

function allproperties_second(obj_second) {
  let properties_result = [];
  for (const key in obj_second) {
    if (typeof obj_second[key] != "function") {
      properties_result.push(key);
    }
  }
  return properties_result;
}
console.log(allproperties_second(testObject));
