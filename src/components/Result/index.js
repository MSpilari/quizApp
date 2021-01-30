import NextLink from 'next/link'
import styled from 'styled-components'
import Box from '../Box'

const ReturnLink = styled.a`
	color: ${({ theme }) => theme.colors.contrastText};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`

const ResultWidget = ({ totalPoints, playerName }) => {
	return (
		<Box>
			<Box.Header>
				<h1>Fim de jogo !</h1>
			</Box.Header>
			<Box.Content>
				<p>
					Parabéns, {playerName} você fez {totalPoints} ponto(s) !!
				</p>
				<NextLink href='/'>
					<ReturnLink>Voltar para a Home</ReturnLink>
				</NextLink>
			</Box.Content>
		</Box>
	)
}

export default ResultWidget
