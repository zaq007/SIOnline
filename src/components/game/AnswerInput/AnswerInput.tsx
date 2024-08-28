import { connect } from 'react-redux';
import * as React from 'react';
import { Dispatch, Action } from 'redux';
import roomActionCreators from '../../../state/room/roomActionCreators';
import State from '../../../state/State';
import Constants from '../../../model/enums/Constants';
import localization from '../../../model/resources/localization';
import { useAppDispatch } from '../../../state/new/hooks';
import { sendAnswer } from '../../../state/new/room2Slice';

import './AnswerInput.scss';

interface AnswerInputProps {
	isConnected: boolean;
	id: string;
	isAnswering: boolean;
	answer: string;
	onAnswerChanged: (answer: string) => void;
	sendAnswer: () => void;
}

const mapStateToProps = (state: State) => ({
	isConnected: state.common.isSIHostConnected,
	isAnswering: state.room.stage.isAnswering,
	answer: state.room.answer || ''
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	onAnswerChanged: (answer: string) => {
		dispatch(roomActionCreators.updateAnswer(answer) as unknown as Action);
	},
	sendAnswer: () => {
		dispatch(roomActionCreators.sendAnswer() as unknown as Action);
	}
});

export function AnswerInput(props: AnswerInputProps): JSX.Element | null {
	const appDispatch = useAppDispatch();

	const onAnswerChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onAnswerChanged(e.target.value);
	};

	const sendAnswer2 = () => {
		appDispatch(sendAnswer(props.answer));
		props.sendAnswer();
	};

	const onAnswerKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === Constants.KEY_ENTER_NEW) {
			if (props.isConnected) {
				sendAnswer2();
			}

			e.preventDefault();
		}
	};

	return props.isAnswering ? (
		<div className='answerInputHost'>
			<input
				id={props.id}
				autoFocus
				className="answerInput"
				value={props.answer}
				onChange={onAnswerChanged}
				onKeyPress={onAnswerKeyPress}
				maxLength={250}
				placeholder={localization.inputAnswer}
			/>

			<button
				type='button'
				className='sendAnswer mainAction active'
				title={localization.send}
				onClick={sendAnswer2}>
				<svg width="14" height="13" viewBox="0 0 14 13" fill="none">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.85337 7.88091H0V5.11911H8.85337L5.77101 1.95288L7.67216 0L14 6.5L7.67216 13L5.77101 11.0471L8.85337 7.88091Z"
						fill="white"/>
				</svg>
			</button>
		</div>
	) : null;
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerInput);
