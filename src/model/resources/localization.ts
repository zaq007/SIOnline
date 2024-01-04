﻿import LocalizedStrings from 'localized-strings';

// First language is used as the default when browser language is different from provided languages

const localization = new LocalizedStrings({
	en: {
		about: [
			'SIGame is an intellectual quiz in which everyone can test their knowledge and reaction speed and fight against opponents.',
			`Game rules are very simple: all questions in the game are divided into themes,
			 and each question in the theme has its own price.
			 Each player has a personal score, which at the beginning of the game is 0.
			 A question is presented, after which a frame appears on the screen indicating that you can press the button and answer.
			 If the player knows the answer, he/she can press the red button. The player who presses the button earlier than others
			 (and will not have a false start), gives an answer. If the answer is correct, the question price is added to the player's score;
			 otherwise - the price is substracted from the score. 
			 In the latter case, other players can try their luck and press the button to answer.`,
			`There are also special questions in the game. 
			In the "Stake Question" the participants bid for a question, and the player with the highest bet answers. 
			In this case, the "All-in" bet (the bet which is equal to the whole player score) can only be outbid by another "All-in".`,
			`"Secret Question" must be given to another player. 
			The player who received it must (if it is included in the question) choose the price of the question and answer it. 
			The theme of the question may differ from the main theme in which the question was opened.`,
			`"No-risk Question" is answered by the player who opened it. 
			In case of a correct answer to the question, he receives doubled question price. 
			In case of an incorrect answer to the question, the player loses nothing.`,
			`The game can also have a final round in which each of the players makes a bet. 
			A question is asked, time is given for thinking, and each of the players submits their answer to the host. 
			After that, the correct answer is announced, and each of the players receives or loses money according to their bet.`,
			'The game winner is the player with the highest score after the last question.',
			'The game button can also be activated using the Ctrl key or the right mouse button.'
		],
		aboutAuthor: 'Author',
		aboutSupport: 'Technical support',
		aboutTitle: 'About',
		addTable: 'Add table',
		adsMessage: 'Ads message',
		all: 'All',
		allIn: 'ALL IN!',
		allowEveryoneToPlayHiddenStakes: 'Everybody could play all stakes (final) question',
		allowEveryoneToPlayHiddenStakesHint: 'even having 0 or negative score',
		answer: 'Answer',
		answerChecking: 'Answer check',
		anyonePlay: 'Play with random opponents',
		apellateAnswer: 'Apellate answer',
		apellation: 'Apellation',
		appName: 'SIGame',
		appUser: 'SIGame',
		ascending: 'ascending',
		audio: 'Audio',
		authorInfo: 'Vladimir Khil',
		autoSearch: 'Fast room',
		autoSearchHint: 'Find a room with an open slot or create a new one',
		avatar: 'Avatar',
		avatarIsTooBig: 'Avatar exceeds maximum size!',
		badPackage: 'Bad question package!',
		ban: 'Ban',
		bannedList: 'Banned list',
		bot: 'Bot',
		buttonPressMode: 'Button press mode',
		buttonPressModeFirstWins: 'Who pressed first',
		buttonPressModeRandomWithinInterval: 'Random from early pressers',
		by: 'by',
		byGame: 'by game',
		cannotConnectToServer: 'Cannot connect to server',
		changeSums: 'Change sums',
		changeToBot: 'Change to bot',
		changeToHuman: 'Change to human',
		chat: 'Chat',
		chooserMark: 'Question chooser mark',
		close: 'Close',
		common: 'Common',
		complain: 'Complain',
		complainHint: 'The question contains spelling or factual error',
		composer: 'Composer',
		computer: 'Bot',
		computerAccountsMissing: 'Computer accounts not loaded. Try to reload the game',
		computerPlayers: 'Bots:',
		connectionClosed: 'Server connection lost!',
		connectionReconnecting: 'Connection lost, trying to reconnect…',
		connectionReconnected: 'Connection restored!',
		contactUri: 'Authors contact',
		content: 'Content',
		cookiesConfirm: 'Accept cookies',
		cookiesWarning: 'This application uses cookies. If you stay on this page, you ageee with that',
		copyText: 'Copy text to clipboard',
		corruptedPackage: 'Question package is corrupted!',
		created: 'Created',
		createOwnPackage: 'Create your own package',
		defaultShowman: 'Leonardo da Vinci',
		deleteAvatar: 'Delete avatar',
		deleteTable: 'Delete table',
		descending: 'descending',
		designer: 'Designer',
		designerInfo: 'Alexander Kuznetsov',
		disableSound: 'Disable sound',
		displaySources: 'Display questions sources',
		donate: 'Donate',
		downloadCount: 'Download count',
		duplicateUserName: 'A user with this name is already logged on the server!',
		duration: 'Duration',
		editTable: 'Edit game table',
		enableSound: 'Enable sound',
		enter: 'Sign in',
		errorBadPackage: 'Bad question package!',
		errorDuplicateGameName: 'A game with the provided name already exists!',
		errorHappened: 'Error happened!',
		errorInternalServerError: 'Cannot create the game because of the server error!',
		errorObsoleteVersion: 'Your game version is outdated. Update the game',
		errorPackageNotFound: 'Cannot create the game because the question package was not found!',
		errorServerNotReady: 'Server is not ready to start a game',
		errorServerUnderMaintainance: `Server is under maintenance! Please reconnect after a while.
		We apologize for any inconvenience.`,
		errorTolerant: 'right to make a mistake',
		errorTooManyGames: 'The maximum number of running games on the server has been exceeded! Please, try again later.',
		errorUnknownError: 'Unable to create the game for unknown reason!',
		exit: 'Exit',
		exitConfirmation: 'Really exit?',
		exitError: 'Cannot exit game!',
		exitFromGame: 'Leave game',
		falseStarts: 'False starts',
		falseStartsHint: 'you can not press the button before the end of the question reading',
		female: 'woman',
		file: 'File with questions',
		filter: 'Filter',
		final: 'Final',
		floatingControls: 'Auto-hide game controls',
		forbiddenNickname: 'This nickname is forbidden on the server!',
		freeTable: 'Free table',
		friendsPlay: 'Play with friends',
		game: 'Game',
		gameAuthor: 'Game author',
		gameButton: 'Game button',
		gameButtonKey: 'Game button key',
		gameCount: 'Game count',
		gameDuration: 'Game duration',
		gameFinished: 'Game finished',
		gameInfo: 'Game info',
		gameJoin: 'Join game',
		gameManageHint: 'Manage game state',
		gameName: 'Room name',
		gameNameMustBeSpecified: 'Game name required!',
		gameLoading: 'Game loading…',
		gameOf: 'Game by',
		games: 'Rooms',
		gameStarted: 'Game started',
		gamesStatistics: 'Games for the last 24 hours',
		gamesTitle: 'Find a room in the list or create a new one',
		gameType: 'Game type',
		gameTypeClassicHint: 'Questions are selected by players',
		gameTypeSimpleHint: 'Questions are played sequentially',
		giveTurn: 'Change active player',
		giveTurnHint: 'Select new active player',
		greeting: 'Welcome to SIGame!',
		hideAnswers: 'Hide answers',
		hideChat: 'Hide chat',
		hintShowman: 'Provide right answers to the showman in advance',
		host: 'Host',
		hostNameChanged: 'Game host has been changed by {0} to {1}',
		hour: 'hour',
		hours2: 'hours',
		hours5: 'hours',
		html: 'HTML',
		human: 'Human',
		humanPlayers: 'Humans:',
		iAmRightFemale: 'I am right!',
		iAmRightMale: 'I am right!',
		iDisagree: 'I disagree!',
		iDisagreeHint: 'Disagree with someone else answer',
		images: 'Images',
		inviteLink: 'Invite by link',
		inviteLinkCopied: 'Invite link copied to clipboard!',
		ignoreWrong: 'Do not subtract points for a wrong answer',
		isRightValidateIt: 'is correct. Decide: should the answer be accepted?',
		joinAsPlayer: 'Player',
		joinAsPlayerHint: 'Join as player',
		joinAsShowman: 'Showman',
		joinAsShowmanHint: 'Join as showman',
		joinAsViewer: 'Viewer',
		joinAsViewerHint: 'Join as viewer',
		joinError: 'Cannot join game',
		joinLobby: 'Join lobby',
		joinMode: 'Join mode',
		joinModeAnyRole: 'Forbidden',
		joinModeForbidden: 'Forbidden',
		joinModeViewer: 'Only as viewer',
		kick: 'Kick',
		language: 'Language',
		languageDefault: '(default)',
		languageEn: 'English',
		languageRu: 'Русский',
		latestGames: 'Latest games',
		library: 'Library',
		librarySearchAll: '(all)',
		librarySearchLessOrEqual: 'less than or equal to',
		librarySearchMoreOrEqual: 'greater than or equal to',
		librarySearchNotSet: '(not set)',
		librarySelect: 'Select',
		libraryTitle: 'Questions library',
		license: 'License',
		licenseAgreement: 'By sending package to server, you agree with server license',
		licenseInfo: 'License: any use of the game is allowed with the condition of attribution.',
		loading: 'Loading…',
		logo: 'Logo',
		mainMenuSound: 'Main menu sound',
		male: 'man',
		managed: 'Managed game',
		managedHint: 'The game continues only by pressing the "Next" button',
		mediaLoadedMark: 'Media loaded',
		members: 'Members',
		menu: 'Menu',
		minute: 'minute',
		minutes2: 'minutes',
		minutes5: 'minutes',
		name: 'Name',
		new: 'New',
		newGame: 'New room',
		news: 'News',
		next: 'Next (→)',
		no: 'No',
		nofalsestart: 'without false starts',
		nominal: 'Nominal',
		notSet: 'Not set',
		noWarranty: `The game is distributed free of charge.
		The author does not guarantee the correct operation of the game in arbitrary conditions
		and is not responsible for any consequences from the game usage.`,
		ofGames: 'games count',
		oral: 'oral',
		oralGame: 'Oral game',
		oralGameHint: 'If the showman is a human. Good setting for live streaming. Players make a choice and give answers by voice',
		oralPlayersActions: 'Allow players to make actions in oral game',
		orByFilling: 'or by filling',
		packageIsTooBig: 'Package exceeds maximum size!',
		packages: 'Packages',
		packageAuthor: 'Author',
		packageAuthors: 'Authors',
		packageDifficulty: 'Difficulty',
		packagePublishedDate: 'Publish date',
		packagePublisher: 'Publisher',
		packageRestriction: 'Restriction',
		packageSubject: 'Topic',
		page: 'Page',
		partialText: 'Partial question text',
		partialTextHint: 'When playing without false starts, the question text is displayed in portions',
		pass: 'Pass',
		password: 'Password',
		passwordRequired: 'Password is required to enter',
		pause: 'Pause',
		pickAnEmoji: 'Pick an emoji',
		playAllQuestionsInFinalRound: 'Play all questions in final round',
		player: 'Player',
		players: 'Players',
		playersAnswer: 'Player answer',
		preloadRoundContent: 'Preload media content for all persons at the beginning of the round',
		questionCount: 'Question count',
		questionPackage: 'Question package',
		questionReadingSpeed: 'Question reading speed',
		questionTypeNoRisk: 'NO RISK QUESTION',
		questionTypeSecret: 'SECRET QUESTION',
		questionTypeStake: 'STAKE QUESTION',
		randomThemes: 'Random themes',
		reactions: 'Reactions',
		readyFemale: 'Ready',
		readyMale: 'Ready',
		reloadPage: 'Reload page',
		replaceWith: 'Replace with',
		resetToDefaults: 'Reset to defaults',
		resetToDefaultsHint: 'Resets all settings to their initial values',
		results: 'Results',
		resume: 'Resume',
		reviews: 'Reviews',
		rightAnswer: 'Right answer',
		rightAnswers: 'Right answers',
		role: 'Role',
		round: 'Round',
		roundsAndThemes: 'Round and themes',
		rules: 'Rules',
		searchGames: 'Rooms search',
		searchHint: 'Start search to see rooms list',
		sec: 's',
		second: 'second',
		seconds2: 'seconds',
		seconds5: 'seconds',
		select: 'Select…',
		selectAvatar: 'Select avatar',
		selectFirstPlayer: 'Select a person to start round',
		selectStaker: 'Select a person to make a stake',
		selectThemeDeleter: 'Select a person to delete a theme',
		send: 'Send',
		sendingPackage: 'Sending package to server…',
		server: 'Server',
		serverLicense: 'Server license',
		settings: 'Settings',
		set: 'Set',
		setHost: 'Set as host',
		sex: 'Sex',
		showAnswers: 'Show answers',
		showChat: 'Show chat',
		showPersonsAtBottomOnWideScreen: 'Show players at the bottom on a wide screen',
		showman: 'Showman',
		singlePlay: 'Play alone',
		size: 'Size',
		sort: 'Sort',
		sound: 'Sound',
		soundApp: 'Application sound',
		sourcesInfo: 'Game source code page.',
		soundVolume: 'Sound volume',
		sport: 'Simple',
		sportPlural: 'Simple',
		started: 'Started',
		startGame: 'Create room',
		startGameHint: 'Start game without waiting for persons readiness',
		status: 'Status',
		supportInfo: 'Support page.',
		tableHint: 'To answer the question, press the red button after the frame lights up on the screen',
		tableLogoAuthor: 'by Vladimir Khil',
		tables: 'Tables',
		text: 'Text',
		theGameWillStartIn: 'The game will start after',
		thePlayerThinksThatHisHerAnswer: 'The player thinks the answer is correct',
		theme: 'Theme',
		time: 'Time',
		timeForBlockingButton: 'Button lockout (when false starts are enabled)',
		timeForChoosingFinalTheme: 'Choosing theme in Final round',
		timeForChoosingQuestion: 'Choosing question',
		timeForFinalThinking: 'Thinking in Final round',
		timeForGivingACat: 'Giving Secret Question',
		timeForMakingStake: 'Making stake in Stake Question and in Final round',
		timeForMediaDelay: 'Pause before asking for answer when playing media',
		timeForPrintingAnswer: 'Entering answer after pressing a button',
		timeForRightAnswer: 'Printing right answer',
		timeForShowmanDecisions: 'Showman decisions and answer validation',
		timeForThinkingOnQuestion: 'Thinking on question',
		timeForThinkingOnSpecial: 'Thinking on a special question',
		timeOfRound: 'Round',
		tooManyGamesByIp: 'Too many games on a single client IP!',
		topPackages: 'Top packages for 24 hours',
		total: 'Total:',
		trends: 'Trends',
		tv: 'Classic',
		tvPlural: 'Classic',
		unban: 'Remove ban',
		unknownError: 'Unknown error',
		unsupportedBrowser: 'Your browser is not supprted. Please, update or replace it',
		unsupportedMediaType: 'Unsupported media type',
		uploadingImageError: 'Avatar sending error',
		uploadingPackageError: 'Package sending error',
		useApellations: 'Answer apellations',
		useApellationsHint: 'Buttons "I am right" and "I disagree"',
		usedComponents: 'Game components and licenses:',
		usePingPenalty: 'Slow down the players with good ping',
		userPackages: '',
		users: 'Players',
		userUnbanned: 'User {0} was unbanned',
		validateAnswer: 'Is player answer correct?',
		video: 'Video',
		viewer: 'Viewer',
		viewers: 'Viewers',
		voiceChat: 'Voice chat',
		welcomeTitle: 'Select an action',
		withoutPassword: 'Without password',
		wrongAnswers: 'Wrong answers',
		wrongGameSettings: 'Wrong game settings!',
		yes: 'Yes',
		youAreKicked: 'You have been kicked from the game!',
		yourName: 'Your name'
	},
	ru: {
		about: [
			'SIGame — интеллектуальная викторина, в которой каждый может проверить свои знания и скорость реакции и сразиться с оппонентами.',
			`Правила игры очень просты: все вопросы в игре поделены по темам, и у каждого вопроса в теме есть своя стоимость.
	У каждого игрока имеется персональный счёт, который в начале игры равен 0.
	Звучит вопрос, после которого на экране появляется рамка, показывающая, что можно отвечать.
	Если игрок знает ответ, он может нажать на красную кнопку. Тот из игроков, кто нажмёт на кнопку ранее
	(и не допустит фальстарта), и даёт ответ. В случае верного ответа стоимость вопроса прибавляется к счёту игрока;
	в случае неверного — снимается со счёта. В последнем случае другие игроки снова могут попытать счастья и нажать на кнопку для ответа.`,
			`Также в игре могут встретиться специальные вопросы. В "Вопросе со ставкой" участники торгуются за вопрос, и отвечает на него тот игрок,
	кто поставит наибольшую сумму. При этом "Ва-банк" (т.е. ставка всей суммы на кон) может быть перебит только другим "Ва-банком".`,
			`"Вопрос с секретом" открывший его участник должен передать другому участнику. Получивший его игрок должен (если это заложено в вопросе)
	выбрать стоимость вопроса и ответить на него. Тема вопроса может отличаться от основной темы, в которой находился вопрос.`,
			`На "Вопрос без риска" отвечает открывший его игрок. В случае правильного ответа на вопрос он получает удвоенную стоимость вопроса.
	В случае неверного ответа на вопрос игрок ничего не теряет.`,
			`В игре также может быть финальный раунд, в котором каждый из игроков делает ставку. Звучит вопрос, даётся время на размышление,
	и каждый из игроков письменно сдаёт свой ответ. После этого оглашается правильный ответ, и каждый из игроков получает или теряет деньги.`,
			'Победителем игры становится игрок, набравший после последнего вопроса наибольшую сумму.',
			'Игровую кнопку можно также активировать при помощи клавиши Ctrl или правой кнопки мыши.'
		],
		aboutAuthor: 'Автор',
		aboutSupport: 'Техническая поддержка',
		aboutTitle: 'Об игре',
		addTable: 'Добавить стол',
		adsMessage: 'Рекламное сообщение',
		all: 'Все',
		allIn: 'ВА-БАНК!',
		allowEveryoneToPlayHiddenStakes: 'Все могут играть общий вопрос со ставками (финал)',
		allowEveryoneToPlayHiddenStakesHint: 'даже с 0 или отрицательным счётом',
		answer: 'Ответ',
		answerChecking: 'Проверка ответа',
		anyonePlay: 'Играть со случайными соперниками',
		apellateAnswer: 'Апеллировать свой ответ',
		apellation: 'Апелляция',
		appName: 'SIGame',
		appUser: 'SIGame',
		ascending: 'по возрастанию',
		audio: 'Аудио',
		authorInfo: 'Владимир Хиль',
		autoSearch: 'Быстрая игра',
		autoSearchHint: 'Найти комнату со свободным слотом или создать новую',
		avatar: 'Аватар',
		avatarIsTooBig: 'Аватар превышает максимальный размер!',
		badPackage: 'Плохой пакет вопросов!',
		ban: 'Забанить',
		bannedList: 'Список забаненных',
		bot: 'Бот',
		buttonPressMode: 'Режим нажатия кнопки',
		buttonPressModeFirstWins: 'Кто первым нажал',
		buttonPressModeRandomWithinInterval: 'Рандом из ранних нажавших',
		by: 'от',
		byGame: 'игрой',
		cannotConnectToServer: 'Не удалось подключиться к серверу',
		changeSums: 'Изменить суммы',
		changeToBot: 'Заменить на бота',
		changeToHuman: 'Заменить на человека',
		chat: 'Чат',
		chooserMark: 'Метка выбирающего вопрос',
		close: 'Закрыть',
		common: 'Общее',
		complain: 'Пожаловаться',
		complainHint: 'В вопросе содержится орфографическая или фактическая ошибка',
		composer: 'Композитор',
		computer: 'Бот',
		computerAccountsMissing: 'Не загружены компьютерные аккаунты. Попробуйте перезагрузить игру',
		computerPlayers: 'Боты:',
		connectionClosed: 'Соединение с сервером разорвано!',
		connectionReconnecting: 'Соединение потеряно, пытаемся переподключиться…',
		connectionReconnected: 'Соединение восстановлено!',
		contactUri: 'Контакты авторов',
		content: 'Контент',
		cookiesConfirm: 'Принять',
		cookiesWarning: 'Это приложение использует куки-файлы. Оставаясь на странице, вы соглашаетесь с этим',
		copyText: 'Скопировать текст в буфер обмена',
		corruptedPackage: 'Пакет вопросов повреждён!',
		created: 'Создана',
		createOwnPackage: 'Создать свой пакет',
		defaultShowman: 'Леонардо да Винчи',
		deleteAvatar: 'Удалить аватар',
		deleteTable: 'Удалить стол',
		descending: 'по убыванию',
		designer: 'Дизайнер',
		designerInfo: 'Александр Кузнецов',
		disableSound: 'Отключить звук',
		displaySources: 'Показывать источники вопросов',
		donate: 'Донат',
		downloadCount: 'Число скачиваний',
		duplicateUserName: 'Пользователь с таким именем уже вошёл на сервер!',
		duration: 'Продолжительность',
		editTable: 'Редактировать табло',
		enableSound: 'Включить звук',
		enter: 'Вход',
		errorBadPackage: 'Плохой пакет вопросов!',
		errorDuplicateGameName: 'Игра с таким именем уже существует!',
		errorHappened: 'Произошла ошибка!',
		errorInternalServerError: 'Не удалось создать игру на сервере из-за ошибки на сервере!',
		errorObsoleteVersion: 'Ваша версия игры устарела. Обновите игру',
		errorPackageNotFound: 'Не удалось создать игру на сервере, так как не был обнаружен игровой пакет!',
		errorServerNotReady: 'Сервер не готов начать игру',
		errorServerUnderMaintainance: `Производится обслуживание сервера! Пожалуйста, подключитесь через некоторое время.
	Приносим извинения за доставленные неудобства.`,
		errorTolerant: 'право на ошибку',
		errorTooManyGames: 'Превышено максимальное количество запущенных игр на сервере! Пожалуйста, подождите.',
		errorUnknownError: 'Не удалось создать игру по неизвестной причине!',
		exit: 'Выход',
		exitConfirmation: 'Действительно выйти?',
		exitError: 'Не удалось выйти из игры!',
		exitFromGame: 'Выйти из игры',
		falseStarts: 'Фальстарты',
		falseStartsHint: 'нельзя нажимать на кнопку до окончания чтения вопроса',
		female: 'женщина',
		file: 'Файл с вопросами',
		filter: 'Фильтр',
		final: 'Финал',
		floatingControls: 'Автоматическое скрытие элементов управления',
		forbiddenNickname: 'На сервере запрещено использование такого ника!',
		freeTable: 'Освободить стол',
		friendsPlay: 'Играть с друзьями',
		game: 'Игра',
		gameAuthor: 'Автор программы',
		gameButton: 'Игровая кнопка',
		gameButtonKey: 'Клавиша игровой кнопки',
		gameCount: 'Всего игр',
		gameDuration: 'Общая продолжительность',
		gameFinished: 'Игра окончена',
		gameInfo: 'Информация об игре',
		gameJoin: 'Вход в игру',
		gameManageHint: 'Управление состоянием игры',
		gameName: 'Название комнаты',
		gameNameMustBeSpecified: 'Необходимо задать название игры!',
		gameLoading: 'Идёт загрузка игры…',
		gameOf: 'Игра от',
		games: 'Комнаты',
		gameStarted: 'Игра началась',
		gamesStatistics: 'Игры за 24 часа',
		gamesTitle: 'Найдите комнату в списке или создайте новую',
		gameType: 'Тип игры',
		gameTypeClassicHint: 'Вопросы выбираются игроками',
		gameTypeSimpleHint: 'Вопросы играются по очереди',
		giveTurn: 'Передать ход игроку',
		giveTurnHint: 'Выберите, кому передать ход',
		greeting: 'Добро пожаловать в SIGame!',
		hideAnswers: 'Скрыть ответы',
		hideChat: 'Скрыть чат',
		hintShowman: 'Сообщать ведущему правильные ответы заранее',
		host: 'Хост',
		hostNameChanged: 'Хост игры был изменён {0} на {1}',
		hour: 'час',
		hours2: 'часа',
		hours5: 'часов',
		html: 'HTML',
		human: 'Человек',
		humanPlayers: 'Люди:',
		iAmRightFemale: 'Я права!',
		iAmRightMale: 'Я прав!',
		iDisagree: 'Я против!',
		iDisagreeHint: 'Оспорить чужой ответ',
		ignoreWrong: 'Не снимать очки за неверный ответ',
		images: 'Изображения',
		inviteLink: 'Пригласить по ссылке',
		inviteLinkCopied: 'Ссылка скопирована',
		isRightValidateIt: 'верен. Примите решение: засчитать ли ответ?',
		joinAsPlayer: 'Игрок',
		joinAsPlayerHint: 'Войти игроком',
		joinAsShowman: 'Ведущий',
		joinAsShowmanHint: 'Войти ведущим',
		joinAsViewer: 'Зритель',
		joinAsViewerHint: 'Войти зрителем',
		joinError: 'Не удалось подключиться к игре',
		joinLobby: 'Войти в лобби',
		joinMode: 'Режим входа',
		joinModeAnyRole: 'С любой ролью',
		joinModeForbidden: 'Вход запрещён',
		joinModeViewer: 'Только зрителем',
		kick: 'Выгнать',
		language: 'Язык',
		languageDefault: '(по умолчанию)',
		languageEn: 'English',
		languageRu: 'Русский',
		latestGames: 'Последние игры',
		library: 'Библиотека',
		librarySearchAll: '(все)',
		librarySearchLessOrEqual: 'меньше или равна',
		librarySearchMoreOrEqual: 'больше или равна',
		librarySearchNotSet: '(не задано)',
		librarySelect: 'Выбрать',
		libraryTitle: 'Библиотека вопросов',
		license: 'Лицензия',
		licenseAgreement: 'Отправляя пакет на сервер, вы соглашаетесь с лицензией сервера',
		licenseInfo: 'Лицензия: допускается любое использование игры с условием указания авторства.',
		loading: 'Загрузка…',
		logo: 'Логотип',
		mainMenuSound: 'Мелодия главного меню',
		male: 'мужчина',
		managed: 'Управляемая игра',
		managedHint: 'Игра продолжается только по нажатию кнопки "Дальше"',
		mediaLoadedMark: 'Мультимедиа загружено',
		members: 'Участники',
		menu: 'Меню',
		minute: 'минута',
		minutes2: 'минуты',
		minutes5: 'минут',
		name: 'Имя',
		new: 'Новые',
		newGame: 'Новая комната',
		news: 'Новости',
		next: 'Дальше (→)',
		no: 'Нет',
		nofalsestart: 'без фальстартов',
		nominal: 'Номинал',
		notSet: 'Не задана',
		noWarranty: `Игра распространяется бесплатно. Автор не гарантирует корректность работы игры в произвольных условиях
	и не несёт ответственности за любые последствия от использования игры.`,
		ofGames: 'игр',
		oral: 'устная',
		oralGame: 'Устная игра',
		oralGameHint: 'Если ведущий – человек. Хорошо подходит для стримов. Игроки делают выбор и дают ответ голосом',
		oralPlayersActions: 'Разрешать игрокам делать выбор в устной игре',
		orByFilling: 'или по заполнению',
		packageIsTooBig: 'Пакет превышает максимальный размер!',
		packages: 'Пакеты',
		packageAuthor: 'Автор',
		packageAuthors: 'Авторы',
		packageDifficulty: 'Сложность',
		packagePublishedDate: 'Дата публикации',
		packagePublisher: 'Издатель',
		packageRestriction: 'Ограничение',
		packageSubject: 'Тематика',
		page: 'Страница',
		partialText: 'Частичный текст вопросов',
		partialTextHint: 'При игре без фальстартов текст выводится порционно',
		pass: 'Пас',
		password: 'Пароль',
		passwordRequired: 'Требуется пароль для входа',
		pause: 'Пауза',
		pickAnEmoji: 'Выбрать эмодзи',
		playAllQuestionsInFinalRound: 'Играть все вопросы в финальном раунде',
		player: 'Игрок',
		players: 'Игроки',
		playersAnswer: 'Ответ игрока',
		preloadRoundContent: 'Предзагружать медиаконтент всем участникам в начале раунда',
		questionCount: 'Число вопросов',
		questionPackage: 'Пакет вопросов',
		questionReadingSpeed: 'Скорость чтения вопроса',
		questionTypeNoRisk: 'ВОПРОС БЕЗ РИСКА',
		questionTypeSecret: 'ВОПРОС С СЕКРЕТОМ',
		questionTypeStake: 'ВОПРОС СО СТАВКОЙ',
		randomThemes: 'Случайный набор тем',
		reactions: 'Реакции',
		readyFemale: 'Готова',
		readyMale: 'Готов',
		reloadPage: 'Обновить страницу',
		replaceWith: 'Заменить на',
		resetToDefaults: 'По умолчанию',
		resetToDefaultsHint: 'Сбрасывает все настройки в их исходное состояние',
		results: 'Результаты',
		resume: 'Продолжить',
		reviews: 'Отзывы',
		rightAnswer: 'Правильный ответ',
		rightAnswers: 'Правильные ответы',
		role: 'Роль',
		round: 'Раунд',
		roundsAndThemes: 'Раунды и темы',
		rules: 'Правила',
		searchGames: 'Поиск комнат',
		searchHint: 'Начните поиск, чтобы увидеть список комнат',
		sec: 'с',
		second: 'секунда',
		seconds2: 'секунды',
		seconds5: 'секунд',
		select: 'Выбрать…',
		selectAvatar: 'Выбрать аватар',
		selectFirstPlayer: 'Выберите начинающего раунд',
		selectStaker: 'Выберите ставящего',
		selectThemeDeleter: 'Выберите убирающего тему',
		send: 'Отправить',
		sendingPackage: 'Отправка пакета на сервер…',
		server: 'Сервер',
		serverLicense: 'Лицензия сервера',
		settings: 'Настройки',
		set: 'Задать',
		setHost: 'Сделать хостом',
		sex: 'Пол',
		showAnswers: 'Показать ответы',
		showChat: 'Показать чат',
		showPersonsAtBottomOnWideScreen: 'Показывать участников внизу окна на широком экране',
		showman: 'Ведущий',
		singlePlay: 'Играть с компьютером',
		size: 'Размер',
		sort: 'Сортировка',
		sound: 'Звук',
		soundApp: 'Звук приложения',
		soundVolume: 'Громкость звука',
		sourcesInfo: 'Страница исходного кода игры.',
		sport: 'Упрощённая',
		sportPlural: 'Упрощённые',
		started: 'Начата',
		startGame: 'Создать комнату',
		startGameHint: 'Начать игру, не дожидаясь готовности участников',
		status: 'Статус',
		supportInfo: 'Страница технической поддержки.',
		tableHint: 'Для ответа на вопрос нажимайте на красную кнопку после загорания рамки на экране',
		tableLogoAuthor: 'Автор игры - Владимир Хиль',
		tables: 'Столы',
		text: 'Текст',
		theGameWillStartIn: 'Игра начнётся через',
		thePlayerThinksThatHisHerAnswer: 'Игрок считает, что его ответ',
		theme: 'Тема',
		time: 'Время',
		timeForBlockingButton: 'Блокировка кнопки при фальстарте',
		timeForChoosingFinalTheme: 'Выбор темы в финальном раунде',
		timeForChoosingQuestion: 'Выбор вопроса',
		timeForFinalThinking: 'Размышление в финале',
		timeForGivingACat: 'Размышление на отдачу "Вопроса с секретом"',
		timeForMakingStake: 'Размышление над ставкой в "Вопросе со ставкой" и в финале',
		timeForMediaDelay: 'Пауза для медиаконтента',
		timeForPrintingAnswer: 'Ввод ответа после нажатия кнопки',
		timeForRightAnswer: 'Вывод правильного ответа',
		timeForShowmanDecisions: 'Принятие решений и ответа ведущим',
		timeForThinkingOnQuestion: 'Размышление над вопросом',
		timeForThinkingOnSpecial: 'Размышление над спецвопросом',
		timeOfRound: 'Раунд',
		tooManyGamesByIp: 'Слишком много игр на одном адресе!',
		topPackages: 'Лучшие пакеты за 24 часа',
		total: 'Всего:',
		trends: 'Тренды',
		tv: 'Классическая',
		tvPlural: 'Классические',
		unban: 'Снять бан',
		unknownError: 'Неизвестная ошибка',
		unsupportedBrowser: 'Ваш браузер не поддерживается. Пожалуйста, обновите или замените его',
		unsupportedMediaType: 'Неподдерживаемый тип медиа',
		uploadingImageError: 'Ошибка отправки аватара',
		uploadingPackageError: 'Ошибка отправки пакета',
		useApellations: 'Апелляции ответов',
		useApellationsHint: 'Кнопки "Я прав" и "Я против"',
		usedComponents: 'Используемые в игре компоненты и их лицензии:',
		usePingPenalty: 'Замедлять игроков с хорошим пингом',
		userPackages: 'Пользовательские пакеты',
		users: 'Игроки',
		userUnbanned: 'Пользователь {0} был разбанен',
		validateAnswer: 'Верен ли ответ игрока?',
		video: 'Видео',
		viewer: 'Зритель',
		viewers: 'Зрители',
		voiceChat: 'Голосовой чат',
		welcomeTitle: 'Выберите действие',
		withoutPassword: 'Без пароля',
		wrongAnswers: 'Неправильные ответы',
		wrongGameSettings: 'Неверные настройки игры!',
		yes: 'Да',
		youAreKicked: 'Вас выгнали из игры!',
		yourName: 'Ваше имя',
	}
});

export default localization;
