const backgroundColorMain = "#B1F0F7";
const backgroundColorSecondary = "#FADA7A";

window.onload = () => {
  Particles.init({
    selector: ".background",
    color: [backgroundColorMain, backgroundColorSecondary],
    connectParticles: true,
    maxParticles: 180,
    sizeVariations: 23,
    speed: 0.2,
    minDistance: 170,
    responsive: [
      {
        breakpoint: 800,
        options: {
          maxParticles: 100,
          color: [backgroundColorMain, backgroundColorSecondary],
        },
      },
      {
        breakpoint: 300,
        options: {
          maxParticles: 25,
          color: [backgroundColorMain, backgroundColorSecondary],
        },
      },
    ],
  });
};

const questText = [
  // Category 1
  [
    "It is a complete computer on a singular chip.",
    "The simplest indicator which gives us feedback on a system's state.",
    "Software which is used for programming an Arduino Uno board.",
    "It is the number of different shades of colours that an RGB diode can output.",
    "The microcontroller which the Arduino Uno board uses.",
  ],
  [
    // Category 2
    "Difference of potential between two points.",
    "A number system that has a base of 10 and has 10 digits.",
    "The ability of a conductor to hold a certain amount of charge.",
    "The fundamental digital circuit that performs the functionality of a NOT logic gate.",
    "The property of a conductor to resist current changes.",
  ],
  [
    // Category 3
    "A function within void setup() that defines pinX as an input with an enabled internal Pull-Up resistor.",
    "A function within void setup() that defines pinX as an input without a Pull-Up resistor.",
    "A function that initializes serial communication for printing to the Serial Monitor.",
    "A function that returns the logical state of a pin.",
    "This phenomenon occurs when mechanical buttons cause several microcontact contractions that can last less than 5 ms, which can cause incorrect readings in digital systems.",
  ],
  [
    // Category 4
    "AND, OR, NOT, NAND, NOR, XOR, XNOR.",
    "Electronic circuit with two completely different states.",
    "A bistable that changes state with every pulse.",
    "Circuits whose output depends on the current input states, but also on the internal states of the circuit.",
    "Rising edge triggering, Falling edge triggering, High level triggering, Low level triggering.",
  ],
  [
    // Category 5
    "An electronic component whose resistance changes by turning the shaft.",
    "The function that enables the piezo buzzer.",
    "An output device whose role is to give simple sound signals.",
    "An electronic component that converts an analog signal (voltage) into a series of digital signals (a number).",
    "A function that linearly translates a number from one range of values to a new range of values.",
  ],
];

const answerText = [
  // Category 1
  [
    "What is a microcontroller?",
    "What is an LED diode?",
    "What is Arduino IDE?",
    "What is 256^3 ?",
    "What is ATmega328p?",
  ],
  // Category 2
  [
    "What is voltage?",
    "What is the decimal number system?",
    "What is electrical capacity?",
    "What is a transistor switch?",
    "What is electrical inductance?",
  ],
  // Category 3
  [
    "What is pinMode(pinX, INPUT_PULLUP);?",
    "What is pinMode(pinX, INPUT);?",
    "What is Serial.begin(9600);?",
    "What is digitalRead(pin);?",
    "What is Switch Bouncing?",
  ],
  // Category 4
  [
    "What are the basic logic circuits?",
    "What is a multivibrator?",
    "What is a toggle bistable?",
    "What are sequential circuits?",
    "What kind of bistable triggers are there?",
  ],
  // Category 5
  [
    "What is a potentiometer/variable resistor?",
    "What is the tone(); function?",
    "What is the piezo buzzer?",
    "What is a A/D converter?",
    "What is the map(); function?",
  ],
];

document.addEventListener("DOMContentLoaded", () => {
  const question = document.getElementById("question");
  const questionText = document.getElementById("question-text");
  const mainContainer = document.getElementById("main-container");

  const buttons = [
    // Category 1
    [
      document.getElementById("100_cat1"),
      document.getElementById("200_cat1"),
      document.getElementById("300_cat1"),
      document.getElementById("400_cat1"),
      document.getElementById("500_cat1"),
    ],
    // Category 2
    [
      document.getElementById("100_cat2"),
      document.getElementById("200_cat2"),
      document.getElementById("300_cat2"),
      document.getElementById("400_cat2"),
      document.getElementById("500_cat2"),
    ],
    // Category 3
    [
      document.getElementById("100_cat3"),
      document.getElementById("200_cat3"),
      document.getElementById("300_cat3"),
      document.getElementById("400_cat3"),
      document.getElementById("500_cat3"),
    ],
    // Category 4
    [
      document.getElementById("100_cat4"),
      document.getElementById("200_cat4"),
      document.getElementById("300_cat4"),
      document.getElementById("400_cat4"),
      document.getElementById("500_cat4"),
    ],
    // Category 5
    [
      document.getElementById("100_cat5"),
      document.getElementById("200_cat5"),
      document.getElementById("300_cat5"),
      document.getElementById("400_cat5"),
      document.getElementById("500_cat5"),
    ],
  ];

  function handleButtonClick(e, x, y) {
    const rect = e.srcElement.getBoundingClientRect();
    const animationDuration = 500;

    question.style.display = "block";
    questionText.style.display = "none";

    question.style.top = `${rect.top}px`;
    question.style.height = `${rect.height}px`;

    question.style.left = `${rect.left}px`;
    question.style.width = `${rect.width}px`;

    question.style.transition = `all ${animationDuration}ms ease-in-out`;

    setTimeout(() => {
      const mainContainerRect = mainContainer.getBoundingClientRect();
      question.style.top = `${mainContainerRect.top}px`;
      question.style.height = `${mainContainerRect.height}px`;

      question.style.left = `${mainContainerRect.left}px`;
      question.style.width = `${mainContainerRect.width}px`;

      setTimeout(() => {
        // Display the text of the popup dialog
        questionText.style.display = "grid";
        loadQuestion(x, y);
      }, animationDuration);
    }, 100);
  }

  function loadQuestion(x, y) {
    questionText.innerHTML = "";
    buttons[x][y].style.color = "gray";

    //questionText.innerHTML = `X: ${x}, Y: ${y}`;
    questionText.innerHTML = questText[x][y];

    const newElement = document.createElement("div");
    newElement.id = "buttonID";
    newElement.classList.add("box");
    newElement.innerHTML = "Reveal answer";
    questionText.appendChild(newElement);
    newElement.addEventListener("click", () => {
      questionText.innerHTML = "";
      question.classList.toggle("flip");
      setTimeout(() => {
        loadAnswer(x, y);
        question.classList.remove("flip");
      }, 2000);
    });
  }

  function loadAnswer(x, y) {
    questionText.innerHTML = "";
    questionText.innerHTML = answerText[x][y];
    const newElement = document.createElement("div");
    newElement.id = "buttonID";
    newElement.classList.add("box");
    newElement.innerHTML = "Done";
    questionText.appendChild(newElement);
    newElement.addEventListener("click", () => {
      questionText.innerHTML = "";
      closeQuestion();
    });
  }

  function closeQuestion() {
    question.style.display = "none";
  }

  // Function to show question string with button click
  for (let y = 0; y < buttons.length; y++) {
    for (let x = 0; x < buttons[0].length; x++) {
      buttons[y][x].addEventListener("click", (e) =>
        handleButtonClick(e, y, x)
      );
    }
  }
  /*
  // Function to close window with escape (There is no escape)
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      closeQuestion();
    }
  });
  */
});
