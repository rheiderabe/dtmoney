import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export interface Transaction {
  title: string;
  amount: number;
  id: number;
}
export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    //api.get("transactions").then((response) => console.log(response.data));
    const getTransaction = async () => {
      try {
        const response = await api.get("transactions");
        setTransactions(response.data);
      } catch (err) {
        console.log("erro", err);
      }
    };
    getTransaction();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className="deposit">{transaction.amount}</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
            </tr>
          ))}

          {/* <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1.100</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr> */}
        </tbody>
      </table>
    </Container>
  );
}
