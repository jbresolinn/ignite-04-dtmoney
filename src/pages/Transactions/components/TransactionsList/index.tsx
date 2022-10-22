import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { PriceHighlight, TransactionsListContainer } from './styles'

export function TransactionsList() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <TransactionsListContainer>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.price}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          )
        })}
      </tbody>
    </TransactionsListContainer>
  )
}
