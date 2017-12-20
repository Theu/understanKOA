import PouchDB from 'pouchdb';
// const db = new PouchDB('newDB');




const db = (function () {
    var instanceOfDb = null;
    function createInstanceOfDb() {
        var createDB = new PouchDB('newDB');
        return createDB;
    }

    return {
        getDB: function() {
            if (!instanceOfDb) {
                instanceOfDb = createInstanceOfDb();
            }
            return instanceOfDb;
        }
    };
})();

const useDb = db.getDB()

export default useDb;
