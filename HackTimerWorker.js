var fakeIdToId = {};
onmessage = function (event) {
	var data = event.data,
		name = data.name,
		fakeId = data.fakeId,
		time;
	if(data.hasOwnProperty('time')) {
		time = data.time;
	}
	switch (name) {
		case 'setInterval':
			fakeIdToId[fakeId] = setInterval(function () {
				postMessage({fakeId: fakeId});
			}, time);
			break;
		case 'clearInterval':
			clearInterval(fakeIdToId[fakeId]);
			delete fakeIdToId[fakeId];
			break;
		case 'setTimeout':
			fakeIdToId[fakeId] = setTimeout(function () {
				postMessage({fakeId: fakeId});
			}, time);
			break;
		case 'clearTimeout':
			clearTimeout(fakeIdToId[fakeId]);
			delete fakeIdToId[fakeId];
			break;
	}
}
