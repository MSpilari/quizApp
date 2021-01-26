import styled from 'styled-components'

const InputStyled = styled.input`
	display: flex;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.mainBg};
	padding: 8px;

	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
`

const Input = props => {
	return <InputStyled {...props} />
}

export default Input
