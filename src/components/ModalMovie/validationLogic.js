import * as Yup from 'yup';

export const addMovieSchema = Yup.object().shape({
    vote_average:Yup
        .string()
        .required("Rating required")
        .matches(
            /(^[0-9])\.([0-9]$)/,
            "Invalid Rating value, please use mask - 7.8"
        ),
    runtime:Yup
        .string()
        .required("Runtime required")
        .matches(
            /[\d]/,
            "Invalid Runtime value, integer value required"
        ),
    title: Yup
        .string()
        .required("Title required")
    ,
    overview: Yup
        .string()
        .required("Description required")
    ,
    poster_path:Yup
        .string()
        .required("URL required")
        .matches(
            /^(http|https):\/\/[^ "]+$/,
            "Invalid URL format, pls use https://"
        )
});

