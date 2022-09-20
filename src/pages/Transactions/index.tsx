import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { TransactionsList } from './components/TransactionsList'
import { TransactionsContainer, TransactionsContent } from './styles'

export function Transactions() {
  return (
    <TransactionsContainer>
      <Summary />

      <TransactionsContent>
        <SearchForm />
        <TransactionsList />
      </TransactionsContent>
    </TransactionsContainer>
  )
}
