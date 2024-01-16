var urlJoin = require('url-join');

/**
 * Returns a fetcher function which retrieves the available dashboard versions.
 * 
 * @param {string} serviceUrl url of the service which returns all of the dashboards
 */
function getDashboardFetcher(serviceUrl) {
    var dashboardVersions = null;

    return function dashboardFetcher() {
        if (!dashboardVersions) {
            var targetUrl = urlJoin(serviceUrl, "/dashboards/versions");
            return fetch(targetUrl)
                .then(function(response) { return response.json() })
                .then(function(versions) {
                    // Store in cache
                    dashboardVersions = versions;
                    return versions;
                })
                .catch(function(reason) {
                    console.log("Failed to fetch dashbaords versions from remote service. Reason: " + reason);
                });
        } else {
            var resultPromise = new Promise(function(resolve) {
                resolve(dashboardVersions);
            });

            return resultPromise;
        }
    }
};

/**
 * Returns all of the available dashboards versions
 * 
 * @param {FetcherFunction} fetcher fetcher function created by getDashboardFetcher
 */
function getVersions(fetcher) {
    return fetcher();
}

/**
 * Returns the latest version of a specific dashboard
 * 
 * @param {FetcherFunction} fetcher fetcher function created by getDashboardFetcher
 * @param {string} label label of the dashboard (jQuery, react, angular etc...) 
 * @param {string} name name of the dashboard (default, spin etc...)
 */
function getCurrentVersion(fetcher, label, name) {
    return fetcher()
        .then(function (dashboards) {
            var output = null;
            dashboards.forEach(function(dashboardDef) {
                if (
                    dashboardDef.label === label &&
                    dashboardDef.dashboardName === name
                ) {
                    output = dashboardDef;
                }
            });
            return output;
        });
}

module.exports = {
    getDashboardFetcher: getDashboardFetcher,
    getCurrentVersion: getCurrentVersion,
    getVersions: getVersions
};
