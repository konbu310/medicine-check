const moment = require("moment");
moment.locale("ja");

const { getFileContents } = require("./getfilecontents");

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
