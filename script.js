var temperatureData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'Température (°C)',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        borderColor: 'rgba(255, 204, 204, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25] 
    }]
};

var temperatureChart = new Chart(document.getElementById('temperature-chart'), {
    type: 'line',
    data: temperatureData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
var pressureData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'Pression (hP)',
        backgroundColor: 'rgba(51, 102, 255, 0.2)',
        borderColor: 'rgba(153, 204, 255, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25] 
    }]
};

var pressureChart = new Chart(document.getElementById('pressure-chart'), {
    type: 'line',
    data: pressureData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

var altData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'altitudes (m)',
        backgroundColor: 'rgba(51, 102, 255, 0.2)',
        borderColor: 'rgba(153, 204, 255, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25] 
    }]
};

var altChart = new Chart(document.getElementById('altitude-chart'), {
    type: 'line',
    data: altData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});



var humData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'humidité (%)',
        backgroundColor: 'rgba(51, 204, 51, 0.2)',
        borderColor: 'rgba(204, 255, 204, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25]
    }]
};

var humChart = new Chart(document.getElementById('humidity-chart'), {
    type: 'line',
    data: humData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});



var accelerationXData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'm par seconde carré',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        borderColor: 'rgba(255, 204, 204, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25] 
    }]
};

var accelerationXChart = new Chart(document.getElementById('accelerationX-chart'), {
    type: 'line',
    data: accelerationXData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});


var accelerationYData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'm par seconde carré',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        borderColor: 'rgba(255, 204, 204, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25] 
    }]
};

var accelerationYChart = new Chart(document.getElementById('accelerationY-chart'), {
    type: 'line',
    data: accelerationYData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

var accelerationZData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'm par seconde carré',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        borderColor: 'rgba(255, 204, 204, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25] 
    }]
};

var accelerationZChart = new Chart(document.getElementById('accelerationZ-chart'), {
    type: 'line',
    data: accelerationZData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});












var speedXData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'm par seconde',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        borderColor: 'rgba(255, 204, 204, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25] 
    }]
};

var speedXChart = new Chart(document.getElementById('speedX-chart'), {
    type: 'line',
    data: speedXData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});


var speedYData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'm par seconde',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        borderColor: 'rgba(255, 204, 204, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25] 
    }]
};

