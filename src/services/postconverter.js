//Declare postconverter first
export const postconverter = {
    toFirestore: function(dataInApp) {
        const dataInDb = {};
        Object.entries(dataInApp).forEach(entry => {
            const [key, value] = entry;
            dataInDb[key] = value;
        });
        return dataInDb;
    },
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id};
    }
};