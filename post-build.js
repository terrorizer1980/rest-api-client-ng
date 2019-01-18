const fs = require('fs-extra');

(async function build() {
  // documentation
  await fs.copy(
    './docs',
    './dist/@senzing/rest-api-client-ng/docs'
  ).catch((err)=>{
    console.log('build err #1: could not copy documentation to package.');
  });

  // do readme and markdown files
  await fs.copyFile(
    './README.md',
    './dist/@senzing/rest-api-client-ng/README.md'
  ).catch((err)=>{
    console.log('build err #2: could not copy README.md to package.');
  });

})();
