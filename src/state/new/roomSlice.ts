import { createSlice } from '@reduxjs/toolkit';
import ChatMessage from '../../model/ChatMessage';
import ChatMode from '../../model/enums/ChatMode';
import Role from '../../model/Role';
import Persons from '../../model/Persons';
import Timers from '../../model/Timers';
import TimerStates from '../../model/enums/TimeStates';
import JoinMode from '../../client/game/JoinMode';
import StakeModes from '../../client/game/StakeModes';
import UsersMode from '../../model/enums/UsersMode';

interface RoomState {
	persons: {
		all: Persons;
		hostName: string | null;
	};

	name: string;
	role: Role;
	answer: string | null;
	lastReplic: ChatMessage | null;

	stage: {
		name: string;
		roundIndex: number;
		isGamePaused: boolean;
		isEditEnabled: boolean;
		isGameStarted: boolean;
		isDecisionNeeded: boolean;
		isAnswering: boolean;
		isAfterQuestion: boolean;
		themeIndex: number;
		currentPrice: number;
		themeName: string;
		isQuestion: boolean;
		questionType: string;
	};

	timers: Timers;
	showMainTimer: boolean;

	selection: {
		isEnabled: boolean;
		message: string;
	};

	stakes: {
		areVisible: boolean;
		stakeModes: StakeModes;
		minimum: number;
		maximum: number;
		step: number;
		stake: number;
	};

	validation: {
		isVisible: boolean;
		header: string;
		name: string;
		answer: string;
		message: string;
		rightAnswers: string[];
		wrongAnswers: string[];
		showExtraRightButtons: boolean;
	};

	chat: {
		isVisible: boolean;
		isActive: boolean;
		mode: ChatMode;
		message: string;
		messages: ChatMessage[];
		usersMode: UsersMode;
		selectedPersonName: string | null;
	};

	selectedTableIndex: number; // 0 for showman; {N} for player {N - 1}
	personsVisible: boolean;
	tablesVisible: boolean;
	bannedVisible: boolean;
	gameInfoVisible: boolean;
	manageGameVisible: boolean;
	avatarViewVivible: boolean;
	isGameButtonEnabled: boolean;
	areSumsEditable: boolean;
	readingSpeed: number;
	areApellationsEnabled: boolean;
	hint: string | null;
	roundsNames: string[] | null;
	buttonBlockingTimeSeconds: number;

	metadata: {
		gameName: string | null;
		packageName: string | null;
		contactUri: string | null;
		voiceChatUri: string | null;
	};

	banned: {
		entries: Record<string, string>;
		selectedIp: string | null;
	};

	joinMode: JoinMode;
	kicked: boolean;
	webCameraUrl: string;
}

const initialState: RoomState = {
	persons: {
		all: {},
		hostName: null
	},

	name: '',
	role: Role.Player,
	answer: null,
	lastReplic: null,

	stage: {
		name: '',
		roundIndex: -1,
		isGamePaused: false,
		isEditEnabled: false,
		isGameStarted: false,
		isDecisionNeeded: false,
		isAnswering: false,
		isAfterQuestion: false,
		themeIndex: -1,
		currentPrice: 0,
		themeName: '',
		isQuestion: false,
		questionType: '',
	},

	timers: {
		round: {
			state: TimerStates.Stopped,
			isPausedBySystem: true,
			isPausedByUser: false,
			value: 0,
			maximum: 0,
		},
		press: {
			state: TimerStates.Stopped,
			isPausedBySystem: true,
			isPausedByUser: false,
			value: 0,
			maximum: 0
		},
		decision: {
			state: TimerStates.Stopped,
			isPausedBySystem: true,
			isPausedByUser: false,
			value: 0,
			maximum: 0
		}
	},

	showMainTimer: false,

	selection: {
		isEnabled: false,
		message: ''
	},

	stakes: {
		areVisible: false,
		stakeModes: StakeModes.None,
		minimum: 0,
		maximum: 0,
		step: 0,
		stake: 0,
	},

	validation: {
		isVisible: false,
		header: '',
		name: '',
		answer: '',
		message: '',
		rightAnswers: [],
		wrongAnswers: [],
		showExtraRightButtons: false,
	},

	chat: {
		isVisible: false,
		isActive: false,
		mode: ChatMode.Chat,
		message: '',
		messages: [],
		usersMode: UsersMode.Users,
		selectedPersonName: null,
	},

	selectedTableIndex: -1,
	personsVisible: false,
	tablesVisible: false,
	bannedVisible: false,
	gameInfoVisible: false,
	manageGameVisible: false,
	avatarViewVivible: false,
	isGameButtonEnabled: true,
	areSumsEditable: false,
	readingSpeed: 20,
	areApellationsEnabled: true,
	hint: null,
	roundsNames: null,
	buttonBlockingTimeSeconds: 3,

	metadata: {
		gameName: null,
		packageName: null,
		contactUri: null,
		voiceChatUri: null,
	},

	banned: {
		entries: {},
		selectedIp: null,
	},

	joinMode: JoinMode.AnyRole,
	kicked: false,
	webCameraUrl: '',
};

export const roomSlice = createSlice({
	name: 'room',
	initialState,
	reducers: {
		clearDecisions: (state: RoomState) => {
			state.stage.isAnswering = false;
			state.stage.isDecisionNeeded = false;
			state.validation.isVisible = false;
			state.selection.isEnabled = false;
			state.stakes.areVisible = false;
			state.answer = null;
			state.hint = null;
		}
	}
});

export const {
	clearDecisions
} = roomSlice.actions;

export default roomSlice.reducer;