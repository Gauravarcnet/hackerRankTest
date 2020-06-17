const https = require('https');

// function returns a Promise
function getPromise() {
    let post_options = {
        host: 'samples.openweathermap.org',
        path: '/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02',
        // headers: {
        //     "x-rapidapi-host": "crunchbase-crunchbase-v1.p.rapidapi.com",
        //     "x-rapidapi-key": "84a51a419bmshb7a4d5b6f69fe8ep167ca8jsnc01348540cf2",
        //     "useQueryString": true
        // }
    };
  
	return new Promise((resolve, reject) => {
		https.get(post_options, (response) => {
			let chunks_of_data = [];

			response.on('data', (fragments) => {
				chunks_of_data.push(fragments);
			});

			response.on('end', () => {
				let response_body = Buffer.concat(chunks_of_data);
				resolve(JSON.parse(response_body));
			});

			response.on('error', (error) => {
				reject(error);
			});
		});
	});
}

// async function to make https request
async function makeSynchronousRequest(request) {
	try {
		let response_body = await getPromise();

		// holds response from server that is passed when Promise is resolved
		console.log(response_body);
	}
	catch(error) {
		// Promise rejected
		console.log(error);
	}
}

console.log(1);

// anonymous async function to execute some code synchronously after https request
(async function () {
	// wait to https request to finish
	await makeSynchronousRequest();
	
	// below code will be executed after http request is finished
	console.log(2);
})();

console.log(3);