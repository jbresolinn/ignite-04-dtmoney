import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../../../utils/formatter'
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
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          )
        })}
      </tbody>
    </TransactionsListContainer>
  )
}
