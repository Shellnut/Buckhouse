var request = require('sync-request');
var waitSync = require('wait-sync');

// npm install sync-request
// npm install wait-sync

for (var i=0; i<unitedStatesData.length; i++) {

    val = unitedStatesData[i];

    if (val.mapLink.includes('skimap.org/data/')) {

        try {
            var myResp = request('GET', 'https://skimap.org/skiareas/view/' + val.id);
            var html = myResp.body.toString();
            var b = html.split('src="https://files.skimap.org/');
            var c = b[1].split('" />')[0];
            var d = 'https://files.skimap.org/' + c;
            waitSync(1);
            console.log(i, d);
            unitedStatesData[i].mapLink = d;
        } catch (e) {
            console.log(i, 'something went wrong', e)
        }
    }
}
