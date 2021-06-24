const { spawn,exec } = require('child_process');
let a=5

exec (`node recording.js ${a}`,(error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  })