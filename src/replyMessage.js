const Twitter = require("twitter");
const moment = require("moment");
moment.locale("ja");

const client = new Twitter({
	consumer_key: process.env.TW_CONSUMER_KEY,
	consumer_secret: process.env.TW_CONSUMER_SECRET,
	access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET
});

const reply = async mes => {
	await client.post(
		"statuses/update",
		{ status: mes },
		(error, tweet, response) => {
			if (!error) {
				console.log(tweet, response);
			} else {
				console.log(error);
			}
		}
	);
};

module.exports = {
	reply
};
