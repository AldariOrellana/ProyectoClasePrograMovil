
# Semana 3 - Tarea 1
## Investigación: StyleSheet y Flexbox

### A1. Flexbox

**1. ¿Cuál es el valor por defecto de flexDirection en React Native? ¿En qué se diferencia del valor por defecto en CSS para la web?**

En React Native, flexDirection utiliza por defecto el valor column, por lo que los elementos se organizan verticalmente, uno debajo de otro. En CSS para la web, el valor por defecto en un contenedor Flexbox es row, que organiza los elementos horizontalmente.

**2. Explica la diferencia entre justifyContent y alignItems. ¿Sobre qué eje actúa cada uno cuando flexDirection es column? ¿Y cuando es row?**

justifyContent organiza los elementos sobre el eje principal del contenedor, mientras que alignItems los alinea sobre el eje secundario.

Cuando flexDirection es column, justifyContent trabaja verticalmente y alignItems horizontalmente.

Cuando flexDirection es row, justifyContent trabaja horizontalmente y alignItems verticalmente.

**3. Menciona al menos cuatro valores posibles de justifyContent y describe en una línea qué hace cada uno.**

- flex-start: coloca los elementos al inicio del eje principal.
- flex-end: coloca los elementos al final del eje principal.
- center: agrupa los elementos en el centro.
- space-between: distribuye el espacio entre los elementos, dejando el primero y el último en los extremos.
- space-around: distribuye espacio alrededor de cada elemento.
- space-evenly: deja espacios iguales entre los elementos y los bordes del contenedor.

**4. ¿Qué significa flex: 1 en un componente? Si dos View hermanos tienen flex: 1 y flex: 2, ¿cómo se reparten el espacio disponible?**

flex: 1 permite que un componente ocupe una parte proporcional del espacio disponible en el eje principal.

Si dos View hermanos tienen flex: 1 y flex: 2, el espacio disponible se reparte en tres partes. El primero recibe una parte (aproximadamente 33.33 %) y el segundo recibe dos partes (aproximadamente 66.67 %).

### A2. Estilos de View

**1. Explica la diferencia entre padding y margin. ¿Qué hacen paddingHorizontal y marginVertical?**

padding agrega espacio dentro de un componente, entre su contenido y sus bordes. margin agrega espacio por fuera del componente, separándolo de otros elementos.

paddingHorizontal agrega espacio interno a la izquierda y a la derecha.

marginVertical agrega espacio externo arriba y abajo.

**2. ¿Qué propiedades se usan para dibujar un borde y redondear las esquinas de un View? Indica el nombre de al menos tres.**

- borderWidth: establece el grosor del borde.
- borderColor: define el color del borde.
- borderRadius: redondea las esquinas.
- borderStyle: permite definir el estilo del borde, como solid, dashed o dotted.

### A3. Estilos de Text

**1. Describe para qué sirven fontSize, fontWeight, color, textAlign, lineHeight y letterSpacing. ¿Qué tipo de valor recibe fontWeight?**

- fontSize: establece el tamaño del texto.
- fontWeight: controla qué tan delgada o gruesa se muestra la letra.
- color: define el color del texto.
- textAlign: determina la alineación del texto, por ejemplo, a la izquierda, al centro o a la derecha.
- lineHeight: controla la altura de cada línea de texto.
- letterSpacing: controla la separación entre caracteres.

fontWeight recibe un valor de tipo texto (string), como "normal", "bold", "400" o "700". Aunque algunos valores parecen números, se escriben como cadenas.

**2. ¿Qué hacen textTransform y textDecorationLine? Da un ejemplo de valor para cada una.**

textTransform cambia la presentación de las letras, por ejemplo, usando uppercase para mostrar el texto en mayúsculas.

textDecorationLine agrega decoraciones al texto. Por ejemplo, underline coloca una línea debajo del texto y line-through permite tacharlo.

**3. Un Text dentro de otro Text hereda estilos, pero un Text dentro de un View no hereda el color ni el fontSize del View. Explica por qué según la documentación.**

React Native permite que los elementos Text anidados compartan estilos de texto, como color y tamaño de fuente.

En cambio, View es un contenedor de diseño y no funciona como un elemento de texto. Por eso, los estilos de texto no se heredan automáticamente desde View hacia Text. Cada texto debe tener sus propios estilos o recibirlos mediante un Text padre.

### A4. StyleSheet

**1. ¿Qué ventajas tiene usar StyleSheet.create en lugar de escribir objetos de estilo directamente dentro del JSX?**

StyleSheet.create permite mantener los estilos organizados y separados de la estructura visual de los componentes.

También facilita reutilizarlos, utilizar nombres descriptivos y hacer cambios sin modificar muchas partes del código.

Además, ofrece validación de tipos y sugerencias del editor, lo que ayuda a evitar errores al escribir propiedades de estilo.

**2. Observa style={[estilos.tarjeta, estilos.tarjetaDestacada]}. ¿Qué ocurre si ambos estilos definen backgroundColor? ¿Cuál gana y por qué?**

Cuando se combinan estilos mediante un arreglo, React Native aplica los estilos en el orden indicado.

Si tarjeta y tarjetaDestacada tienen diferentes valores de backgroundColor, se utiliza el definido en tarjetaDestacada porque aparece al final del arreglo.

Esto permite utilizar un estilo base y sobrescribir únicamente algunas propiedades cuando sea necesario.

### Fuentes consultadas

- https://reactnative.dev/docs/style
- https://reactnative.dev/docs/flexbox
- https://reactnative.dev/docs/layout-props
- https://reactnative.dev/docs/view-style-props
- https://reactnative.dev/docs/text-style-props
- https://reactnative.dev/docs/stylesheet
