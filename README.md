### Node bijective number shortener
This module shortens your long integer id into a short string by increasing its base from 10 to a longer optional number.

> You should note that this is not an encrypting solution this is just an encoding solution
> but by making a random string of allowed characters you can nearly guarantee that the number 
> is not guessable.

#### Installation

```
npm install bijective-shortener --save
```

#### Usage
```js
var bijective = require('bijective-shortener');

bijective.allowedChars = 'YRCAtS2qcL06JzFeWIsf9HbwgVPUoOkrZpaGm47vjNEuMT1dynlDxXhQK8i5B3'; // a default is set if you don't want to override it so don't!

// This outputs "l"
console.log(bijective.makeFromInteger(50));

// This outputs 50
console.log(bijective.decodeToInteger("l"));
```
### Tests
run ```npm test```

#### Other languages
Php : [reshadman/bijective-shortener](http://github.com/reshadman/php-bijective-shortener)