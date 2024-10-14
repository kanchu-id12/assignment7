import {IoSearchOutline} from 'react-icons/io5'
import {
  SearchInputContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'

const Search = props => {
  const {background} = props
  console.log(background)
  return (
    <SearchInputContainer>
      <SearchInput type="search" placeholder="Search" bg={background} />
      <SearchButton bg={background}>
        {background ? (
          <IoSearchOutline size={14} color="#ffffff" />
        ) : (
          <IoSearchOutline size={14} />
        )}
      </SearchButton>
    </SearchInputContainer>
  )
}

export default Search
