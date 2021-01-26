import styled from 'styled-components'

import BackGroundImg from '../src/components/Background'
import Logo from '../src/components/Logo'
import Box from '../src/components/Box'
import GithubCorner from '../src/components/GithubCorner'
import Footer from '../src/components/Footer'

import db from '../db.json'

const QuizContainer = styled.div`
	width: 100%;
	max-width: 350px;
	padding-top: 45px;
	margin: auto 10%;
	@media screen and (max-width: 500px) {
		margin: auto;
		padding: 15px;
	}
`

const Home = () => {
	return (
		<BackGroundImg backgroundImage={db.bg}>
			<QuizContainer>
				<Logo />
				<Box>
					<Box.Header>
						<h1>{db.title}</h1>
					</Box.Header>
					<Box.Content>
						<p>{db.description}</p>
					</Box.Content>
				</Box>

				<Box>
					<Box.Content>
						<h1>Quizes da Galera</h1>
						<p>lorem ipsum dolor sit amet...</p>
					</Box.Content>
				</Box>

				<Footer />
			</QuizContainer>

			<GithubCorner projectUrl='https://github.com/MSpilari' />
		</BackGroundImg>
	)
}

export default Home
