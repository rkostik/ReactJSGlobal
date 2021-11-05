
export const timestampToString =((timestamp)=> Math.floor(timestamp / 60) + 'h ' + (timestamp - ((Math.floor(timestamp / 60)) * 60) +'min'));

export const genreConcat =((genres)=>genres.reduce((concat, current) => {
        return concat + ' & ' + current
    }));

/*const stringToDate =(dateVal)=>{const res = dateVal.split('-'); return new Date(res[0], res[1] - 1, res[2]); }*/
export const stringToDate =(dateVal)=> new Date(dateVal+'T00:00:00.000Z')


export const getYear =((year)=> year.substr(0,4));

export const getDateReverse = (dateVal)=>{return  dateVal != null?dateVal.toISOString().substring(0, 10).split('-').join('-'): 'Select date';}
export const getDate = (date)=>date.toISOString().substring(0, 10).split('-').join('-');


