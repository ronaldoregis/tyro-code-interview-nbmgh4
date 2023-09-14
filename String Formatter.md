# String Formatting

Write a class that formats a paragraph into a fixed width without breaking words. For example, given the sentence **_"The quick brown fox jumps
over the lazy dog."_** and a width of **14**, the output should be as follows:

```
The quick
brown fox
jumps over the
lazy dog.
```

### You should deal with the following punctuation marks:

- Hyphens, periods, commas, semicolons, question marks, exclamation marks - a line may break after any of these
- Apostrophes - a line break must not occur after any of these
- A provided width which is less than the length of the
  longest word should be treated as an invalid input.

### Here are a couple of sample inputs you may wish to use:

- Now is the winter of our discontent, Made glorious summer by this sun of York; And all the clouds that lour'd upon our house, In the deep bosom of the ocean buried.
- Cubum autem in duos cubos, aut quadratoquadratum in duos quadratoquadratos, et generaliter nullam in infinitum ultra quadratum
  potestatem in duos eiusdem nominis fas est dividere cuius rei demonstrationem mirabilem sane detexi. Hanc marginis exiguitas non
  caperet.
