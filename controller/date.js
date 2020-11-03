const dateParser = (req, res) => {
    let date = req.params.date_string;
    if (!date) date = Date.now();
    const dateParsed = new Date(date);
    const ms = dateParsed.getTime();
    if (!isNaN(ms)) {
        return res.status(200).send({ "unix": ms, "utc": dateParsed.toUTCString() })
    }
    return res.status(400).send({ "error": "Invalid Date" })
}

module.exports.dateParser = dateParser;