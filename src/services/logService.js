// import Raven from "raven";

function init() {
    // Raven.config("https:// (stirng from sentry.io/id)", {
    //   release: "1-0-0",
    //   environment: "development-test",
    // }).install();
}

function log(error) {
    console.error(error);
    // Raven.captureException(error);
}

export default {
    init,
    log,
};
