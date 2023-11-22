function setup()
{
    Canvas = createCanvas(500, 400);
    Canvas.center();

    Canvas.mouseReleased(classifyCanvas);

    synth = window.speechSynthesis;
}

function removeC()
{
    background("white");
}

function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw()
{
    strokeWeight(12);
    stroke("black");

    if(mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function classifyCanvas()
{
    classifier.classify(Canvas, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    
    console.log(results);

    document.getElementById("dibujo").innerHTML = "Creo que tu dibujo es: " + results[0].label;
    document.getElementById("precision").innerHTML = "Mi intinto me dice que estoy " + Math.round(results[0].confidence*100) + "% seguro";

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}


function cambiarFondo(temporal) {
    var miDiv = document.getElementById("header");

    // Cambia el fondo del div al hacer clic en el botón
    if (temporal) {
        miDiv.style.backgroundColor = "lightyellow";
    } else {
        // Al soltar el botón, vuelve al fondo original
        miDiv.style.backgroundColor = "salmon";
    }

   
}