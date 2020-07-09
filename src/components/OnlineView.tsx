﻿import * as React from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import GamesFilter from '../model/enums/GamesFilter';
import State from '../state/State';
import GameInfoView from './GameInfoView';
import UsersView from './UsersView';
import OnlineMode from '../model/enums/OnlineMode';
import NewGameDialog from './NewGameDialog';
import GameInfo from '../model/server/GameInfo';
import Dialog from './common/Dialog';
import actionCreators from '../state/actionCreators';
import { Dispatch, Action } from 'redux';
import ProgressBar from './common/ProgressBar';

import './OnlineView.css';

interface OnlineViewProps {
	inProgress: boolean;
	filteredGames: GameInfo[];
	selectedGameId: number;
	selectedGame?: GameInfo;
	windowWidth: number;
	mode: OnlineMode;
	newGameShown: boolean;

	closeGameInfo: () => void;
}

function filterGames(games: GameInfo[], filter: GamesFilter, search: string) {
	const filteredGames: GameInfo[] = [];

	const onlyNew = (filter & GamesFilter.New) > 0;
	const sport = (filter & GamesFilter.Sport) > 0;
	const tv = (filter & GamesFilter.Tv) > 0;
	const noPassword = (filter & GamesFilter.NoPassword) > 0;

	const allModes = sport && tv || !sport && !tv;

	const normalizedSearch = search.toLocaleLowerCase();

	for (let j = 0; j < games.length; j++) {
		const game = games[j];

		const filteredOk = (allModes || (game.mode === 1 ? sport && !tv : tv && !sport))
			&& (!game.passwordRequired || !noPassword)
			&& (!game.started || !onlyNew)
			&& (normalizedSearch.length === 0 || game.gameName.toLocaleLowerCase().includes(normalizedSearch));

		if (filteredOk) {
			filteredGames.push(games[j]);
		}
	}

	return filteredGames;
}

const mapStateToProps = (state: State) => {
	const filteredGames = filterGames(Object.values(state.online.games), state.online.gamesFilter, state.online.gamesSearch);

	const hasSelectedGame = filteredGames.some(game => game.gameID === state.online.selectedGameId);
	const selectedGameId = hasSelectedGame ? state.online.selectedGameId : (filteredGames.length > 0 ? filteredGames[0].gameID : -1);

	return {
		inProgress: state.online.inProgress,
		filteredGames,
		selectedGameId,
		selectedGame: state.online.games[selectedGameId],
		windowWidth: state.ui.windowWidth,
		mode: state.ui.onlineView,
		newGameShown: state.online.newGameShown
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	closeGameInfo: () => {
		dispatch(actionCreators.closeGameInfo());
	}
});

export class OnlineView extends React.Component<OnlineViewProps> {
	constructor(props: OnlineViewProps) {
		super(props);
	}

	render() {
		if (this.props.windowWidth < 800) {
			if (this.props.mode === OnlineMode.GameInfo && this.props.selectedGame) {
				return (
					<Dialog id="gameInfoDialog" title={this.props.selectedGame.gameName} onClose={() => this.props.closeGameInfo()}>
						<GameInfoView game={this.props.selectedGame} showGameName={false} />
					</Dialog>
				);
			}

			if (this.props.mode === OnlineMode.Games || this.props.mode === OnlineMode.GameInfo) {
				return (
					<div className="onlineView">
						{this.props.inProgress ? <ProgressBar isIndeterminate={true} /> : null}
						<GamesList games={this.props.filteredGames} selectedGameId={this.props.selectedGameId} showInfo={true} />
						{this.props.newGameShown ? <NewGameDialog /> : null}
					</div>
				);
			}

			return <div className="onlineView"><UsersView /></div>;
		}

		return (
			<div className="onlineView">
				{this.props.inProgress ? <ProgressBar isIndeterminate={true} /> : null}
				<GamesList games={this.props.filteredGames} selectedGameId={this.props.selectedGameId} showInfo={false} />
				<GameInfoView game={this.props.selectedGame} showGameName={true} />
				<UsersView />
				{this.props.newGameShown ? <NewGameDialog /> : null}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlineView);
