# tsmlj

> ES6 template string tag for joining multi-line blocks of text with a single space.

This template string tag allows you to break long, multi-word strings (in other words: sentences) into multiple lines. Any whitespace characters will be replaced by a single space (tabs, newlines, etc) and the result trimmed.

For example, by default, this...

```js
var text = `
  This is a really long sentence 
  that doesn't fit neatly on a 
  single line!
`;
```

...yields...

```

  This is a really long sentence 
  that doesn't fit neatly on a 
  single line!

```

...when you may have wanted...

```
This is a really long sentence that doesn't fit neatly on a single line!
```

...but you didn't want to write...

```js
let text = `This is a really long sentence that doesn't fit neatly on a single line!`;
```

This is what `tsmlj` provides: the desired result above while maintaining the more readable code in the first block!

```js
const tsmlj = require('tsmlj');

var text = tsmlj`
  This is a really long sentence 
  that doesn't fit neatly on a 
  single line!
`;
```

### Compatibility

Support for template strings exists in Node as of 4.0.0, but this module is not tied to that engine in `package.json` because Babel users should be able to use it on many other platforms (including the browser).

## Inspiration

If you didn't guess from the name, this module is inspired by Rod Vagg's [`tsml`](https://github.com/rvagg/tsml), which is similar except it takes a multi-line template string and returns a single line string. It's also very useful!

## License

`tsmlj` is Copyright (c) 2015 Pat O'Neill and licensed under the MIT license.
