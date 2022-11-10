import './App.css';
import {
  Chart
} from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 9],
  ["Домашние обязанности", 2],
  ["Код", 2],
  ["Логистика", 2],
  ["Разное", 1.5],
  ["Сон", 7.5],
];

export const options = {
  title: "Что я делаю каждый будний день",
};

export function App() {
  return ( <
    Chart chartType = "PieChart"
    data = {
      data
    }
    options = {
      options
    }
    width = {
      "100%"
    }
    height = {
      "500px"
    }
    />
  );
}

export default App;