
# BigInt Class Project Documentation

## Overview

The `BigInt` class is a custom implementation in C++ that allows for the manipulation and arithmetic of arbitrarily large integers. Standard data types in C++ such as `int` and `long` have limited range, which can be insufficient for applications requiring very large numbers, such as in cryptography or scientific computing. The `BigInt` class overcomes this limitation by providing a way to handle large integers with similar syntax and functionality to built-in types.

## Features

- **Arithmetic Operations**: Addition, subtraction, multiplication, division, and modulo.
- **Comparison Operations**: Equal, not equal, greater than, less than, greater than or equal, and less than or equal.
- **Increment and Decrement Operations**: Pre and post increment and decrement.
- **Power Function**: Raising a `BigInt` to the power of another `BigInt`.
- **Square Root Function**: Calculating the square root of a `BigInt`.
- **Special Functions**: Computing nth Fibonacci number, nth Catalan number, and factorial of a number.
- **Input and Output**: Overloaded `>>` and `<<` operators for easy reading from and writing to streams.

## Class Definition

The `BigInt` class is defined with the following members and functions:

### Constructors

- **Default Constructor**: Initializes a `BigInt` to zero.
- **String Constructor**: Constructs a `BigInt` from a string representation of a number.
- **C-string Constructor**: Constructs a `BigInt` from a C-string representation of a number.
- **Copy Constructor**: Constructs a `BigInt` by copying another `BigInt`.

### Helper Functions

- **divide_by_2**: Halves the value of a `BigInt`.
- **Null**: Checks if a `BigInt` is zero.
- **Length**: Returns the number of digits in a `BigInt`.
- **operator[]**: Allows access to individual digits.

### Operator Overloading

- **Assignment Operator**: Allows assignment of one `BigInt` to another.
- **Increment and Decrement Operators**: Pre and post increment and decrement.
- **Arithmetic Operators**: Addition, subtraction, multiplication, division, and modulo.
- **Comparison Operators**: Equal, not equal, greater than, less than, greater than or equal, and less than or equal.
- **Power Operator**: Raising a `BigInt` to the power of another `BigInt`.
- **Square Root Function**: Calculating the square root of a `BigInt`.

### Special Functions

- **NthCatalan**: Computes the nth Catalan number.
- **NthFibonacci**: Computes the nth Fibonacci number.
- **Factorial**: Computes the factorial of a number.

### Input and Output

- **Overloaded `>>` and `<<` Operators**: Allows easy reading from and writing to streams.

## Implementation

### Arithmetic Operations

The arithmetic operations are implemented by overloading the respective operators. For instance, addition is implemented by overloading the `+` operator. The digits are stored in reverse order to facilitate easy addition, subtraction, and multiplication.

### Comparison Operations

The comparison operations are implemented by overloading the respective operators. These functions compare the number of digits first and then compare digit by digit if the lengths are equal.

### Increment and Decrement Operations

The increment and decrement operations are implemented by overloading the respective operators. These functions handle the carry and borrow operations required for incrementing and decrementing large numbers.

### Power Function

The power function is implemented by overloading the `^` operator. It uses exponentiation by squaring for efficient computation.

### Square Root Function

The square root function is implemented using binary search to find the square root of a `BigInt`.

### Special Functions

- **NthCatalan**: Uses factorials to compute the nth Catalan number.
- **NthFibonacci**: Uses an iterative approach to compute the nth Fibonacci number.
- **Factorial**: Uses a simple loop to compute the factorial of a number.

### Input and Output

The input and output operations are implemented by overloading the `>>` and `<<` operators. This allows easy reading from and writing to streams.

## Advantages

- **Handles Very Large Numbers**: Can handle integers larger than the maximum value supported by built-in types.
- **Intuitive Syntax**: Operator overloading allows the `BigInt` class to be used with standard arithmetic and comparison operators, making the code more readable and easier to write.
- **Flexibility**: The class provides a wide range of arithmetic and mathematical functions, making it suitable for various applications.
- **Efficiency**: The implementation uses efficient algorithms for arithmetic operations, power, and square root calculations.

## Conclusion

The `BigInt` class provides a robust solution for handling large integers in C++. Its comprehensive set of features and intuitive interface make it a valuable tool for applications requiring large number arithmetic.
