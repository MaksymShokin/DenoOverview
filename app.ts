const message = 'Hello world';

console.log(message);

const encoder = new TextEncoder();
const data = encoder.encode(message);

Deno.writeFile('hello.txt', data).then(() => {
  console.log('wrote-to-file');
});

export {};
// execute deno
// deno run app.ts

// run with writing permission
// deno run --allow-write app.ts