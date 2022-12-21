export const MESSAGE_NOT_A_WORD = "Its not a word..";
export const MESSAGE_NOT_ENOUGH_LETTERS = "Not enough letters";

export const TEXT_NEW_GAME = "New Game";
export const TEXT_WON = ["Congratz!!", "You are the best"];
export const TEXT_LOST = ["Lost :("];

export const TEXT_INFO_HEADLINE = "How To Play";
export const TEXT_INFO_CONTENT_1 = "Guess the Wordle in 6 tries";
export const TEXT_INFO_CONTENT_2 = `Each guess must be a valid 5-letter word.
The color of the tiles will change to show how close your guess was to the word. 
`;
export const TEXT_INFO_CONTENT_3 =
  "After each attempt, you will receive a hint as to how many letters you guessed correctly.";
export const TEXT_INFO_CONTENT_4 = "Examples";
export const TEXT_INFO_CONTENT_5 = (
  <>
    The letter <strong>R</strong> occurs in the word and is at the correct spot.
  </>
);
export const TEXT_INFO_CONTENT_6 = (
  <>
    The letter <strong>N</strong> occurs in the word, but is at the wrong spot.
  </>
);
export const TEXT_INFO_CONTENT_7 = (
  <>
    The letter <strong>G</strong> does not appear anywhere in the word.
  </>
);

export const TEXT_INFO_EXAMPLE_WORD_MATCH = [
  { letter: "G", style: "default" },
  { letter: "E", style: "default" },
  { letter: "R", style: "match" },
  { letter: "N", style: "default" },
  { letter: "E", style: "default" },
];
export const TEXT_INFO_EXAMPLE_WORD_OCCUR = [
  { letter: "G", style: "default" },
  { letter: "E", style: "default" },
  { letter: "R", style: "default" },
  { letter: "N", style: "occur" },
  { letter: "E", style: "default" },
];
export const TEXT_INFO_EXAMPLE_WORD_NOTOCCUR = [
  { letter: "G", style: "notoccur" },
  { letter: "E", style: "default" },
  { letter: "R", style: "default" },
  { letter: "N", style: "default" },
  { letter: "E", style: "default" },
];

export const TEXT_INFO_FOOTER = (
  <>
    This is an open source version of the game `Wordle`. Code available on{" "}
    <a
      href="https://github.com/Josnon/Wordle-Ass"
      style={{ textDecoration: "underline" }}
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </>
);

export const BUTTON_CLOSE = "Close";
export const MODAL_CLOSE_WINDOW = "close the window";
