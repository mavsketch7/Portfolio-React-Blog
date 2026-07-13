---
title: 'Calculadora en JavaScript: aprendiendo como desarrollador autodidacta'
date: '2025-12-24'
author: 'manusk'
excerpt: 'Diario real de un desarrollador autodidacta creando su primera calculadora en JavaScript. Aprendizaje, errores y lógica desde cero.'
tags: ['JavaScript', 'HTML', 'CSS', 'Desarrollo Web', 'Autodidacta']
cover: '/awesome-calculator-img1.webp'
---

Continuando la ruta de mi aprendizaje como desarrollador autodidacta, ahora tocaba enfrentarme a uno de esos proyectos clásicos: crear una calculadora con JavaScript.

La idea era seguir aprendiendo sobre la interacción entre elementos web, la manipulación del DOM y, sobre todo, empezar a pensar un poco más como alguien que tiene que resolver problemas reales.

Perdonadme si no utilizo siempre los palabros correctos: sigo aprendiendo día a día conceptos nuevos y con este blog tampoco pretendo dar cátedra, simplemente contar mi viaje por si a alguien más le sirve de inspiración en su día a día.

## Pensar antes de escribir código (papel y lápiz)

Como suelo hacer en todos los proyectos que realizo —digitales o no—, antes de abrir el editor de código saco papel y lápiz para esbozar la estructura del proyecto.

Me pregunto cosas básicas pero necesarias:

- ¿Qué problema quiero resolver?
- ¿Qué necesito para que funcione?
- ¿Qué partes va a tener?

En este caso, aunque el proyecto era sencillo, el objetivo estaba claro: crear una calculadora funcional desde cero usando HTML, CSS y JavaScript.

### Inspiración: las calculadoras de toda la vida

Para el diseño me inspiré en las clásicas calculadoras Casio que prácticamente todos hemos usado antes de la estandarización de los teléfonos inteligentes.

A nivel funcional necesitábamos:

- Números del 0 al 9
- Operadores de suma, resta, multiplicación y división
- Botón de decimales
- Botón de reset (C)
- Botón para borrar el último dígito (DEL)
- Botón para calcular la operación (=)
- Y, por supuesto, una pantalla donde ver qué estaba ocurriendo

---

## Estructura HTML de la calculadora

Con todo esto claro, construí la estructura base en HTML. Este fue el resultado:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Not awesome calculator</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <div class="calculator">
        <div class="topcalc">
          <div class="brand">CASIO</div>
          <div class="clock">
            <div class="hour">0</div>
            :
            <div class="min">0</div>
            :
            <div class="sec">0</div>
          </div>
        </div>
        <div class="screen">0</div>
        <div class="grid">
          <button class="btn">7</button>
          <button class="btn">8</button>
          <button class="btn">9</button>
          <button class="btn">/</button>
          <button class="btn">4</button>
          <button class="btn">5</button>
          <button class="btn">6</button>
          <button class="btn">*</button>
          <button class="btn">1</button>
          <button class="btn">2</button>
          <button class="btn">3</button>
          <button class="btn">-</button>
          <button class="btn" id="zero">0</button>
          <button class="btn">.</button>
          <button class="btn" id="clear">C</button>
          <button class="btn">+</button>
          <button class="btn" id="delete">DEL</button>
          <button class="btn" id="equal">=</button>
        </div>
      </div>
    </main>
    <script src="calculator.js"></script>
  </body>
</html>
```

En este punto hay un pequeño spoiler de funcionalidad que añadí más adelante… pero eso lo explico luego.

---

## Dándole estilo con CSS (porque también importa)

Una vez tenía la estructura, tocaba divertirse un poco y hacerla visualmente más atractiva. Le apliqué estilos en CSS intentando mantener ese aire retro / calculadora clásica.

Aquí os dejo el CSS completo y su resultado final:

```css
:root {
  --bg-color: #575757;
  --button-bg: #ecede8;
  --button-hover-bg: #c4c5c0;
  --button-color: #1f1f1f;
  --button-font-size: 18px;
  --button-color-shadow: #c9cbc6;
  --calculator-color: #d6d7d2;
  --calculator-shadow-color: #bfc1bc;
  --screen-bg-color: #bfcba6;
  --screen-color: #000000;
  --screen-border-color: #9fa39a;
}

/* Font */
@font-face {
  font-family: 'Digital-7';
  src: url('./sources/font/Seven\ Segment.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Casio';
  src: url('./sources/font/Eurostar\ Black.ttf');
}

/* General styles */
body {
  background: var(--bg-color);
  color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(./sources/img/table.webp);
}

.calculator {
  background-color: var(--calculator-color);
  border-radius: 15px;
  padding: 20px;
  position: relative;
  padding-bottom: 40px;
}

.calculator .topcalc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calculator .topcalc .brand {
  width: 10%;
  color: #3b3b3b !important;
  font-family: 'Casio', sans-serif;
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 10px;
}

.calculator .topcalc .clock {
  border: 2px solid var(--screen-border-color);
  background-color: var(--screen-bg-color);
  border-radius: 5px;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--button-color);
  font-family: 'Digital-7', monospace;
  margin-bottom: 10px;
}

