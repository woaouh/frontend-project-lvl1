import { askPlayerName } from './cli.js';

export default function runGame(game) {
  const rounds = 3;
  const playerName = askPlayerName();

  for (let i = 0; i < rounds; i += 1) {
    const result = game(playerName);
    if (!result) {
      break;
    }
    if (rounds === 3) {
      console.log(`Congratulations ${playerName}!`);
    }
  }
}
