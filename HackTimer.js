(function (workerScript) {
	var worker,
		fakeIdToCallback = {};
	if (typeof (Worker) !== 'undefined') {
		function getFakeId (prefix) {
			return prefix + Math.floor(
				Math.random () *
				Number.MAX_VALUE
			);
		}
		try {
			worker = new Worker (workerScript);
			window.setInterval = function (callback, time) {
				var fakeId = getFakeId ('i-');
				fakeIdToCallback[fakeId] = callback;
				worker.postMessage ({
					name: 'setInterval',
					fakeId: fakeId,
					time: time
				});
				return fakeId;
			};
			window.clearInterval = function (fakeId) {
				if (fakeIdToCallback.hasOwnProperty(fakeId)) {
					delete fakeIdToCallback[fakeId];
					worker.postMessage ({
						name: 'clearInterval',
						fakeId: fakeId
					});
				}
			};
			window.setTimeout = function (callback, time) {
				var fakeId = getFakeId ('t-');
				fakeIdToCallback[fakeId] = callback;
				worker.postMessage ({
					name: 'setTimeout',
					fakeId: fakeId,
					time: time
				});
				return fakeId;
			};
			window.clearTimeout = function (fakeId) {
				if (fakeIdToCallback.hasOwnProperty(fakeId)) {
					delete fakeIdToCallback[fakeId];
					worker.postMessage ({
						name: 'clearTimeout',
						fakeId: fakeId
					});
				}
			};
			worker.onmessage = function (event) {
				var data = event.data,
					fakeId = data.fakeId,
					callback;
				if (fakeIdToCallback.hasOwnProperty(fakeId)) {
					callback = fakeIdToCallback[fakeId];
				}
				if (typeof (callback) === 'function') {
					callback.call (window);
				}
			};
			worker.onerror = function (event) {
				console.log(event);
			};
			console.log('HackTimer.js by turuslan: Initialisation succeeded');
		} catch (error) {
			console.log('HackTimer.js by turuslan: Initialisation failed');
			console.error(error);
		}
	} else {
		console.log('HackTimer.js by turuslan: Initialisation failed - HTML5 Web Worker is not supported');
	}
})('HackTimerWorker.js');