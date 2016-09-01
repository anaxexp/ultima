/**
 * Created by cwell on 8/31/2016.
 */

System.config({
    packages: {
        [(baseUrl + 'dist')]: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import( baseUrl + 'dist/scripts/main.js')
    .then(null, console.error.bind(console));