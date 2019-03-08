import { Articlelist } from './articlelist';
import { articlelistActions } from './actions';
import {calctotalpage} from "../../utils";
import {fromJS} from "immutable";
import {categorysActions} from "./categorys";
import { searchActions} from "./search";

export function articleReducer(state= new Articlelist(), {artdata, type}) {
    switch (type) {
        case articlelistActions.FETCH_ARTICLES_FULFILLED:
            const totalpageNum = calctotalpage(artdata.count, state.get('page_size'));
            return state.merge({
                totalpage: totalpageNum,
                previous: artdata.previous,
                next: artdata.next,
                articleList: fromJS(artdata.results)
            });
        case articlelistActions.FETCH_ARTICLES_FAILED:
            return state.merge({
                totalpage: 1,
                previous: null,
                next: null,
                articleList: []
            })
        case articlelistActions.UPDATE_ARTICLES_PAGINATION:

            return state.set('page', artdata.page)

        case categorysActions.CHANGE_DROPDOWN_VAULE:
            console.log(artdata)
            return state.merge({
                categoryvalue: artdata,
                page: 1
            })
        case categorysActions.FETCH_CATEGORYS_FULFILLED:
            return state.merge({
                categoryList: fromJS(artdata)
            });

        case categorysActions.FETCH_CATEGORYS_FAILED:
            return state
        case categorysActions.WILL_UNMOUNT_DROPDOWN:
            return state.set('isdropdown', false)
        case categorysActions.WILL_MOUNT_DROPDOWN:
            return state.set('isdropdown', true)


        case searchActions.RESET_HEADER_SEARCH:
        case searchActions.FETCH_SEARCH_FAILED:
            return state.merge({
                issearchLoading: false,
                searchResults: [],
                searchValue: '',
            });
        case searchActions.CHANGE_SEARCH_VAULE:
            return state.merge({
                searchValue: artdata,
                issearchLoading: true
            });
        case searchActions.SELECT_SEARCH_RESULT:
            return state.set('searchValue', artdata.title)
        case searchActions.FETCH_SEARCH_FULFILLED:
            return state.merge({
                issearchLoading: false,
                searchResults: fromJS(artdata.results)
            });
        default: return state;
    }
}

