# terrible-passwords
A simple listing of really horrible passwords so you can quickly eliminate at least the most hacked passwords out there. 

## Installation
```
npm install terrible-passwords
```

## Usage
```javascript
var terrible = require('terrible-passwords');
if (terrible.isBad('password')) {
  throw new Error("This is a truly bad password");
}
```

## Contributing
Just add passwords to the `passwords.js` file in all lowercase. We want this list to stay < 200kb to keep this a lightweight package, so please don't add enormous lists of bad passwords.