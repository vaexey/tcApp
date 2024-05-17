const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
    .command('watchdog [port]', 'Start watchdog', (yargs) => {
        return yargs
            .positional('port', {
                describe: "HTTP port",
                default: 25909
            })
    }, (argv) => {
        const wd = require('./watchdog')

        wd.run(argv.port);
    })
    .demandCommand(1, 1)
    .help('h')
    .parse();