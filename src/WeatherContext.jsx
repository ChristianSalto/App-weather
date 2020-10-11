import React from 'react';

// Con la funcion "React.createContext()" podremos guardar el "context" en nuestra variable con la que despues
// podremos envolver nuestro componente padre y podremos proveer cualquier propiedad a nuestros componentes hijos
// en cualquier nivel de anidacion que se encuentre nuestro componente y sin necesidad de pasar por todos
// los componentes que no necesiten esas props y evitando asi re-renderizaciones innecesarias

const WeatherStateContext = React.createContext();

const WeatherDispatchContext = React.createContext();

export { WeatherStateContext, WeatherDispatchContext };
