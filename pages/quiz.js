import { useState } from 'react'
import BackGroundImg from '../src/components/Background'
import Logo from '../src/components/Logo'
import QuizContainer from '../src/components/QuizContainer'

import LoadingWidget from '../src/components/Loading'
import ResultWidget from '../src/components/Result'
import QuestionWidget from '../src/components/Question'

import db from '../db.json'

const Quiz = () => {
	return (
		<BackGroundImg backgroundImage={db.bg}>
			<QuizContainer>
				<Logo />
				<QuestionWidget />
			</QuizContainer>
		</BackGroundImg>
	)
}

export default Quiz