var speedYChart = new Chart(document.getElementById('speedY-chart'), {
    type: 'line',
    data: speedYData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

var speedZData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [{
        label: 'm par seconde',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        borderColor: 'rgba(255, 204, 204, 1)',
        borderWidth: 2,
        data: [10, 12, 15, 25, 20, 22, 25] 
    }]
};
var speedZChart = new Chart(document.getElementById('speedZ-chart'), {
    type: 'line',
    data: speedZData,
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});









fetch('data.txt')
    .then(response => response.text())
    .then(data => {
        let lines = data.split('\n');

        let labels = [];
        let temperatures = [];
       
        let latitudes = [];
        let longitudes = [];
        let altitudes = [];
        let hums = [];
        let accelerationsX = [];
        let accelerationsY = [];
        let accelerationsZ = [];

        let speedsX = [0];
        let speedsY = [0];
        let speedsZ = [0];

        let pressions = [];

        lines.forEach(line => {
            if (line.trim().startsWith('T')) {
                let parts = line.trim().split(':');

                let temperature = parseFloat(parts[1]);

                temperatures.push(temperature);
                labels.push('Point ' + temperatures.length);

            }
           if (line.trim().startsWith('P')) {
                let parts = line.trim().split(':');

                let pression = parseFloat(parts[1]);

                pressions.push(pression);

            }
           if (line.trim().startsWith('Lon')) {
                let parts = line.trim().split(':');

                let latitude = parseFloat(parts[1]);

                latitudes.push(latitude);

            }
           if (line.trim().startsWith('Lat')) {
                let parts = line.trim().split(':');

                let longitude = parseFloat(parts[1]);

                longitudes.push(longitude);

            }
            if (line.trim().startsWith('Alt')) {
                let parts = line.trim().split(':');

                let altitude = parseFloat(parts[1]);

                altitudes.push(altitude);

            }
            if (line.trim().startsWith('hum')) {
                let parts = line.trim().split(':');

                let hum = parseFloat(parts[1]);

                hums.push(hum);

            }
                       if (line.trim().startsWith('X')) {
                let parts = line.trim().split(':');

                let accelerationX = parseFloat(parts[1]);

                accelerationsX.push(accelerationX);
                speedsX.push(speedsX[speedsX.length-1]+accelerationX);


            }
                                  if (line.trim().startsWith('Y')) {
                let parts = line.trim().split(':');

                let accelerationY = parseFloat(parts[1]);

                accelerationsY.push(accelerationY);
                speedsY.push(speedsY[speedsY.length-1]+accelerationY);


            }                       if (line.trim().startsWith('Z')) {
                let parts = line.trim().split(':');

                let accelerationZ = parseFloat(parts[1]);

                accelerationsZ.push(accelerationZ);
                speedsZ.push(speedsZ[speedsZ.length-1]+accelerationZ-10.45);

            }

        });


        updateTemperatureChart(labels, temperatures);
        updatePressureChart(labels, pressions);
        updateHumChart(labels, hums);

        updateAccelerationXChart(labels, accelerationsX);
        updateAccelerationYChart(labels, accelerationsY);
        updateAccelerationZChart(labels, accelerationsZ);

        console.log(altitudes);
        updatealtitudeChart(labels, altitudes);


        updateSpeedXChart(labels, speedsX.slice(1));
        updateSpeedYChart(labels, speedsY.slice(1));
        updateSpeedZChart(labels, speedsZ.slice(1));
        console.log(speedsZ.slice(1));
                console.log(accelerationsX);

        render_3d_view(longitudes,latitudes,altitudes);

    })
    .catch(error => console.error('Erreur lors du chargement du fichier:', error));





function updatealtitudeChart(labels, temperatures) {
    altChart.data.labels = labels;
    altChart.data.datasets[0].data = temperatures;

    altChart.update();
}
function updateTemperatureChart(labels, temperatures) {
    temperatureChart.data.labels = labels;
    temperatureChart.data.datasets[0].data = temperatures;

    temperatureChart.update();
}
function updatePressureChart(labels, pressions) {
    pressureChart.data.labels = labels;
    pressureChart.data.datasets[0].data = pressions;

    pressureChart.update();
}

function updateHumChart(labels, hums) {
    humChart.data.labels = labels;
    humChart.data.datasets[0].data = hums;

    humChart.update();
}





function updateAccelerationXChart(labels, accelerationsX) {
    accelerationXChart.data.labels = labels;
    accelerationXChart.data.datasets[0].data = accelerationsX;
    accelerationXChart.update();
}function updateAccelerationYChart(labels, accelerationsY) {
    accelerationYChart.data.labels = labels;
    accelerationYChart.data.datasets[0].data = accelerationsY;
    accelerationYChart.update();
}
function updateAccelerationZChart(labels, accelerationsZ) {
    accelerationZChart.data.labels = labels;
    accelerationZChart.data.datasets[0].data = accelerationsZ;
    accelerationZChart.update();
}


function updateSpeedXChart(labels, speedsX) {
    speedXChart.data.labels = labels;
    speedXChart.data.datasets[0].data = speedsX;
    speedXChart.update();
}function updateSpeedYChart(labels, speedsY) {
    speedYChart.data.labels = labels;
    speedYChart.data.datasets[0].data = speedsY;
    speedYChart.update();
}
function updateSpeedZChart(labels, speedsZ) {
    speedZChart.data.labels = labels;
    speedZChart.data.datasets[0].data = speedsZ;
    speedZChart.update();
}




function render_3d_view(longitudes,latitudes,altitudes){
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gps_3d') });
renderer.setSize(window.innerWidth/3, window.innerHeight*0.8);

var camera = new THREE.PerspectiveCamera(750, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.set(parseFloat(latitudes[0])-50, parseFloat(longitudes[0]), parseFloat(0)); 
camera.position.set(0,-30*longitudes.length,80); 

var scene = new THREE.Scene();

var points = [];


for(let i=0;i<longitudes.length;i++){
    points.push(new THREE.Vector3(parseFloat(latitudes[i]-latitudes[0])+Math.random()*10, parseFloat(10*i), parseFloat(longitudes[i]-longitudes[0]))); 
}
console.log(altitudes.length);


var curve = new THREE.CatmullRomCurve3(points);

var geometry = new THREE.TubeGeometry(curve, 100, 3, 20, false);

var material = new THREE.MeshBasicMaterial({ color: 0x006fff });

var tube = new THREE.Mesh(geometry, material);

const axesHelper = new THREE.AxesHelper( 50);
scene.add( axesHelper );
camera.lookAt(new THREE.Vector3(0,0, 0));

scene.background = new THREE.Color(0x0d1117); 
scene.add(tube);

animate();

var radius = 800; 
var angle = 0; 

function animate() {  requestAnimationFrame(animate);

    var x = Math.cos(angle) * radius;
    var z = Math.sin(angle) * radius;
    camera.position.set(x, 100, z); 

    var centerDirection = new THREE.Vector3(0, 100, 0).normalize();

    camera.lookAt(centerDirection);

    angle += 0.01; 
        renderer.render(scene, camera);

}

}
