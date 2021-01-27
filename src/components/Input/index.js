import styled from 'styled-components'

const InputStyled = styled.input`
	display: flex;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.mainBg};
	padding: 8px;

	border: 1px solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.borderRadius};
	outline: none;

	margin: 10px 0;
`

const Input = props => {
	return <InputStyled {...props} />
}

export default Input
