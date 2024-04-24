const path = require('path');
const { exec } = require('child_process');

const clientLibraryPath = path.resolve(__dirname, '../../clientlibrary/js');
const command = 'npx typedoc --plugin typedoc-plugin-missing-exports --json ../../docs/scripts/out.json --pretty';

exec(command, { cwd: clientLibraryPath }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log('Documentation generated:', stdout);
});

