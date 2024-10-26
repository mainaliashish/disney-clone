import config from "./config.json";
import {
    HiHome,
    // HiMagnifyingGlass,
    // HiStar,
    HiPlayCircle,
    HiTv,
    HiChevronRight,
    HiChevronLeft
} from 'react-icons/hi2'

import { HiPlus, HiDotsVertical, HiSearch } from 'react-icons/hi'

export { HiDotsVertical, HiSearch,  HiChevronRight, HiChevronLeft };

export const MENU = [
    {
        name: 'HOME',
        icon:HiHome
    },
    {
        name: 'SEARCH',
        icon:HiSearch
    },
    {
        name: 'PLUS',
        icon:HiPlus
    },
    {
        name: 'ORIGINALS',
        icon:HiPlayCircle
    },
    {
        name: 'MOVIES',
        icon:HiPlayCircle
    },
    {
        name: 'SERIES',
        icon:HiTv
    },
  ]

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + config.api.api_key
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original"

