(function (workerScript) {
	var worker,
		fakeIdToCallback = {},
		lastFakeId = 0,
		logPrefix = 'HackTimer.js by turuslan: ';
	if (typeof (Worker) !== 'undefined') {
		function getFakeId () {
			lastFakeId ++;
			return lastFakeId;
		}
		try {
			worker = new Worker (workerScript);
			window.setInterval = function (callback, time) {
				var fakeId = getFakeId ();
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
				var fakeId = getFakeId ();
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
				if (typeof (callback) === 'string') {
					try {
						callback = new Function (callback);
					} catch (error) {
						console.log (logPrefix + 'Error parsing callback code string: ', error);
					}
				}
				if (typeof (callback) === 'function') {
					callback.call (window);
				}
			};
			worker.onerror = function (event) {
				console.log (event);
			};
			console.log (logPrefix + 'Initialisation succeeded');
		} catch (error) {
			console.log (logPrefix + 'Initialisation failed');
			console.error (error);
		}
	} else {
		console.log (logPrefix + 'Initialisation failed - HTML5 Web Worker is not supported');
	}
})('HackTimerWorker.js');