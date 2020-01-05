const add = (a,b) => a+b;

const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should come back with hello mike', () => {
    const result = generateGreeting('mike');
    expect(result).toBe('Hello mike!');
});