.calculator .topcalc .clock .hour,
.calculator .topcalc .clock .min,
.calculator .topcalc .clock .sec {
  font-size: 18px;
  margin: 0 2px;
}

.calculator .screen {
  border: 2px solid var(--screen-border-color);
  background-color: var(--screen-bg-color);
  height: 60px;
  padding: 8px 8px 0 0;
  margin: 0 auto;
  margin-bottom: 15px;
  text-align: right;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-family: 'Digital-7', monospace;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.calculator .grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.calculator .btn {
  background-color: var(--button-bg);
  color: var(--button-color);
  font-size: var(--button-font-size);
  border: none;
  border-radius: 5px;
  box-shadow: 4px 4px 0px var(--button-color-shadow);
  width: 50px;
  height: 40px;
  margin: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    box-shadow 0.1s,
    transform 0.1s;
}

.calculator .btn:hover {
  background-color: var(--button-hover-bg);
}

.calculator #clear,
.calculator #delete {
  background-color: var(--button-color);
  color: white;
}

.calculator .btn:nth-child(16) {
  background-color: rgb(250, 91, 91);
  color: white;
  grid-row-start: 4;
  grid-row-end: 6;
  grid-column-start: 4;
  height: 90%;
}

.calculator #equal {
  color: rgb(255, 255, 255);
  background-color: rgb(21, 159, 240);
  grid-column-start: -4;
  grid-column-end: -2;
  width: 90%;
}

.calculator:after {
  position: absolute;
  content: '';
  inset: 0px;
  border-radius: 15px;
  box-sizing: border-box;
  border-right: solid 6px rgb(41, 41, 41);
  border-bottom: solid 6px rgb(41, 41, 41);
  pointer-events: none;
}
```

El resultado final, sinceramente, me dejó bastante contento. No es nada espectacular, pero cumple su función y tiene personalidad.

## ![Resultado estético de la calculadora](/awesome-calculator-featuredimg.webp)

## Ahora lo importante: JavaScript y la lógica

Aquí empezó lo divertido (y lo duro).

Con las piezas ya montadas, tocaba hacerlas trabajar juntas y empezar a escribir mi querida función en JavaScript. Como buen autodidacta, tiré de tutoriales, ChatGPT, Gemini, vídeos, posts y cualquier recurso que se me cruzara.

Pero antes de escribir una sola línea de código, volví al papel.

### Pensar la lógica como un problema real

Intenté plantearlo como si una empresa o un cliente me lo hubiera pedido:

- ¿Qué tiene que pasar cuando pulso un botón?
- ¿Cómo se guarda lo que se muestra en pantalla?
- ¿Qué ocurre al pulsar “=”?
- ¿Cómo gestiono errores?

Sabía que tendría que usar `addEventListener`, capturar el texto del botón y almacenarlo en la pantalla. Luego, al pulsar “=”, evaluar la operación y mostrar el resultado.

### Código JavaScript de la calculadora

Este fue el resultado final del JavaScript:

```javascript
let screen = document.querySelector('.screen')
let buttons = document.querySelectorAll('.btn')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let btnPressed = button.innerText

    if (button.id === 'clear') {
      screen.textContent = '0'
      return
    }

    if (button.id === 'delete') {
      if (
        screen.textContent.length === 1 ||
        screen.textContent === 'Syntax Error'
      ) {
        screen.textContent = '0'
      } else {
        screen.textContent = screen.textContent.slice(0, -1)
      }
      return
    }

    if (button.id === 'equal') {
      try {
        screen.textContent = eval(screen.textContent)
      } catch {
        screen.textContent = 'Syntax Error'
      }
      return
    }

    if (screen.textContent === '0' || screen.textContent === 'Syntax Error') {
      screen.textContent = btnPressed
    } else {
      screen.textContent += btnPressed
    }
  })
})
```

### El extra: un reloj solo para fardar

Cuando comprobé que todo funcionaba, añadí un reloj solo para hacerme el chulo y darle un toque diferente a la calculadora.

```javascript
const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

function updateClock() {
  const now = new Date()
  hour.textContent = String(now.getHours()).padStart(2, '0')
  min.textContent = String(now.getMinutes()).padStart(2, '0')
  sec.textContent = String(now.getSeconds()).padStart(2, '0')
}

setInterval(updateClock, 100)
```

---

## Lo que realmente he aprendido con este proyecto

Este proyecto no me va a servir para el currículum, pero a nivel de aprendizaje ha sido oro.

He aprendido sobre todo:

- A pensar la lógica antes de escribir código.
- A organizar mejor las funciones.
- A entender que lo que no funciona enseña más que lo que sí.

Horas y horas mirando la pantalla por culpa de:

- Un `;` mal puesto.
- Un `}` fuera de sitio.
- Variables mal englobadas.

Todo semánticamente “bien”, pero funcionalmente mal… y la consola sin decir ni pío.

## Conclusión

El mayor aprendizaje ha sido darme cuenta de la importancia de la organización y el orden. Un pequeño detalle puede romper toda la lógica sin lanzar errores evidentes.

Hasta aquí mi experiencia creando esta calculadora en JavaScript. Nos vemos en el siguiente proyecto.

**Bye World.**
