import { PriceHighlight, TransactionsListContainer } from './styles'

export function TransactionsList() {
  return (
    <TransactionsListContainer>
      <tbody>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>
            <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>

        <tr>
          <td>Desenvolvimento de site</td>
          <td>
            <PriceHighlight variant="outcome">R$ -59,00</PriceHighlight>
          </td>
          <td>Alimentação</td>
          <td>13/04/2022</td>
        </tr>

        <tr>
          <td>Desenvolvimento de site</td>
          <td>
            <PriceHighlight variant="outcome">R$ -59,00</PriceHighlight>
          </td>
          <td>Alimentação</td>
          <td>13/04/2022</td>
        </tr>

        <tr>
          <td>Desenvolvimento de site</td>
          <td>
            <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
      </tbody>
    </TransactionsListContainer>
  )
}
