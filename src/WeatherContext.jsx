import React, { useReducer, useContext } from 'react';

// Con la funcion "React.createContext()" podremos guardar el "context" en nuestra variable con la que despues
// podremos envolver nuestro componente padre y podremos proveer cualquier propiedad a nuestros componentes hijos
// en cualquier nivel de anidacion que se encuentre nuestro componente y sin necesidad de pasar por todos
// los componentes que no necesiten esas props y evitando asi re-renderizaciones innecesarias

const WeatherStateContext = React.createContext();

const WeatherDispatchContext = React.createContext();

const initialValue = {
  allWeather: {},
  allChartData: {},
  allForecastItemList: {},
};

// actions {type: "XXX", payload: "XXX"}
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALL_WEATHER':
      const weatherCity = action.payload;
      const newAllWeather = { ...state.allWeather, ...weatherCity };
      return { ...state, allWeather: newAllWeather };
    case 'SET_CHART_DATA':
      const chartDataCity = action.payload;
      const newAllChartData = { ...state.allChartData, ...chartDataCity };
      return { ...state, allChartData: newAllChartData };
    case 'SET_FORECAST_ITEM_LIST':
      const forecastItemListCity = action.payload;
      const newAllForecastItemListCity = {
        ...state.allForecastItemList,
        ...forecastItemListCity,
      };
      return { ...state, allForecastItemList: newAllForecastItemListCity };
    default:
      return state;
  }
};

const WeatherContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <WeatherDispatchContext.Provider value={dispatch}>
      <WeatherStateContext.Provider value={state}>
        {children}
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  );
};

const useWeatherStateContext = () => {
  const state = useContext(WeatherStateContext);
  return state;
};

const useWeatherDispatchContext = () => {
  const dispatch = useContext(WeatherDispatchContext);
  return dispatch;
};

export { WeatherContext, useWeatherStateContext, useWeatherDispatchContext };
