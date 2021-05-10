const { test, expect } = require('../../utils/bit.tester');
const { Stack } = require('../models/stack');
test('a stack with no constructor parameters', () => {
  const sut = new Stack();
  const actual = sut !== undefined;
  const expected = true;
  expect('be created and defined', actual, expected);
});

test('a new stack with no extra operations', () => {
  const sut = new Stack();
  const emptyLength = 0;
  const actual = sut.size() === emptyLength;
  const expected = true;
  expect('be empty', actual, expected);
});

test('a new stack and one element push', () => {
  const sut = new Stack();
  const stringToPush = 'I am going diving into the stack';
  const expectedStackLength = 1;
  sut.push(stringToPush);
  const actual = sut.size() === expectedStackLength;
  const expected = true;
  expect('one element to be into the stack', actual, expected);
});

test('a new stack and two element push', () => {
  const sut = new Stack();
  const firstStringToPush = 'I am going first into the stack';
  const secondStringToPush = 'I am going second into the stack';
  sut.push(firstStringToPush);
  sut.push(secondStringToPush);
  const expectedStackLength = 2;
  const actual = sut.size() === expectedStackLength;
  const expected = true;
  expect('two elements to be into the stack', actual, expected);
});

test('a new stack with one push and one pop', () => {
  const sut = new Stack();
  const elementToPush = 'Hi, I am being pushed and popped';
  sut.push(elementToPush);
  const actual = sut.pop() === elementToPush;
  const expected = true;
  expect('popped element be the same as inserted', actual, expected);
});

test('a new stack and a pop operation', () => {
  const sut = new Stack();
  let actual = false;
  try {
    sut.pop();
  } catch (e) {
    actual = true;
  }
  const expected = true;
  expect('throw an exception', actual, expected);
});
