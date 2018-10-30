const cron = require("node-cron");
const moment = require("moment");
moment().locale("ja");
const { reply } = require("./src/reply");

/** 起動確認 */
console.log("Schedule execute...");

/** 午前のタスク */
cron.schedule("00 00 9 * * *", async () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	const result = await isTakeMedicine("AM");
	result ? console.log("ちゃんと飲んでる") : reply();
});

/** 午後のタスク */
cron.schedule("00 00 23 * * *", async () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	const result = await isTakeMedicine("PM");
	resutl ? console.log("ちゃんと飲んでる") : reply();
});

/** デバッグ用のタスク */
cron.schedule("00 00 * * * *", async () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	console.log("稼働中");
});
