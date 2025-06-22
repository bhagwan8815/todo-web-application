const testController = (req, res)=>{
    res.status(200).send(`<h1> this is testing route only </h1>`)

}

module.exports = { testController };