import Role from '../model/enums/Role';
import GameCreationResult from '../model/server/GameCreationResult';
import GameInfo from '../model/server/GameInfo';
import GameSettings from '../model/server/GameSettings';
import HostInfo from '../model/server/HostInfo';
import PackageKey from '../model/server/PackageKey';
import Slice from '../model/server/Slice';
import IGameServerClient from './IGameServerClient';

/** Defines a disconnected version of IGameServerClient. */
export default class DummyGameServerClient implements IGameServerClient {
	async getComputerAccountsAsync(): Promise<string[]> {
		return [];
	}

	async getGameHostInfoAsync(): Promise<HostInfo> {
		this.throwNotConnectedError();
	}

	async getGamesSliceAsync(fromId: number): Promise<Slice<GameInfo>> {
		this.throwNotConnectedError();
	}

	async getUsersAsync(): Promise<string[]> {
		return [];
	}

	async getNewsAsync(): Promise<string | null> {
		return null;
	}

	async sayInLobbyAsync(text: string): Promise<any> {

	}

	async hasPackageAsync(packageKey: PackageKey): Promise<boolean> {
		return false;
	}

	async createAndJoinGameAsync(gameSettings: GameSettings, packageKey: PackageKey, isMale: boolean): Promise<GameCreationResult> {
		this.throwNotConnectedError();
	}

	async createAutomaticGameAsync(login: string, isMale: boolean): Promise<GameCreationResult> {
		this.throwNotConnectedError();
	}

	async joinGameAsync(gameId: number, role: Role, isMale: boolean, password: string): Promise<GameCreationResult> {
		this.throwNotConnectedError();
	}

	async sendMessageToServerAsync(message: string): Promise<any> {

	}

	async msgAsync(...args: any[]): Promise<any> {

	}

	async sayAsync(...args: any[]): Promise<any> {

	}

	async leaveGameAsync(): Promise<any> {

	}

	async logOutAsync(): Promise<any> {

	}

	private throwNotConnectedError(): never {
		throw new Error('Connection is closed!');
	}
}
