import { useState, useEffect } from 'react'
import BackGroundImg from '../src/components/Background'
import Logo from '../src/components/Logo'
import QuizContainer from '../src/components/QuizContainer'
import Box from '../src/components/Box'
import Button from '../src/components/Button'

import LoadingWidget from '../src/components/Loading'
import ResultWidget from '../src/components/Result'

import db from '../db.json'

const Quiz = () => {
	const [index, setIndex] = useState(0)
	const [pageRendered, setPageRendered] = useState('Loading')
	const totalOfQuestions = db.questions.length
	let currentIndex = index
	let currentQuestion = db.questions[currentIndex]
	let questionId = `question__${currentIndex}`

	const handleQuestion = event => {
		event.preventDefault()
		if (index < totalOfQuestions - 1) return setIndex(index + 1)
		else return null
	}

	useEffect(() => {
		setTimeout(() => {
			return setPageRendered('Quiz')
		}, 2000)
	}, [])

	return (
		<BackGroundImg backgroundImage={db.bg}>
			<QuizContainer>
				<Logo />
				{pageRendered === 'Loading' && <LoadingWidget />}
				{pageRendered === 'Result' && <ResultWidget />}
				{pageRendered === 'Quiz' && (
					<Box>
						<Box.Header>
							<h1>
								Questão {index + 1} de {totalOfQuestions}
							</h1>
						</Box.Header>
						<img
							alt='Descrição'
							style={{
								width: '100%',
								height: '150px',
								objectFit: 'cover'
							}}
							src={currentQuestion.image}
						/>
						<Box.Content>
							<h1>{currentQuestion.title}</h1>
							<h5>{currentQuestion.description}</h5>
							<form onSubmit={e => handleQuestion(e)}>
								{currentQuestion.alternatives.map((answer, answerIndex) => {
									const alternativeId = `alternative__${answerIndex}`
									return (
										<Box.Topic
											key={answerIndex}
											as='label'
											htmlFor={alternativeId}
										>
											<input
												name={questionId}
												type='radio'
												id={alternativeId}
											/>
											{answer}
										</Box.Topic>
									)
								})}
								<Button type='submit'>Confirmar resposta</Button>
							</form>
						</Box.Content>
					</Box>
				)}
			</QuizContainer>
		</BackGroundImg>
	)
}

export default Quiz
