import newsRepository from "../repository/newsRepository";
class NewsService{

    get(){
        return newsRepository.find({}).catch(err=> console.error(err));
    }
    getById(_id: String){
        return newsRepository.findById(_id);
    }

    create(news){
        return newsRepository.create(news);
    }
    update(_id,news){
        return newsRepository.findByIdAndUpdate(_id, news);
    }

    delete(_id){
        return newsRepository.findByIdAndRemove(_id);
    }

    onUpdated(error, doc) {
        // error: any errors that occurred
        // doc: the document before updates are applied if `new: false`, or after updates if `new = true`
        console.log(error, doc)
      }

}

export default new NewsService();