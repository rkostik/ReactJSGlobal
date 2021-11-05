
export const timestampToString =((timestamp)=> Math.floor(timestamp / 60) + 'h ' + (timestamp - ((Math.floor(timestamp / 60)) * 60) +'min'));

export const genreConcat =((genres)=>genres.reduce((concat, current) => {
        return concat + ' & ' + current
    }));

export const getYear =((year)=> year.substr(0,4));


