import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
        {
          id: 2,
          title: "Transaction 2",
          amount: 40111,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
        {
          id: 3,
          title: "Transaction 3",
          amount: 51515,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
        {
          id: 4,
          title: "Transaction 4",
          amount: 900,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
