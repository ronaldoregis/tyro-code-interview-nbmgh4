class StringFormatter {
  constructor() {}

  isValidInput(text, lenghtLimite) {
    const words = text.split(' ');

    const biggestWord = words.reduce((previous, next) => {
      return next.length > previous.length ? next : previous;
    }, '');

    return biggestWord.length < lenghtLimite ? true : false;
  }

  // tendo um array vou concatenar os n primeiros elementos, ate n-concatenado.length + n+1 > width; call getNext with n+1, stop condition n+1 > array.length;
  getFormated(currentPos, words, maxLength, formatedText) {
    if (currentPos > words.length) {
      return '';
    }

    let currentPart = '';

    let maxUsedIndex = 0;
    let reachedSize = false;

    while (!reachedSize || maxUsedIndex < words.length) {
      if (
        (currentPart + ' ' + words[maxUsedIndex + 1]).trim().length < maxLength
      ) {
        currentPart = (currentPart + ' ' + words[maxUsedIndex + 1]).trim();
        maxUsedIndex++;
      }
    }

    return currentPart + getFormated(maxLength);
  }

  formatRecursive(words, width) {
    if (words.length < 1) return '';

    let current = '';
    let lastAddedIndex;
    let index = 0;
    let reachMax = false;
    while (index < words.length && !reachMax) {
      let concatenatorAux = (current + ' ' + words[index]).trim();

      if (concatenatorAux.length <= width) {
        current = concatenatorAux;
        lastAddedIndex = index;
      } else {
        reachMax = true;
      }
      index++;
    }

    let remainingWords = [];
    if (lastAddedIndex + 1 < words.length) {
      remainingWords = words.slice(lastAddedIndex + 1);
    }

    const result = current + '\n' + this.formatRecursive(remainingWords, width);
    return result.trim();
  }

  format(text, lenghtLimite) {
    if (!this.isValidInput(text, lenghtLimite)) return 'Invalid input';
    if (text.length <= lenghtLimite) return text;

    const words = text.split(' ');

    return this.formatRecursive(words, lenghtLimite);
  }
}

module.exports = StringFormatter;
