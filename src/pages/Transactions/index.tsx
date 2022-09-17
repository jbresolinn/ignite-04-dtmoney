import { Summary } from '../../components/Summary'
import { TransactionsList } from './components/TransactionsList'
import { TransactionsContainer, TransactionsContent } from './styles'

export function Transactions() {
  return (
    <TransactionsContainer>
      <Summary />

      <TransactionsContent>
        <TransactionsList />
      </TransactionsContent>
    </TransactionsContainer>
  )
}
