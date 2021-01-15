import Airtable from 'airtable';

const base = new Airtable({apiKey: 'key8U892NYiPtsyCA'}).base('appQqckmJIVQqYwO7');

export default function getMentorList() {
    const mentors = [];

    return new Promise((resolve, reject) => {
        base('Employee Directory')
            .select({
                view: 'All employees',
            })
            .eachPage(
                function page(records, fetchNextPage) {
                    // This function (`page`) will get called for each page of records.

                    records.forEach(function (record) {
                        console.log(record);
                        const name = record.get('Name');
                        const location = record.get('Location');
                        const title = record.get('Title');
                        const industry = record.get('Industry');
                        const image = record.get('Photo');
                        const core = record.get('Core Team') || false;
                        mentors.push({
                            name,
                            location,
                            title,
                            industry,
                            image,
                            core,
                        });
                    });

                    fetchNextPage();
                },
                function done(err) {
                    if (err) return reject(err);

                    return resolve(mentors);
                }
            );
    });
}
