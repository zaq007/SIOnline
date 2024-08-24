import * as React from 'react';
import State from '../../../state/State';
import Dialog from '../../common/Dialog/Dialog';
import GameInfoView from '../../GameInfoView';
import { connect } from 'react-redux';
import Path from '../../../model/enums/Path';
import uiActionCreators from '../../../state/ui/uiActionCreators';
import { Action } from 'redux';
import { userErrorChanged } from '../../../state/new/commonSlice';
import { useAppDispatch, useAppSelector } from '../../../state/new/hooks';
import localization from '../../../model/resources/localization';

import './JoinRoom.css';

interface JoinRoomProps {
	inProgress: boolean;
	navigate: (path: Path) => void;
}

const mapStateToProps = (state: State) => ({
	inProgress: state.online.inProgress,
});

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
	navigate: (path: Path) => {
		dispatch(uiActionCreators.navigate({ path: path }) as unknown as Action); // TODO: fix typing
	},
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function JoinRoom(props: JoinRoomProps): JSX.Element | null {
	const onlineState = useAppSelector(state => state.online2);
	const { selectedGame } = onlineState;
	const appDispatch = useAppDispatch();

	React.useEffect(() => {
		if (!selectedGame) {
			appDispatch(userErrorChanged(localization.gameNotFound));
			props.navigate(Path.Login);
		}
	}, [props.inProgress]);

	if (!selectedGame) {
		return null;
	}

	return <div className='joinRoomHost'>
		<div className='logo' />

		<Dialog
			className="joinRoom"
			title={`${localization.gameJoin}: ${selectedGame.GameName}`}
			onClose={() => props.navigate(Path.Login)}>
			<GameInfoView game={selectedGame} showGameName={false} />
		</Dialog>
	</div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinRoom);
