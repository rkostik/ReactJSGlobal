export const CONST_LIST =
    {
        SEARCH_PLACEHOLDER: 'What do you want to watch?',
        SEARCH_BTN_TXT: 'search',
        SEARCH_TITLE: 'find your movie',
        ERROR_MESSAGE: 'Something went wrong. We are trying to fix it.',
        BTN_ADD_TXT: '+add movie',
        PREFIX_LOGO: 'netflix',
        POSTFIX_LOGO: 'roulette',
        SEARCH_RESULT: ' movies found',
        CONFIRM_TITLE: 'congratulations !',
        CONFIRM_TEXT: 'The movie has been added to database successfully',
        REMOVAL_TITLE: 'delete movie',
        REMOVAL_TEXT: 'Are you sure you want to delete this movie?'
    }
;

export const DDL_GENRE={
    Width: '527px',
    Height: '57px'
}

export const CONST_ARR =
    {
        FILTER_LIST: ['all', 'documentary', 'comedy', 'horror', 'crime'],
        SORT_LIST: ['sort by', 'na']
    }

export const ADD_MOVIE_ARR = {
    title: 'title',
    movie_url: 'movie url',
    url_default: 'https://',
    rating_default: '7.8',
    runtime_default: 'minutes',
    title_default: 'movie name',
    genre: 'genre',
    release_date: 'release date',
    rating: 'rating',
    runtime: 'runtime',
    overview: 'overview',
    select_default: 'Select genre',
    main_title: 'add movie',
    overview_description: 'Movie description',
    btn_reset: 'reset',
    btn_submit: 'submit',
    select_date: 'Select Date',
    main_title_edit: 'edit movie',
}

export const initialState = {
    modalActive: false,
    editActive: false,
    typeWindow: 'add',
    activeCalendar: false,
    ddmActive: false,
    deleteActive: false,
    completeActive: false,
    viewActive: true,
    item: -1,
    amount: 6,
    sortValue: ADD_MOVIE_ARR.release_date,
    errMessage: '',
    filterName: 'all',
    isSelected: true,
    calendarDate:null,
    optionSelected: '',
    movie:[],
    movies: [
        {
            "id": 337167,
            "title": "Fifty Shades Freed",
            "tagline": "Don't miss the climax",
            "vote_average": 6.1,
            "vote_count": 1195,
            "release_date": "2018-02-07",
            "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
            "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
            "budget": 55000000,
            "revenue": 136906000,
            "genres": [
                "Drama",
                "Romance"
            ],
            "runtime": 106
        },
        {
            "id": 335984,
            "title": "Blade Runner 2049",
            "tagline": "There's still a page left.",
            "vote_average": 7.3,
            "vote_count": 3955,
            "release_date": "2017-10-04",
            "poster_path": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
            "overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
            "budget": 150000000,
            "revenue": 259239658,
            "genres": [
                "Mystery",
                "Science Fiction",
                "Thriller"
            ],
            "runtime": 163
        },
        {
            "id": 181808,
            "title": "Star Wars: The Last Jedi",
            "tagline": "The Saga Continues",
            "vote_average": 7.1,
            "vote_count": 4732,
            "release_date": "2017-12-13",
            "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
            "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
            "budget": 200000000,
            "revenue": 1325937250,
            "genres": [
                "Fantasy",
                "Adventure",
                "Science Fiction"
            ],
            "runtime": 152
        },
        {
            "id": 284054,
            "title": "Black Panther",
            "tagline": "Long live the king",
            "vote_average": 7.3,
            "vote_count": 3788,
            "release_date": "2018-02-13",
            "poster_path": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
            "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
            "budget": 200000000,
            "revenue": 1245257672,
            "genres": [
                "Action",
                "Adventure",
                "Fantasy",
                "Science Fiction"
            ],
            "runtime": 134
        },
        {
            "id": 354912,
            "title": "Coco",
            "tagline": "The celebration of a lifetime",
            "vote_average": 7.8,
            "vote_count": 3619,
            "release_date": "2017-10-27",
            "poster_path": "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
            "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
            "budget": 175000000,
            "revenue": 700920729,
            "genres": [
                "Adventure",
                "Comedy",
                "Family",
                "Animation"
            ],
            "runtime": 105
        },
        {
            "id": 333339,
            "title": "Ready Player One",
            "tagline": "A better reality awaits.",
            "vote_average": 8.1,
            "vote_count": 617,
            "release_date": "2018-03-28",
            "poster_path": "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
            "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
            "budget": 175000000,
            "revenue": 0,
            "genres": [
                "Adventure",
                "Science Fiction",
                "Action"
            ],
            "runtime": 140
        }
    ],
    const_list:
        {
            SEARCH_PLACEHOLDER: 'What do you want to watch?',
            SEARCH_BTN_TXT: 'search',
            SEARCH_TITLE: 'find your movie',
            ERROR_MESSAGE: 'Something went wrong. We are trying to fix it.',
            BTN_ADD_TXT: '+add movie',
            PREFIX_LOGO: 'netflix',
            POSTFIX_LOGO: 'roulette',
            SEARCH_RESULT: ' movies found',
            CONFIRM_TITLE: 'congratulations !',
            CONFIRM_TEXT: 'The movie has been added to database successfully',
            REMOVAL_TITLE: 'delete movie',
            REMOVAL_TEXT: 'Are you sure you want to delete this movie?'
        }
}