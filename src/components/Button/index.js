import styled from 'styled-components'

const Button = styled.button`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.contrastText};
	padding: 8px;
	margin: 5px 0;
	outline: none;
	border-radius: ${({ theme }) => theme.borderRadius};
	cursor: pointer;
	font-weight: 700;
	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryHover};
	}
	&:disabled {
		background-color: ${({ theme }) => theme.colors.disabled};
	}
`

const styledButton = props => {
	return <Button {...props}>{props.children}</Button>
}

export default styledButton
