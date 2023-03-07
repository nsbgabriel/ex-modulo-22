AOS.init();

const dataDoEvento = new Date("Sep 06, 2023 22:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval( function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundoAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundoAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);