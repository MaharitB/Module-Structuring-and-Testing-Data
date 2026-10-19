export function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  if (findCharacter.length != 1) {
    throw new Error(`Invalid Input,only character is allowed`);
  }
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] == findCharacter[0]) {
      count = count + 1;
    }
  }
  return count;
}
