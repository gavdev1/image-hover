# 🔍 Zoom Interactivo con JavaScript

Este proyecto implementa un efecto de **zoom dinámico** sobre una imagen, donde el punto de ampliación sigue la posición del cursor del usuario. Es ideal para galerías de productos en e-commerce o visualizadores de fotografías.

## 🚀 Funcionalidades

* **Zoom de precisión:** Utiliza la propiedad `transform-origin` para centrar el zoom exactamente donde el usuario está mirando.
* **Seguimiento en tiempo real:** Cálculo de coordenadas basado en el porcentaje del contenedor.
* **Feedback en consola:** Muestra las coordenadas y el origen de la transformación para facilitar el debugging.

---

## 🛠️ Estructura Sugerida

Para que el código JavaScript funcione correctamente, asegúrate de tener una estructura HTML y CSS similar a esta:

### 1. HTML

```html
<div id="imageContainer" class="zoom-container">
    <img id="zoomImage" src="tu-imagen.jpg" alt="Imagen con zoom">
</div>

```

### 2. CSS (Esencial)

```css
.zoom-container {
    overflow: hidden; /* Oculta el exceso de la imagen al ampliar */
    width: 500px;
    height: 300px;
    cursor: zoom-in;
}

#zoomImage {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease; /* Suaviza la entrada/salida */
}

.zoomed #zoomImage {
    transform: scale(2); /* Ajusta el nivel de zoom aquí */
}

```

---

## 🧠 Lógica del Código

El script funciona bajo tres eventos principales:

1. **`mouseenter`**: Activa la clase de zoom y permite el rastreo.
2. **`mouseleave`**: Remueve la ampliación y detiene el rastreo.
3. **`mousemove`**: Calcula la posición relativa del mouse mediante la fórmula:

$$\text{Porcentaje} = \frac{\text{Posición Mouse} - \text{Borde Contenedor}}{\text{Ancho Total}} \times 100$$

---

## 💻 Instalación y Uso

1. Clona este repositorio o copia el archivo `script.js`.
2. Asegúrate de que los IDs `imageContainer` y `zoomImage` coincidan en tu HTML.
3. Abre tu archivo `index.html` en el navegador.

```javascript
// Ejemplo de inicialización en tu script.js
event();

```

---

## 🛠️ Tecnologías utilizadas

* **JavaScript (ES6+)**
* **Manipulación del DOM**
* **Event Listeners**
