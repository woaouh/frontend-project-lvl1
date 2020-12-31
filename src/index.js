export default function runGameCycle(userName, game) {
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const result = game(userName);
    if (!result) {
      break;
    }
    if (rounds === 3) {
      console.log(`Congratulations ${userName}!`);
    }
  }
}
