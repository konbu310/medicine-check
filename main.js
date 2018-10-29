const cron = require("node-cron");

/** 午前のタスク */
cron.schedule("00 00 9 * * *", () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	isTakeMedicine();
});

/** 午後のタスク */
cron.schedule("00 00 23 * * *", () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	isTakeMedicine();
});
