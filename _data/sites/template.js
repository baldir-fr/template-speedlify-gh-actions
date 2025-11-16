module.exports = {
	name: "template",
	description: "This Speedlify Site",
    options: {
        runs: 1, // Run sample every time
        frequency: 60 * 24, // Every 1 day
        freshChrome: "site" // Use "site" if sites are all on the same origin and share assets.
    },
	urls: [
		"https://baldir-fr.github.io/template-speedlify-gh-actions/"
	]
};
