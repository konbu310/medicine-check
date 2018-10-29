const cron = require("node-cron");
const { reply } = require("./src/reply");

/** 起動確認 */
console.log("Schedule execute...");

/** 午前のタスク */
cron.schedule("00 00 9 * * *", () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	isTakeMedicine("AM") ? console.log("ちゃんと飲んでる") : reply();
});

/** 午後のタスク */
cron.schedule("00 00 23 * * *", () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	isTakeMedicine("PM") ? console.log("ちゃんと飲んでる") : reply();
});
