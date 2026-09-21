---
title: 'La odisea de montar un servidor casero'
date: '2026-02-04'
excerpt: 'Todos tenemos un portatil o equipo antiguo en casa. Os cuento como le di una segunda vida a un portatil de mas de 10 años, convirtiendolo en mi servidor casero'
cover: '/crear-servidor-casero.png'
tags: ['Linux', 'Server']
---

Navegas por Netflix, pero no encuentras tu peli favorita porque han decidido bajarla de la biblioteca, aquí te presento la solución casera renovando hardware antiguo..

## Cómo un portátil de 2006 se convirtió en mi Netflix personal (sin salir ardiendo)

Todo empezó cuando me quedé en paro. El gasto hormiga de las suscripciones fue de lo primero que tuve que eliminar. Sin embargo, los fines de semana empezaron a hacerse largos sin ese peliculeo ni el famoso “omitir intro” que tanto nos entretiene. Fue entonces cuando, navegando por YouTube, comenzaron a aparecerme vídeos de gente montando su propio “Netflix casero”.

Evidentemente, me llamó la atención. Además de gustarme la programación, siempre me ha gustado el cacharreo: desmontar, montar, perder tornillos, romper cosas y volver a arreglarlas. En la mayoría de esos vídeos se utilizaban NAS bastante caros o soluciones demasiado plug and play, y eso no encajaba conmigo. A mí me gusta el reto.

## La idea de reutilizar hardware antiguo

Empecé a investigar si existía alguna forma de dar una segunda vida a portátiles antiguos y fue ahí cuando descubrí el mundo de Linux, especialmente Ubuntu. La cantidad de posibilidades que se abrían ante mí fue abrumadora. Tras ver decenas de vídeos sobre cómo revivir una laptop vieja y convertirla en un servidor, hablé con mi padre para que me prestara uno de los portátiles antiguos que teníamos por casa.

Yo imaginaba que me daría algo medio decente, un equipo con suficiente memoria y un procesador razonable. Sin embargo, la realidad fue otra. Apareció con el portátil más antiguo que conservábamos: un HP Pavilion DV6 del año 2005 o 2006, con especificaciones muy por debajo de lo que esperaba. En ese momento no tenía claro si aquel equipo sería capaz de mover un servidor, así que tocaba investigar más a fondo.

## Primeros pasos con Linux y la ayuda de la IA

Comencé usando ChatGPT como guía. Me recomendó AntiX Linux, una distribución ligera con varias versiones, y me sugirió instalar una sin entorno gráfico, todo por terminal. Nunca había hecho algo así, pero tampoco me intimidaba. Al contrario, cuanto mayor es el reto, mayor suele ser el aprendizaje.

Preparé un USB booteable y empecé a probar. Los primeros intentos fueron un fracaso. El portátil era tan antiguo que ni siquiera conseguía arrancar correctamente la terminal debido a problemas con el controlador gráfico. Pasé prácticamente un día entero instalando y desinstalando diferentes versiones de AntiX, hasta que probé una versión que incluía un escritorio temporal antes de la instalación definitiva en el disco duro. Aun así, no hubo suerte.

La única forma de hacerlo funcionar era instalar manualmente los drivers de la gráfica integrada de Intel, algo que me resultaba demasiado pesado teniendo en cuenta que mi objetivo no era usar ninguna interfaz gráfica. No quería sobrecargar el sistema con nada innecesario. Para colmo, ChatGPT empezó a contradecirse en sus respuestas, hasta llegar a decir que el ordenador era demasiado antiguo y que Linux no iba a funcionar correctamente.

Aquello me sonó absurdo. Hablábamos de Linux, un sistema operativo famoso por funcionar en prácticamente cualquier cosa. Ese mismo portátil había llegado a mover Windows 10 en el pasado, además de programas como Photoshop y algunos emuladores. Así que decidí cambiar de enfoque.

## Cambio de estrategia: Gemini y la solución

Abrí un nuevo chat en Gemini para probar la IA de Google. Le facilité las especificaciones del equipo y le expliqué los problemas que había tenido con AntiX. Su respuesta fue clara: me recomendó usar Devian, otra distribución basada en Linux que encajaba mejor con lo que necesitaba.

Esta vez todo funcionó. El sistema arrancó correctamente y pude trabajar con la terminal sin problemas. A partir de ahí instalé CASAOS, que se convertiría en el núcleo del servidor. Usar la terminal para este tipo de tareas resulta sorprendentemente emocionante; da la sensación de estar haciendo algo crítico y complejo, cuando en realidad solo estás gestionando discos e instalando software libre.

También instalé Docker. Nunca lo había utilizado de forma consciente, pero CASAOS se apoya en él para aislar los distintos servicios. La idea es que, si algún módulo falla, el servidor siga funcionando. No soy experto en Docker, pero el concepto me pareció sólido.

## Jellyfin: el “Netflix” casero

Con el sistema ya en marcha, llegó el momento de instalar Jellyfin. El acceso se realizaba a través de la IP del servidor y el propio software se encargaba de reconocer las películas y descargar sus metadatos, ofreciendo una interfaz moderna y bastante similar a las plataformas de streaming comerciales.

Existe la posibilidad de automatizar la gestión del contenido mediante gestores de descargas, pero no seré yo quien anime a nadie a prácticas poco éticas. Cada uno es responsable de lo que hace con su servidor.

## Acceso remoto y el primer problema

En local, todo funcionaba perfectamente. Podía acceder al servidor desde cualquier dispositivo de casa sin problemas. El siguiente paso era poder acceder desde fuera, y para ello Gemini me recomendó Tailscale, una aplicación gratuita que crea una red privada entre dispositivos, como si estuvieran conectados por un túnel directo.

Al principio todo iba bien, hasta que el servidor empezó a dar problemas. Se ralentizaba, hacía un ruido exagerado y, al revisar el panel de control, la CPU estaba constantemente al 100 %, con temperaturas cercanas a los 100 grados. Algo claramente no iba bien.

## Cirugía mayor al portátil

La solución fue más física que lógica. Decidí desmontar el portátil por completo y eliminar todo lo que no fuera necesario para su función como servidor. Quité la pantalla, la batería y cualquier componente prescindible. Aproveché para limpiar el ventilador y sustituir la pasta térmica, que estaba prácticamente solidificada tras tantos años.

Después de volver a montar lo esencial, el cambio fue radical. El servidor pasó a funcionar de forma estable, con temperaturas que no superan los 49 grados incluso bajo carga, un ruido casi inexistente y un consumo de CPU muy contenido. El problema había sido, simplemente, una mala disipación del calor.

## Conclusión

La experiencia ha merecido totalmente la pena. No solo por haber montado un servidor casero funcional, sino por todo lo aprendido por el camino. Entender cómo funciona un sistema desde dentro, enfrentarse a errores reales y resolverlos es una de las mejores formas de aprender. Al final, no hay nada como la satisfacción de construir algo por uno mismo y, sobre todo, de saber arreglarlo cuando deja de funcionar.
