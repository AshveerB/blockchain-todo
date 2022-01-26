App = {
	loading: false,
	contracts: {},

	load: async () => {
		await App.loadWeb3();
		await App.loadAccount();
		await App.loadContract();
		await App.render();
	},

	// https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
	loadWeb3: async () => {
		// if (typeof web3 !== 'undefined') {
		// 	App.web3Provider = web3.currentProvider;
		// 	web3 = new Web3(web3.currentProvider);
		// } else {
		// 	window.alert('Please connect to Metamask.');
		// }
		// // Modern dapp browsers...
		// if (window.ethereum) {
		// 	window.web3 = new Web3(ethereum);
		// 	try {
		// 		// Request account access if needed
		// 		await ethereum.enable();
		// 		// Acccounts now exposed
		// 		web3.eth.sendTransaction({
		// 			/* ... */
		// 		});
		// 	} catch (error) {
		// 		// User denied account access...
		// 	}
		// }
		// // Legacy dapp browsers...
		// else if (window.web3) {
		// 	App.web3Provider = web3.currentProvider;
		// 	window.web3 = new Web3(web3.currentProvider);
		// 	// Acccounts always exposed
		// 	web3.eth.sendTransaction({
		// 		/* ... */
		// 	});
		// }
		// // Non-dapp browsers...
		// else {
		// 	console.log(
		// 		'Non-Ethereum browser detected. You should consider trying MetaMask!'
		// 	);
		// }

		https://medium.com/valist/how-to-connect-web3-js-to-metamask-in-2020-fee2b2edf58a
		try {
			web3 = await new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
		} catch (error) {
			alert(error);
		}

		// const address = '0xffAf0b754b0dF458CC364e09B1bf49F28b3D75ef';

		// const abi = [
		// 	{
		// 		constant: true,
		// 		inputs: [
		// 			{
		// 				name: '',
		// 				type: 'uint256',
		// 			},
		// 		],
		// 		name: 'tasks',
		// 		outputs: [
		// 			{
		// 				name: 'id',
		// 				type: 'uint256',
		// 			},
		// 			{
		// 				name: 'content',
		// 				type: 'string',
		// 			},
		// 			{
		// 				name: 'completed',
		// 				type: 'bool',
		// 			},
		// 		],
		// 		payable: false,
		// 		stateMutability: 'view',
		// 		type: 'function',
		// 		signature: '0x8d977672',
		// 	},
		// 	{
		// 		constant: true,
		// 		inputs: [],
		// 		name: 'taskCount',
		// 		outputs: [
		// 			{
		// 				name: '',
		// 				type: 'uint256',
		// 			},
		// 		],
		// 		payable: false,
		// 		stateMutability: 'view',
		// 		type: 'function',
		// 		signature: '0xb6cb58a5',
		// 	},
		// 	{
		// 		inputs: [],
		// 		payable: false,
		// 		stateMutability: 'nonpayable',
		// 		type: 'constructor',
		// 		signature: 'constructor',
		// 	},
		// 	{
		// 		anonymous: false,
		// 		inputs: [
		// 			{
		// 				indexed: false,
		// 				name: 'id',
		// 				type: 'uint256',
		// 			},
		// 			{
		// 				indexed: false,
		// 				name: 'content',
		// 				type: 'string',
		// 			},
		// 			{
		// 				indexed: false,
		// 				name: 'completed',
		// 				type: 'bool',
		// 			},
		// 		],
		// 		name: 'TaskCreated',
		// 		type: 'event',
		// 		signature:
		// 			'0x05d0fb833127fc08168556d0e7ca9554fc3f6bc843b3b7d2bf1c35aea6bab660',
		// 	},
		// 	{
		// 		anonymous: false,
		// 		inputs: [
		// 			{
		// 				indexed: false,
		// 				name: 'id',
		// 				type: 'uint256',
		// 			},
		// 			{
		// 				indexed: false,
		// 				name: 'completed',
		// 				type: 'bool',
		// 			},
		// 		],
		// 		name: 'TaskCompleted',
		// 		type: 'event',
		// 		signature:
		// 			'0xe21fa966ca5cd02748c0752352d18c48165e61cb55b4c29cccf924b5a95fcff1',
		// 	},
		// 	{
		// 		constant: false,
		// 		inputs: [
		// 			{
		// 				name: '_content',
		// 				type: 'string',
		// 			},
		// 		],
		// 		name: 'createTask',
		// 		outputs: [],
		// 		payable: false,
		// 		stateMutability: 'nonpayable',
		// 		type: 'function',
		// 		signature: '0x111002aa',
		// 	},
		// 	{
		// 		constant: false,
		// 		inputs: [
		// 			{
		// 				name: '_id',
		// 				type: 'uint256',
		// 			},
		// 		],
		// 		name: 'toggleCompleted',
		// 		outputs: [],
		// 		payable: false,
		// 		stateMutability: 'nonpayable',
		// 		type: 'function',
		// 		signature: '0x455f5024',
		// 	},
		// ];

		// if (window.ethereum) {
		// 	ethereum
		// 		.request({ method: 'eth_requestAccounts' })
		// 		.catch((err) => console.error(err.message));

		// 	ethereum.on('chainChanged', () => window.location.reload());

		// 	ethereum.on('accountsChanged', (accounts) => {
		// 		if (accounts.length > 0) {
		// 			console.log(`Using account ${accounts[0]}`);
		// 		} else {
		// 			console.error('0 accounts.');
		// 		}
		// 	});

		// 	ethereum.on('message', (message) => console.log(message));

		// 	ethereum.on('connect', (info) => {
		// 		console.log(`Connected to network ${info}`);
		// 	});

		// 	ethereum.on('disconnect', (error) => {
		// 		console.log(`Disconnected from network ${error}`);
		// 	});

		// 	const provider = new ethers.providers.Web3Provider(window.ethereum);

		// 	const signer = provider.getSigner();

		// 	const contract = new ethers.Contract(address, abi, signer);
		// } else {
		// 	console.error('Install MetaMask.');
		// }
	},

	loadAccount: async () => {
		// Set the current blockchain account
		App.account = web3.eth.accounts[0];
	},

	loadContract: async () => {
		// Create a JavaScript version of the smart contract
		const todoList = await $.getJSON('TodoList.json');
		App.contracts.TodoList = TruffleContract(todoList);
		App.contracts.TodoList.setProvider(App.web3Provider);

		// Hydrate the smart contract with values from the blockchain
		App.todoList = await App.contracts.TodoList.deployed();
	},

	render: async () => {
		// Prevent double render
		if (App.loading) {
			return;
		}

		// Update app loading state
		App.setLoading(true);

		// Render Account
		$('#account').html(App.account);

		// Render Tasks
		await App.renderTasks();

		// Update loading state
		App.setLoading(false);
	},

	renderTasks: async () => {
		// Load the total task count from the blockchain
		const taskCount = await App.todoList.taskCount();
		const $taskTemplate = $('.taskTemplate');

		// Render out each task with a new task template
		for (var i = 1; i <= taskCount; i++) {
			// Fetch the task data from the blockchain
			const task = await App.todoList.tasks(i);
			const taskId = task[0].toNumber();
			const taskContent = task[1];
			const taskCompleted = task[2];

			// Create the html for the task
			const $newTaskTemplate = $taskTemplate.clone();
			$newTaskTemplate.find('.content').html(taskContent);
			$newTaskTemplate
				.find('input')
				.prop('name', taskId)
				.prop('checked', taskCompleted)
				.on('click', App.toggleCompleted);

			// Put the task in the correct list
			if (taskCompleted) {
				$('#completedTaskList').append($newTaskTemplate);
			} else {
				$('#taskList').append($newTaskTemplate);
			}

			// Show the task
			$newTaskTemplate.show();
		}
	},

	createTask: async () => {
		App.setLoading(true);
		const content = $('#newTask').val();
		await App.todoList.createTask(content);
		window.location.reload();
	},

	toggleCompleted: async (e) => {
		App.setLoading(true);
		const taskId = e.target.name;
		await App.todoList.toggleCompleted(taskId);
		window.location.reload();
	},

	setLoading: (boolean) => {
		App.loading = boolean;
		const loader = $('#loader');
		const content = $('#content');
		if (boolean) {
			loader.show();
			content.hide();
		} else {
			loader.hide();
			content.show();
		}
	},
};

$(() => {
	$(window).load(() => {
		App.load();
	});
});
