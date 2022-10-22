import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer, SummaryContent } from './styles'

export function Summary() {
  const summary = useSummary()

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
