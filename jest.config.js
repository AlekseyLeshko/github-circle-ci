module.exports = {
  collectCoverage: true,
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'coverage',
      outputName: 'results.xml',
    }],
  ],
  verbose: true,
};
