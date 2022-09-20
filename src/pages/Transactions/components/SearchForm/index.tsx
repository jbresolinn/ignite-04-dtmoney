import { MagnifyingGlass } from 'phosphor-react'
import { SearchButton, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <fieldset>
        <input type="text" placeholder="Busque uma transação" />
      </fieldset>

      <SearchButton>
        <MagnifyingGlass size={20} />
        <span>Buscar</span>
      </SearchButton>
    </SearchFormContainer>
  )
}
