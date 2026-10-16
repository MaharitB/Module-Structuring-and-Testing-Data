export function countChar(stringOfCharacters, findCharacter) {
  let i = 0;
  if (stringOfCharacters[i] == findCharacter) {
    return i++;
  }
  return 0;
}
