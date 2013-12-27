# Git.io 2

A simple module to call the [git.io url shortener service][0].
Updated to use its newer API.

## Usage

```bash
$> npm install gitio2
```

```javascript
var gitio = require('gitio2');

gitio('https://github.com/passcod/node-gitio', console.log);
//=> null,    http://git.io/abcde
//   ^ error  ^ short url
```

Or just use it from the cli

```bash
$> npm install gitio2;
$> gitio https://github.com/passcod/node-gitio;
http://git.io/abcde
```

To specify your own optional `code`

```javascript
require('gitio2')('https://github.com/passcod/node-gitio', 'gitio2', console.log);
//=> null,    http://git.io/gitio2
```

```bash
$> gitio https://github.com/passcod/node-gitio gitio2
http://git.io/gitio2
```
## Todo

* support `process.stdin`
* support piping in a bunch of URL's line or comma sep

[0]: https://github.com/blog/985-git-io-github-url-shortener

