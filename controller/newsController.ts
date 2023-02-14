import newsService from "../services/newsService";
import * as HttpStatus from 'http-status'
import helpers from "../infra/helpers";

class NewsController {

    get(req, res) {
       newsService.get()
            .then(news => helpers.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }
    getById(req, res) {

        const _id = req.params.id;
        newsService.getById(_id)
            .then(news => helpers.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`))

    }

    create(req, res) {

        let newsVO = req.body;
        newsService.create(newsVO)
            .then(news => helpers.sendResponse(res, HttpStatus.CREATED, news))
            .catch(error => console.error.bind(console, `Error ${error}`))

    }
    update(req, res) {

        const _id = req.params.id;
        let newsVO = req.body;
        newsService.update(_id, newsVO)
            .then(news => helpers.sendResponse(res, HttpStatus.OK, `News ${_id} updated with success!`))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }

    delete(req, res) {
        const _id = req.params.id;
        newsService.delete(_id)
            .then(() => helpers.sendResponse(res, HttpStatus.OK, `News ${_id} removed with success!`))
            .catch(error => console.error.bind(console, `Error at ${error}`))
    }

}

export default new NewsController();