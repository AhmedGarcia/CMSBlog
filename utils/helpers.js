module.exports = {
    //Helper function to format the dates in a more readable way
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      },
    

    // Helper function to pluralize words depending on count
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    },

    // Helper function to trim long strings with ellipses
    folrmat_url: (url) => {
        return url
           .replace('http://', '')
           .replace('https://', '')
           .replace('www.', '')
           .split('/')[0];
    },
};