const StringFormatter = require('./index.js');

describe('string formatter', () => {
  test('Input validation', () => {
    const lenghtLimite = 1;
    const text = 'The quick brown fox jumps over the lazy dog.';
    const stringFormatter = new StringFormatter();

    expect(stringFormatter.format(text, lenghtLimite)).toBe('Invalid input');
  });

  test('return of texts smaller than the width', () => {
    const stringFormatter = new StringFormatter();
    const lenghtLimite = 14;
    const text = 'The quick';

    expect(stringFormatter.format(text, lenghtLimite)).toBe('The quick');
  });

  test('introduction of breaklines according to the width', () => {
    const stringFormatter = new StringFormatter();
    const lenghtLimite = 14;
    const text = 'The quick brown fox jumps over the lazy dog.';
    const expected = 'The quick\nbrown fox\njumps over the\nlazy dog.';

    expect(stringFormatter.format(text, lenghtLimite)).toEqual(expected);
  });

  test('introduction of breaklines according to the width; extra example 1', () => {
    const stringFormatter = new StringFormatter();
    const lenghtLimite = 14;
    const text =
      "Now is the winter of our discontent, Made glorious summer by this sun of York; And all the clouds that lour'd upon our house, In the deep bosom of the ocean buried.";
    const expected =
      "Now is the\nwinter of our\ndiscontent,\nMade glorious\nsummer by this\nsun of York;\nAnd all the\nclouds that\nlour'd upon\nour house, In\nthe deep bosom\nof the ocean\nburied.";

    expect(stringFormatter.format(text, lenghtLimite)).toEqual(expected);
  });
});
