module.exports = {
    //Function to convert string to json
    IsJsonString(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return str;
        }
    }
}