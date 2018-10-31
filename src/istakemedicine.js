const moment = require("moment");
moment.locale("ja");

const { getFileContents } = require("./getFileContents");

const TODAY_DATE = moment().format("YYYY/MM/DD");
const AM_MATCH = new RegExp(TODAY_DATE + " [0-9]:d*");
const PM_MATCH = new RegExp(TODAY_DATE + " [0-9][0-9]:d*");

const isTakeMedicine = async tz => {
	const allDate = await getFileContents();
	const latestData = allDate.split("\n")[0];
	// prettier-ignore
	const result =
    tz === "AM" ? AM_MATCH.test(latestData) :
    tz === "PM" ? PM_MATCH.test(latestData) :
    false
	return result;
};

module.exports = {
	isTakeMedicine
};
