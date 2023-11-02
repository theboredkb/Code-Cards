export type JavaScriptCard = {
  title: string
  question: string
  answer: string
}

export function getJavaScriptCards() {
  const cards = [
    {
      title: 'JavaScript: Hello World!',
      question: "How do you print 'Hello World!' to the console?",
      answer: "console.log('Hello World!')",
    },

    {
      title: 'JavaScript: Variables',
      question: 'How do you declare a variable in JavaScript?',
      answer:
        'You can declare a variable using var, let, or const. For example: var x; let y; const z = 5;',
    },
    {
      title: 'JavaScript: Data Types',
      question: 'What are the primitive data types in JavaScript?',
      answer:
        'The primitive data types in JavaScript are String, Number, Boolean, Null, Undefined, Symbol, and BigInt.',
    },
    {
      title: 'JavaScript: Arrays',
      question: 'How do you create an array in JavaScript?',
      answer:
        'You can create an array using an array literal, for example: const arr = [1, 2, 3];',
    },
    {
      title: 'JavaScript: Functions',
      question: 'How do you declare a function in JavaScript?',
      answer:
        'You can declare a function using the function keyword, for example: function myFunction() { /* code */ }',
    },
    {
      title: 'JavaScript: Objects',
      question: 'How do you create an object in JavaScript?',
      answer:
        'You can create an object using an object literal, for example: const obj = { key: "value" };',
    },
    {
      title: 'JavaScript: Conditional Statements',
      question: 'What are the conditional statements in JavaScript?',
      answer:
        'The conditional statements in JavaScript are if, else, else if, switch, and the ternary operator (? :).',
    },
    {
      title: 'JavaScript: Loops',
      question: 'What are the different types of loops in JavaScript?',
      answer:
        'The different types of loops in JavaScript are for, while, and do-while.',
    },
    {
      title: 'JavaScript: Error Handling',
      question: 'How do you handle errors in JavaScript?',
      answer: 'You can handle errors using try, catch, and finally blocks.',
    },
  ]
  return cards
}
