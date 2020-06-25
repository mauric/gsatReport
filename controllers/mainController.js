var mainController = {
    index : (req, res) => {
        res.render('index', {title: 'ReporteSolicitado'});
    }
}

module.exports = mainController;

