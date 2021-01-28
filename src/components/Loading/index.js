import styled from 'styled-components'
import Box from '../Box'

const AnimatedCircle = styled.div`
	border-top: 4px solid ${({ theme }) => theme.colors.secondary};
	width: 50px;
	height: 50px;
	margin: 0 auto;
	border-radius: 100%;
	animation: move360 1s linear infinite;

	@keyframes move360 {
		100% {
			transform: rotate(360deg);
		}
	}
`

AnimatedCircle.Text = styled.p`
	text-align: center;
`

const LoadingWidget = () => {
	return (
		<Box>
			<Box.Header>
				<h1>Carregando a diversão !!</h1>
			</Box.Header>
			<Box.Content>
				<AnimatedCircle />
				<AnimatedCircle.Text>Carregando...</AnimatedCircle.Text>
			</Box.Content>
		</Box>
	)
}

export default LoadingWidget
