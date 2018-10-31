const Dropbox = require("dropbox").Dropbox;
const { StringDecoder } = require("string_decoder");

const dbx = new Dropbox({
	accessToken: process.env.DBX_ACCESS_TOKEN,
	fetch: require("isomorphic-fetch")
});
const FILE_PATH = "/Applications/Shortcut/medicine-check.txt";
const decoder = new StringDecoder("utf8");

const getFileContents = async () => {
	try {
		const meta = await dbx.filesDownload({ path: FILE_PATH });
		return decoder.write(meta.fileBinary);
	} catch (error) {
		console.error("エラー：");
		console.error(error);
	}
};

module.exports = {
	getFileContents
};
