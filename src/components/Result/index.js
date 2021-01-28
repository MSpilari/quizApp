import Box from '../Box'

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
			</Box.Content>
		</Box>
	)
}

export default ResultWidget
