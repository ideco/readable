import {baseFetch} from './index'

export const fetchCategories = () => (
    baseFetch()('categories')
);
