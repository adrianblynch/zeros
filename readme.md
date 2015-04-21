# Zeros

[![Build Status](https://travis-ci.org/adrianblynch/zeros.svg?branch=master)](https://travis-ci.org/adrianblynch/zeros)

Pad a number with zeros.

## Usage

```
var zeros = require("zeros-masker")

zeros(123, "0000")  // "0123"

zeros(1234, "0000") // "1234"

zeros(1234, "000")  // "1234"

zeros(123, 4)       // "0123"

zeros(1234, 4)      // "1234"

zeros(1234, 3)      // "1234"
```
