export default function submitContactInformation(fName, lName, industry, email, capacity, description) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    var urlencoded = new URLSearchParams();
    urlencoded.append('entry.1184669991', fName);
    urlencoded.append('entry.445298194', lName);
    urlencoded.append('entry.2043995476', industry);
    urlencoded.append('entry.234300751', email);
    urlencoded.append('entry.200518356', capacity);
    urlencoded.append('entry.196146073', description);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
    };

    fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLScJp9rPV1AzLgqb_NbMRcm9PgB8EZ2Za1BeAMpd6AH1tgmojQ/formResponse',
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
}
