# Pad, unpad
A javascript library for padding and unpadding strings.

## Installation
```npm install padunpad --save```

## Usage
As simple as it gets.


```
// Import padunpad
const padding = require('padunpad')

// The string to pad
let str = 'Hello'

// Pad to 16 bytes
let padded = padding.pad(str, 16)

// Unpad
let unpadded = padding.unpad(padded)

// 'unpadded' should be the same as 'str'.
```
