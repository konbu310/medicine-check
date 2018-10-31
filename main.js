const cron = require("node-cron");
const moment = require("moment");
moment().locale("ja");

const { replyMessage } = require("./src/replyMessage");
const { isTakeMedicine } = require("./src/isTakeMedicine");

const attentionMes = `
  @yuyas310
  ${moment().format("YYYY/MM/DD HH:mm:ss")}
	おまえ薬のんでなくね？
`;

const debugMes = `
	${moment().format("YYYY/MM/DD HH:mm:ss")}
	ちゃんと動いてる
`;

/** 起動確認 */
console.log("起動...");

/** 午前のタスク */
cron.schedule("00 00 9 * * *", async () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	const result = await isTakeMedicine("AM");
	result ? console.log("ちゃんと飲んでる") : await replyMessage(attentionMes);
});

/** 午後のタスク */
cron.schedule("00 00 23 * * *", async () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	const result = isTakeMedicine("PM");
	resutl ? console.log("ちゃんと飲んでる") : await replyMessage(attentionMes);
});

/** デバッグ用のタスク */
cron.schedule("00 30 * * * *", async () => {
	console.log(moment().format("YYYY/MM/DD HH:mm:ss"));
	console.log("稼働中");
	await replyMessage(debugMes);
});
