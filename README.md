# ka.js

Georgian language support for Node and browser.

## Node usage

Install using:

```shell
npm install ka
```

and use:

```js
var ka = require('ka');
ka.numberToString(100); // => ასი
```

## Browser usage

Include `ka.js` file in `script` tag and use:

```js
window.KA.numberToString(100); // => ასი
```

## What's included?

There are currently three modules in this project:

* mobile number operations,
* translate between different character sets,
* number to string representation.

### Mobile numbers

You can compact mobile numbers before saving them in database:

```js
ka.compactMobile('(599)422-451'); // => 599422451
```

and you can format mobile numbers before displaying them to user:

```js
ka.formatMobile('599422451'); // => (599)422-451
```

Country code formatting is also supported:

```js
ka.compactMobile('+995 599 422 451'); //=> 995599422451
ka.formatMobile('+995 599 422 451'); //=> (+995 599)422-451
```

### Character sets

You can translate from old "GEO" charset to modern "KA" charset and vice versa.

```js
ka.toGeo('დიმიტრი'); // => ÃÉÌÉÔÒÉ
ka.toKa('ÃÉÌÉÔÒÉ'); // => დიმიტრი
```

There is also `ka.translate` function which can be used for effective translation between arbitrary character sets.

### Number to string representation

You can represent integers as strings:

```js
ka.numberToString(100); // => ასი
ka.numberToString(999999999999999); // => ცხრაას ოთხმოცდა ცხრამეტი ტრილიონ ცხრაას ოთხმოცდა ცხრამეტი მილიარდ ცხრაას ოთხმოცდა ცხრამეტი მილიონ ცხრაას ოთხმოცდა ცხრამეტი ათას ცხრაას ოთხმოცდა ცხრამეტი
```

## Contribute

1. Fork this repository;
2. Submit pull request;
3. Check twitter on your iPhone.
