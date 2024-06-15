import * as signalR from '@microsoft/signalr';
import { Dispatch, AnyAction } from 'redux';
import localization from '../model/resources/localization';
import GameInfo from '../client/contracts/GameInfo';
import commonActionCreators from '../state/common/commonActionCreators';
import onlineActionCreators from '../state/online/onlineActionCreators';
import IGameServerClient from '../client/IGameServerClient';
import getErrorMessage from './ErrorHelpers';

export const activeConnections: string[] = [];

const detachedConnections: signalR.HubConnection[] = [];

export function attachListeners(
	gameClient: IGameServerClient,
	connection: signalR.HubConnection,
	dispatch: Dispatch<AnyAction>): void {
	connection.on('Joined', (login: string) => dispatch(onlineActionCreators.userJoined(login)));
	connection.on('Leaved', (login: string) => dispatch(onlineActionCreators.userLeaved(login)));
	connection.on('Say', (name: string, text: string) => dispatch(onlineActionCreators.receiveMessage(name, text)));
	connection.on('GameCreated', (game: GameInfo) => dispatch(onlineActionCreators.gameCreated(game)));
	connection.on('GameChanged', (game: GameInfo) => dispatch(onlineActionCreators.gameChanged(game)));
	connection.on('GameDeleted', (id: number) => dispatch(onlineActionCreators.gameDeleted(id)));

	connection.onreconnecting((e) => {
		if (detachedConnections.includes(connection)) {
			return;
		}

		const errorMessage = e ? ` (${e.message})` : '';
		dispatch(commonActionCreators.isConnectedChanged(false, `${localization.connectionReconnecting}${errorMessage}`) as object as AnyAction);
	});

	connection.onreconnected(() => {
		if (detachedConnections.includes(connection)) {
			return;
		}

		dispatch(commonActionCreators.isConnectedChanged(true, localization.connectionReconnected) as object as AnyAction);
	});

	connection.onclose(async (e) => {
		if (detachedConnections.includes(connection)) {
			return;
		}

		if (e) {
			console.log('Connection close error: ' + getErrorMessage(e));

			try {
				await connection.start();
				await gameClient.reconnectAsync();
				return;
			} catch {
				// empty
			}
		}

		dispatch(commonActionCreators.onConnectionClosed(`${localization.connectionClosed} ${e?.message || ''}`) as object as AnyAction);
	});
}

export function detachListeners(connection: signalR.HubConnection): void {
	connection.off('Joined');
	connection.off('Leaved');
	connection.off('Say');
	connection.off('GameCreated');
	connection.off('GameChanged');
	connection.off('GameDeleted');

	detachedConnections.push(connection);
}

export function removeConnection(connection: signalR.HubConnection): void {
	detachedConnections.splice(detachedConnections.indexOf(connection), 1);
}
