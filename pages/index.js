import { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import BackGroundImg from '../src/components/Background'
import Logo from '../src/components/Logo'
import Box from '../src/components/Box'
import GithubCorner from '../src/components/GithubCorner'
import Footer from '../src/components/Footer'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

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
	const router = useRouter()
	const [name, setName] = useState('')

	const WriteAName = event => setName(event.target.value)

	const FormSubmited = event => {
		event.preventDefault()
		return router.push(`/quiz/?name=${name}`)
	}

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
						<form onSubmit={e => FormSubmited(e)}>
							<Input
								value={name}
								placeholder='Digite seu nome =]'
								onChange={e => WriteAName(e)}
							/>
							<Button type='submit' disabled={name ? false : true}>
								{`Jogar como ${name}`}
							</Button>
						</form>
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
