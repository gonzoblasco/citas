# Administrador de Pacientes de Veterinaria (Veterinary Patient Manager)

Esta es una aplicación sencilla construida con React para administrar citas de pacientes en una clínica veterinaria. Permite a los usuarios agregar nuevas citas, ver la lista de citas existentes y eliminar citas según sea necesario. Los datos de las citas se guardan localmente en el navegador utilizando `localStorage`.

This is a simple application built with React to manage patient appointments in a veterinary clinic. It allows users to add new appointments, view the list of existing appointments, and delete appointments as needed. Appointment data is saved locally in the browser using `localStorage`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Nota sobre Persistencia de Datos (Note on Data Persistence)

La aplicación utiliza `localStorage` del navegador para guardar las citas. Esto significa que las citas permanecerán guardadas en el mismo navegador entre sesiones. Sin embargo, si se limpian los datos del navegador para este sitio (por ejemplo, caché y datos de sitios), todas las citas guardadas se eliminarán.

The application uses the browser's `localStorage` to save appointments. This means that appointments will remain saved in the same browser between sessions. However, if browser data for this site is cleared (e.g., cache and site data), all saved appointments will be removed.

## Características Principales (Main Features)

-   **Creación de nuevas citas:** Permite ingresar los detalles de la mascota, propietario, fecha, hora y síntomas.
    -   *Create new appointments:* Allows entering details for pet, owner, date, time, and symptoms.
-   **Visualización de la lista de citas:** Muestra todas las citas agregadas en una lista clara.
    -   *View appointment list:* Displays all added appointments in a clear list.
-   **Eliminación de citas:** Permite quitar citas de la lista.
    -   *Delete appointments:* Allows removing appointments from the list.
-   **Persistencia de datos:** Las citas se guardan en `localStorage` para que estén disponibles entre sesiones del navegador.
    -   *Data persistence:* Appointments are saved in `localStorage` to be available across browser sessions.
-   **Validación de formulario:** El formulario de creación de citas verifica que todos los campos estén completos antes de permitir el envío.
    -   *Form validation:* The appointment creation form checks that all fields are completed before allowing submission.

## Tecnologías Utilizadas (Technologies Used)

-   **React:** Biblioteca de JavaScript para construir interfaces de usuario.
    -   Se utilizaron Hooks como `useState` para el manejo de estados locales y `useEffect` para efectos secundarios (como la interacción con `localStorage`).
    -   *React:* A JavaScript library for building user interfaces.
        -   Hooks like `useState` for local state management and `useEffect` for side effects (like `localStorage` interaction) were used.
-   **JavaScript (ES6+):** Lenguaje de programación principal para la lógica de la aplicación.
    -   *JavaScript (ES6+):* Main programming language for application logic.
-   **HTML5:** Para la estructura semántica del contenido.
    -   *HTML5:* For the semantic structure of the content.
-   **CSS3:** Para los estilos visuales.
    -   Incluye estilos personalizados y el uso del framework Skeleton CSS para el layout responsivo.
    -   Se utilizó Normalize.css para asegurar la consistencia de estilos entre navegadores.
    -   *CSS3:* For visual styling.
        -   Includes custom styles and the use of the Skeleton CSS framework for responsive layout.
        -   Normalize.css was used to ensure style consistency across browsers.

## Más Información (Learn More)

Puedes aprender más sobre las tecnologías utilizadas en los siguientes enlaces:

You can learn more about the technologies used at the following links:

-   [Documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started) - (Create React App documentation)
-   [Documentación de React](https://reactjs.org/) - (React documentation)

## Estructura del Proyecto (Project Structure)

Una visión general de los archivos y directorios clave del proyecto:

An overview of key project files and directories:

-   `public/`: Contiene los archivos estáticos y el `index.html` principal.
    -   `public/`: Contains static files and the main `index.html` template.
-   `src/`: Contiene el código fuente de la aplicación React.
    -   `src/`: Contains the React application's source code.
    -   `App.js`: Es el componente raíz de la aplicación que organiza los demás componentes y la lógica principal.
        -   `App.js`: The root application component that organizes other components and main logic.
    -   `components/`: Directorio que alberga los componentes reutilizables de la interfaz de usuario.
        -   `components/`: Directory housing reusable UI components.
        -   `Cita.js`: Componente para mostrar una cita individual.
            -   `Cita.js`: Component for displaying an individual appointment.
        -   `Formulario.js`: Componente para el formulario de creación de nuevas citas.
            -   `Formulario.js`: Component for the new appointment creation form.
    -   `index.js`: Punto de entrada de JavaScript que renderiza el componente `App` en el DOM.
        -   `index.js`: JavaScript entry point that renders the `App` component into the DOM.
    -   `index.css`: Archivo para los estilos globales y personalizados de la aplicación.
        -   `index.css`: File for global and custom application styles.
-   `package.json`: Define los metadatos del proyecto, dependencias y scripts.
    -   `package.json`: Defines project metadata, dependencies, and scripts.
-   `README.md`: Este archivo, proporcionando información sobre el proyecto.
    -   `README.md`: This file, providing information about the project.
