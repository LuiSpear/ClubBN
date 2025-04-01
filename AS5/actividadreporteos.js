const os = require('os');
const fs = require('fs');
const { exec } = require('child_process');

function obtenerReporteSistema() {
    const fechaActual = new Date();
    
    const reporte = {
        date: fechaActual.toLocaleDateString('es-ES'),
        time: fechaActual.toLocaleTimeString('es-ES'),
        hostname: os.hostname(),
        kernel: os.release(),
        uptime: null,
        memory: null,
        cpu: os.cpus()[0].model
    };

    exec('uptime -p', (error, stdout) => {
        if (!error) {
            reporte.uptime = stdout.trim();
        }
        exec('free -h', (errorMem, stdoutMem) => {
            if (!errorMem) {
                const lineasMemoria = stdoutMem.split('\n');
                reporte.memory = lineasMemoria[1].split(/\s+/)[1];
            }
            fs.writeFileSync('24_1_2025.json', JSON.stringify(reporte, null, 2));

            console.table(reporte);
        });
    });
}

obtenerReporteSistema();