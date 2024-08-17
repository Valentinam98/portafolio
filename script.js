// alert("Hola Mundo <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500) // milisegundos: 2.5 seg
  .typeString('Valentina Montenegro')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('Desarrolladora FrontEnd Jr')
  .pauseFor(1000)
  .start();

  let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

typewriterFrase
  .pauseFor(2500) // milisegundos: 2.5 seg
  .typeString('Valentina Montenegro')
  .pauseFor(300)
  .deleteChars(20)
  .typeString('Muchas ideas crecen mejor cuando se trasplantan a otra mente diferente de la que surgieron. – Oliver Wendell Holmes.')
  .pauseFor(1000)
  .start();