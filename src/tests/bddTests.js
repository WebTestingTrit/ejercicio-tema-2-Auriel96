const { given, when, then } = require('../../utils/bithaviour.tester');
const { Stack } = require('../models/stack');

given('stack is empty', () => {
  const sut = new Stack();
  const elementToPush = 'String to push';
  when('the user pushes an element', () => {
    sut.push(elementToPush);
    let actual = sut.size();
    let expected = 1;
    then('the stack contents grow', actual, expected);
  });
});

given('stack contains an element', () => {
  const sut = new Stack();
  const elementToPush = 'String to push';
  sut.push(elementToPush);
  when('the user pops an element', () => {
    const returnedElement = sut.pop();
    let actual = sut.size();
    let expected = 0;
    then('the element is removed from the stack', actual, expected);
    actual = returnedElement !== undefined;
    expected = true;
    then('the element is returned', actual, expected);
  });
});

given('stack is empty', () => {
  const sut = new Stack();
  when('the user pops an element', () => {
    let actual = false;
    try {
      sut.pop();
    } catch (e) {
      actual = true;
    }
    const expected = true;
    then('an exception is raised', actual, expected);
  });
});
