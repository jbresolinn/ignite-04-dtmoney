import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer, SummaryContent } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'income') {
        accumulator.income += transaction.price
        accumulator.total += transaction.price
      } else {
        accumulator.outcome += transaction.price
        accumulator.total -= transaction.price
      }

      return accumulator
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      <SummaryContent>
        <SummaryCard iconColor="green">
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} />
          </header>

          <strong>{priceFormatter.format(summary.income)}</strong>
        </SummaryCard>

        <SummaryCard iconColor="red">
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} />
          </header>

          <strong>{priceFormatter.format(summary.outcome)}</strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} />
          </header>

          <strong>{priceFormatter.format(summary.total)}</strong>
        </SummaryCard>
      </SummaryContent>
    </SummaryContainer>
  )
}
