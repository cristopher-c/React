import type { Action } from "node_modules/@base-ui/react/toast/index.parts";

interface ScrambleState {
  arrayWords:     string[];
  currentWord:    string;
  scrambledWord:  string;
  guess:          string;
  points:         number;
  errorCounter:   number;
  maxAllowErrors: number;
  skipCounter:    number;
  maxSkips:       number;
  isGameOver:     boolean;
  lenghtArray:    number;
};

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
  .split('')
  .sort(() => Math.random() - 0.5)
    .join('');
  };

  export const getInitialState = ():ScrambleState => {
  const scrambleWords = shuffleArray([...GAME_WORDS]);
  return{
    arrayWords: scrambleWords,
    currentWord: scrambleWords[0],
    scrambledWord: scrambleWord(scrambleWords[0]),
    guess: '',
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 3,
    maxSkips: 3,
    skipCounter: 0,
    isGameOver: false,
    lenghtArray: scrambleWords.length,
  };
};

export type ScrambleActions = 
{type: 'SET_GUESS'; payload: string;} |
{type: 'EVALUATE_GUESS'} |
{type: 'SKIP_WORD'} |
{type: 'PLAY_AGAIN'; payload : ScrambleState}

export const scrambledWordState = (state: ScrambleState, action: ScrambleActions): ScrambleState => {

  switch(action.type){
    case 'SET_GUESS':
      return{
        ...state,
        guess: action.payload.trim().toUpperCase()
      };
      
    case 'EVALUATE_GUESS' : {
      if(state.currentWord === state.guess){
        const newArrayWords = state.arrayWords.slice(1);

        return{
          ...state,
          guess: '',
          arrayWords: newArrayWords,
          currentWord: newArrayWords[0],
          scrambledWord: scrambleWord(newArrayWords[0]),
          points: state.points + 1
        };
      };

      return {
        ...state,
        guess: '',
        errorCounter: state.errorCounter + 1,
        isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors
      };
    };

    case "SKIP_WORD" : {
      if(state.skipCounter >= state.maxSkips) return state;
      
      const newArrayWords = state.arrayWords.slice(1);
      return {
        ...state,
        guess: '',
        currentWord: newArrayWords[0],
        arrayWords: newArrayWords,
        skipCounter: state.skipCounter + 1,
        scrambledWord: scrambleWord(newArrayWords[0]),
      };
    
    };
    
    case 'PLAY_AGAIN' : 
      return action.payload;
    
    default:
      return state;
  };
}