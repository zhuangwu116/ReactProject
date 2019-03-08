import { Record } from 'immutable';

export const Articlelist = new Record({
    isdropdown: false,
    issearchLoading: false,
    searchResults: [],
    searchValue: '',
    ordering_click: false,
    categoryvalue: -1,
    categoryList: [],
    articleList: [],
    previous: null,
    next: null,
    page: 1,
    page_size: 10,
    totalpage: 1
});