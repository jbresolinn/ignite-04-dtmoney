import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  background: transparent;
  padding: 2.5rem 0 7.5rem;
`

export const SummaryContent = styled.div`
  max-width: 1120px;
  margin: -5rem auto 0;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SummaryCardProps {
  iconColor?: 'green' | 'red'
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme.colors['gray-600']};
  padding: 1.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme.colors['green-700']};
    `}

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;

    span {
      line-height: 1.6;
      color: ${(props) => props.theme.colors['gray-300']};
    }

    svg {
      color: ${(props) => props.theme.colors.white};

      ${(props) =>
        props.iconColor === 'green' &&
        css`
          color: ${props.theme.colors['green-500']};
        `}

      ${(props) =>
        props.iconColor === 'red' &&
        css`
          color: ${props.theme.colors['red-500']};
        `}
    }
  }

  strong {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.4;
  }
`
